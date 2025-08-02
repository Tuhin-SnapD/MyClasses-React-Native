const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Ensure screenshots directory exists
const screenshotsDir = path.join(__dirname, '..', 'screenshots');
if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
    console.log('✅ Created screenshots folder');
}

console.log('\n📱 SCREENSHOT CAPTURE HELPER');
console.log('=============================\n');

// Check if app is running
try {
    const result = execSync('netstat -an | findstr :19006', { encoding: 'utf8' });
    if (result.includes('LISTENING')) {
        console.log('✅ Expo app is running on port 19006');
        console.log('🌐 Web version available at: http://localhost:19006\n');
    } else {
        console.log('⚠️  Expo app might not be running');
        console.log('   Start it with: npm start\n');
    }
} catch (error) {
    console.log('⚠️  Could not check if app is running');
    console.log('   Make sure to run: npm start\n');
}

console.log('📸 MANUAL SCREENSHOT CAPTURE INSTRUCTIONS:');
console.log('===========================================\n');

const screenshots = [
    { name: 'home-screen', route: '/', description: 'Main home screen with course categories' },
    { name: 'courses-list', route: '/courses', description: 'List of all available courses' },
    { name: 'course-details', route: '/course/1', description: 'Individual course details page' },
    { name: 'about-screen', route: '/about', description: 'About page with app information' },
    { name: 'contact-screen', route: '/contact', description: 'Contact page with form' },
    { name: 'user-profile', route: '/profile', description: 'User profile and data page' }
];

console.log('1. Open your web browser and go to: http://localhost:19006');
console.log('2. Navigate to each screen using the routes below');
console.log('3. Take screenshots using browser dev tools (F12) or system screenshot tool');
console.log('4. Save each screenshot as PNG in the screenshots folder\n');

console.log('📋 REQUIRED SCREENSHOTS:');
console.log('=======================\n');

screenshots.forEach((screenshot, index) => {
    console.log(`${index + 1}. ${screenshot.name}.png`);
    console.log(`   Route: ${screenshot.route}`);
    console.log(`   Description: ${screenshot.description}`);
    console.log('');
});

console.log('💡 SCREENSHOT TIPS:');
console.log('===================\n');
console.log('• Use browser dev tools (F12) → Elements tab → Screenshot');
console.log('• Or use Windows Snipping Tool (Win + Shift + S)');
console.log('• Or use Windows Print Screen (PrtScn)');
console.log('• Save files with exact names shown above');
console.log('• Use PNG format for best quality');
console.log('• Recommended size: 1280x720 or 1920x1080\n');

console.log('📁 Screenshots will be saved to: ' + screenshotsDir);
console.log('📖 After capturing, update README.md with the screenshot paths\n');

// Create a simple HTML viewer if it doesn't exist
const viewerPath = path.join(screenshotsDir, 'viewer.html');
if (!fs.existsSync(viewerPath)) {
    const htmlContent = `<!DOCTYPE html>
<html>
<head>
    <title>App Screenshots</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }
        .container { max-width: 1200px; margin: 0 auto; }
        h1 { color: #333; text-align: center; }
        .screenshot { margin: 20px 0; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .screenshot img { max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 4px; }
        .screenshot h3 { color: #666; margin-bottom: 10px; }
        .placeholder { color: #999; font-style: italic; text-align: center; padding: 40px; border: 2px dashed #ddd; }
    </style>
</head>
<body>
    <div class="container">
        <h1>📱 App Screenshots</h1>
        ${screenshots.map(s => `
        <div class="screenshot">
            <h3>${s.name.replace('-', ' ').toUpperCase()}</h3>
            <div class="placeholder" id="${s.name}">
                📸 Screenshot: ${s.name}.png<br>
                <small>${s.description}</small>
            </div>
        </div>
        `).join('')}
    </div>
    <script>
        // Auto-load screenshots when they exist
        ${screenshots.map(s => `
        fetch('./${s.name}.png')
            .then(response => {
                if (response.ok) {
                    document.getElementById('${s.name}').innerHTML = '<img src="./${s.name}.png" alt="${s.description}">';
                }
            })
            .catch(() => {});`).join('')}
    </script>
</body>
</html>`;
    
    fs.writeFileSync(viewerPath, htmlContent);
    console.log('✅ Created screenshot viewer: screenshots/viewer.html');
    console.log('   Open this file in your browser to see all screenshots\n');
}

console.log('🚀 Ready to capture screenshots!');
console.log('   Run this script again anytime for instructions\n'); 