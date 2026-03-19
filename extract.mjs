import ffmpegPath from 'ffmpeg-static';
import { execSync } from 'child_process';
import fs from 'fs';

const videoPath = 'Flow_202603190521.mp4';
const outDir = 'public/sequence';

// Clear old frames to prevent lingering frames if the new video is shorter
if (fs.existsSync(outDir)) {
  fs.rmSync(outDir, { recursive: true, force: true });
}
fs.mkdirSync(outDir, { recursive: true });

// Follow ezgif guide recommendations: 15fps, quality 85, WebP format
console.log('Automating Phase 2: Extracting frames for Scrollytelling...');
const cmd = `"${ffmpegPath}" -i "${videoPath}" -vf fps=15 -c:v libwebp -q:v 85 "${outDir}/frame_%03d.webp"`;

try {
  execSync(cmd, { stdio: 'inherit' });
  console.log('Extraction complete! Check public/sequence.');
} catch (error) {
  console.error('Extraction failed:', error.message);
}
