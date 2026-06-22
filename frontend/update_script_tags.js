const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    content = content.replace(/script\.js(\?v=\d+)?\"/g, 'script.js?v=5\"');
    fs.writeFileSync(f, content);
});
console.log('Updated script tags');
