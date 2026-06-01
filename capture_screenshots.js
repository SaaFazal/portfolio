// capture_screenshots.js
const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  console.log("=============================================");
  console.log("  Puppeteer Screenshot Capture Automation  ");
  console.log("=============================================");

  const outDir = path.join(__dirname, 'public', 'projects', 'ntu-timetable');
  console.log(`Target directory: ${outDir}`);

  // Launch headless browser
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  // Set window size for crisp desktop app layout
  await page.setViewport({ width: 1150, height: 850, deviceScaleFactor: 2 });

  // 1. Capture Dashboard view
  const dashUrl = 'http://localhost:3000/projects/ntu-timetable?screenshot=true&tab=dashboard';
  console.log(`\n[1/3] Loading Dashboard view: ${dashUrl}`);
  await page.goto(dashUrl, { waitUntil: 'networkidle2' });
  console.log("Waiting 4 seconds for full React hydration and rendering...");
  await new Promise(resolve => setTimeout(resolve, 4000));
  await page.screenshot({ path: path.join(outDir, 'dashboard.png') });
  console.log("Dashboard screenshot saved!");

  // 2. Capture Calendar view
  const calUrl = 'http://localhost:3000/projects/ntu-timetable?screenshot=true&tab=calendar';
  console.log(`\n[2/3] Loading Calendar Grid view: ${calUrl}`);
  await page.goto(calUrl, { waitUntil: 'networkidle2' });
  console.log("Waiting 4 seconds for weekly grid layout render...");
  await new Promise(resolve => setTimeout(resolve, 4000));
  await page.screenshot({ path: path.join(outDir, 'calendar.png') });
  console.log("Calendar screenshot saved!");

  // 3. Capture Console Solver Logs view
  const consoleUrl = 'http://localhost:3000/projects/ntu-timetable?screenshot=true&tab=console';
  console.log(`\n[3/3] Loading Solver Console view: ${consoleUrl}`);
  await page.goto(consoleUrl, { waitUntil: 'networkidle2' });
  console.log("Waiting 5 seconds for console typing animation to finish...");
  await new Promise(resolve => setTimeout(resolve, 5000));
  await page.screenshot({ path: path.join(outDir, 'solver.png') });
  console.log("Solver screenshot saved!");

  await browser.close();
  console.log("\n=============================================");
  console.log("  [SUCCESS] All genuine screenshots captured! ");
  console.log("=============================================");
})();
