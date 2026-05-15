const { execSync } = require('child_process');
const ffmpeg = require('ffmpeg-static');
const path = require('path');
const fs = require('fs');

const inputVideo = path.join(__dirname, 'public', 'hand_pointing.mp4');
const outputDir = path.join(__dirname, 'public', 'hand_sequence');

// Clean and recreate output dir
if (fs.existsSync(outputDir)) {
    fs.rmSync(outputDir, { recursive: true });
}
fs.mkdirSync(outputDir, { recursive: true });

console.log('Extracting frames from hand_pointing.mp4...');

try {
    // Use jpg format - simpler and avoids animated webp issues
    const outputPattern = path.join(outputDir, 'frame_%03d.jpg');
    const cmd = `"${ffmpeg}" -i "${inputVideo}" -vf "fps=24,scale=1280:-1" -q:v 3 "${outputPattern}"`;
    console.log('Running:', cmd);
    execSync(cmd, { stdio: 'inherit' });
    
    const frames = fs.readdirSync(outputDir);
    console.log(`\nSuccess! Extracted ${frames.length} frames to public/hand_sequence/`);
} catch (e) {
    console.error('Error:', e.message);
}
