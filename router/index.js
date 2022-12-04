const express = require('express');
const fs = require('fs');
const app = express();

const rootContext = 'dist';
app.use(express.static(rootContext));

app.get('/portal', function (req, res) {
  fs.readFile('dist/portal.html', (error, data) => {
    console.log('alpha 파일 읽기', { error, data });
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});

app.get('/whas', function (req, res) {
  fs.readFile('dist/whas.html', (error, data) => {
    console.log('beta 파일 읽기', { error, data });
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});
app.listen('8080', () => {
  console.log(`
        #############################################
        🛡️ Server listening on port: 8080 🛡️
        #############################################  
    `);
});
