# capture_screenshots.ps1
# Automates Next.js dev server boot and headless Microsoft Edge browser captures
# to snap crisp, real screenshots of the interactive TimetableSimulator GUI tabs.

Write-Host "=============================================" -ForegroundColor Cyan
Write-Host "  NTU Timetable Case Study - Screenshot Capture" -ForegroundColor Cyan
Write-Host "=============================================" -ForegroundColor Cyan

# 1. Start the Next.js development server in the background
Write-Host "[1/4] Booting Next.js development server..." -ForegroundColor Green
$devProcess = Start-Process npm -ArgumentList "run dev" -NoNewWindow -PassThru

# 2. Wait for server to boot and compile initial pages
Write-Host "[2/4] Waiting 15 seconds for server compilation..." -ForegroundColor Green
Start-Sleep -Seconds 15

# Define Edge Path and Output Directory
$edgePath = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$outDir = "C:\Users\sahad\OneDrive\Portfolio\portfolio-website\public\projects\ntu-timetable"

# Ensure output directory exists
if (-not (Test-Path $outDir)) {
    New-Item -ItemType Directory -Path $outDir -Force | Out-Null
}

Write-Host "[3/4] Automating Microsoft Edge (Headless) to capture screenshots..." -ForegroundColor Green

# Take Dashboard screenshot
Write-Host "  -> Capturing Dashboard view..." -ForegroundColor Yellow
$dashUrl = "http://localhost:3000/projects/ntu-timetable?screenshot=true&tab=dashboard"
Start-Process $edgePath -ArgumentList "--headless", "--disable-gpu", "--screenshot=`"$outDir\dashboard.png`"", "--window-size=1150,750", $dashUrl -Wait -NoNewWindow
Start-Sleep -Seconds 2

# Take Calendar screenshot
Write-Host "  -> Capturing Calendar Grid view..." -ForegroundColor Yellow
$calUrl = "http://localhost:3000/projects/ntu-timetable?screenshot=true&tab=calendar"
Start-Process $edgePath -ArgumentList "--headless", "--disable-gpu", "--screenshot=`"$outDir\calendar.png`"", "--window-size=1150,850", $calUrl -Wait -NoNewWindow
Start-Sleep -Seconds 2

# Take Solver Console screenshot
Write-Host "  -> Capturing Solver Logs view..." -ForegroundColor Yellow
$consoleUrl = "http://localhost:3000/projects/ntu-timetable?screenshot=true&tab=console"
Start-Process $edgePath -ArgumentList "--headless", "--disable-gpu", "--screenshot=`"$outDir\solver.png`"", "--window-size=1150,750", $consoleUrl -Wait -NoNewWindow
Start-Sleep -Seconds 2

# 4. Cleanup background processes
Write-Host "[4/4] Shutting down background development server..." -ForegroundColor Green
Stop-Process -Id $devProcess.Id -Force

Write-Host "`n[SUCCESS] Authentic screenshots successfully generated and saved to:" -ForegroundColor Green
Write-Host "  $outDir\" -ForegroundColor Cyan
Write-Host "=============================================" -ForegroundColor Cyan
