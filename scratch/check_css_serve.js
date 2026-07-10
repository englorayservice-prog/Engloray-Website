const http = require('http');
const fs = require('fs');
const path = require('path');

http.get('http://127.0.0.1:3000/portal-tailwind.css', (res) => {
  let body = '';
  res.on('data', (chunk) => body += chunk);
  res.on('end', () => {
    const logInfo = {
      statusCode: res.statusCode,
      headers: res.headers,
      bodyPreview: body.substring(0, 500)
    };
    fs.writeFileSync(path.join(__dirname, 'css_serve_log.json'), JSON.stringify(logInfo, null, 2));
    console.log('CSS serving log written successfully!');
  });
}).on('error', (e) => {
  fs.writeFileSync(path.join(__dirname, 'css_serve_log.json'), JSON.stringify({ error: e.message }, null, 2));
  console.error('Error fetching CSS:', e.message);
});
