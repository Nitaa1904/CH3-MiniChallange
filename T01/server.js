// Mini Challange 3
// impor modul HTTP
const http = require('http');

// Menentukan hostname dan port
const hostname = '127.0.0.1'; 
const port = 3000;

// server HTTP
const server = http.createServer((req, res) => {
    // Mengatur header response
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain'); // Menetapkan tipe konten menjadi teks biasa (plain text)

    // Memproses permintaan berdasarkan URL yang diakses
    if (req.url === '/') { 
    } else if (req.url === '/about') {
        res.end('Welcome to the About page.');
    } else if (req.url === '/contact') {
        res.end('This is the Contact page.');
    } else {
        res.statusCode = 404; 
        res.end('404: Page not found'); 
    }
});

// Memulai server dan mendengarkan request pada port
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`); 
});
