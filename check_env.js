const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log("=== Environment Verification Script ===");

// 1. Check Node Version
const nodeVersion = process.version;
console.log(`Node.js Version: ${nodeVersion}`);
const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);
if (majorVersion < 20) {
    console.error("❌ ERROR: Node.js version is too old. Next.js 16 requires Node 20+.");
} else {
    console.log("✅ Node.js version is compatible.");
}

// 2. Check for sharp
try {
    require('sharp');
    console.log("✅ 'sharp' is installed and loadable.");
} catch (e) {
    console.error("❌ ERROR: 'sharp' is missing or failed to load. This causes image issues.");
    console.error("   Run 'npm install sharp' to fix.");
    console.error(`   Details: ${e.message}`);
}

// 3. Check public folder permissions
const publicPath = path.join(__dirname, 'public');
try {
    fs.accessSync(publicPath, fs.constants.R_OK);
    console.log("✅ 'public' folder is readable.");
} catch (e) {
    console.error("❌ ERROR: 'public' folder is not readable. Check permissions.");
}

// 4. Check .next folder exists
const nextPath = path.join(__dirname, '.next');
if (fs.existsSync(nextPath)) {
    console.log("✅ '.next' build folder exists.");
} else {
    console.error("❌ ERROR: '.next' folder missing. Run 'npm run build' first.");
}

console.log("=== End Verification ===");
