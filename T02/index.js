// 1. import HTTP standar library
const http = require('http');

// 2. import module fs
const fs = require("fs");
const path = require("path");
// 3. ambil port dari env
const { PORT = 8000 } = process.env;

// 4. Fungsi untuk mengonversi objek JavaScript ke JSON string
function toJSON(data) {
  return JSON.stringify(data);
}

// 5. Request handler (semua yang datang ke server akan diproses)
function onRequest(req, res) {
  const { method, url } = req;
  
  // 6. mengecek url yang diminta
  if (url === '/api/resource') {
    let body = ''; 
    // inisiasi variabel untuk menyiman body request

    // 7. Handle GET request
    if (method === 'GET') {
      const responseJSON = toJSON({
        status: "OK",
        message: "GET request received",
        data: {
          resource: "Sample data"
        }
      });
      res.setHeader('Content-Type', 'application/json');
      res.writeHead(200); // status ok
      res.end(responseJSON);//  kirim respon
      return;
    }

    // 8. Handle POST request
    if (method === 'POST') {
      req.on('data', chunk => {
        body += chunk; // mengumpulkan data yang dikirim client
      });

      req.on('end', () => {
        try {
          const requestData = JSON.parse(body); //  parsing data yang diterima menjadi JSON
          const responseJSON = toJSON({
            status: "OK",
            message: "POST request received",
            data: requestData // Menyertakan data yang diterima dalam respons
          });
          res.setHeader('Content-Type', 'application/json');
          res.writeHead(201); // Kirim status code 201 (Created)
          res.end(responseJSON);
        } catch (error) {
             // Jika terjadi error dalam parsing JSON
          const errorJSON = toJSON({
            status: "FAIL",
            message: "Invalid JSON format"
          });
          res.setHeader('Content-Type', 'application/json');
          res.writeHead(400); // Kirim status code 400 (Bad Request)
          res.end(errorJSON);
        }
      });
      return;
    }

    // 9. Handle PUT request
    if (method === 'PUT') {
      req.on('data', chunk => {
        body += chunk; // Mengumpulkan data yang dikirim oleh client
      });

      req.on('end', () => {
        try {
          const requestData = JSON.parse(body); // Parsing data yang diterima menjadi JSON
          const responseJSON = toJSON({
            status: "OK",
            message: "PUT request received",
            updatedData: requestData // Menyertakan data yang di-update dalam respons
          });
          res.setHeader('Content-Type', 'application/json');
          res.writeHead(200); // Kirim status code 200 (OK)
          res.end(responseJSON);
        } catch (error) {
          const errorJSON = toJSON({
            status: "FAIL",
            message: "Invalid JSON format"
          });
          res.setHeader('Content-Type', 'application/json');
          res.writeHead(400);
          res.end(errorJSON);
        }
      });
      return;
    }

    // 10. Handle DELETE request
    if (method === 'DELETE') {
      const responseJSON = toJSON({
        status: "OK",
        message: "DELETE request received"
      });
      res.setHeader('Content-Type', 'application/json');
      res.writeHead(200);
      res.end(responseJSON);
      return;
    }

    // 11. Jika metode request tidak diizinkan, kirim status code 405 (Method Not Allowed)
    const notAllowedJSON = toJSON({
      status: "FAIL",
      message: `Method ${method} not allowed`
    });
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(405);
    res.end(notAllowedJSON);
    return;
  }

  // 12. Jika URL tidak ditemukan, kirim status code 404 (Not Found)
  const notFoundJSON = toJSON({
    status: "FAIL",
    message: "Resource not found"
  });
  res.setHeader('Content-Type', 'application/json');
  res.writeHead(404);
  res.end(notFoundJSON);
}

// 13. Buat server HTTP
const server = http.createServer(onRequest);

// 14. Jalankan server
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});


// LINK UNTUK RUN DI WEB: http://localhost:8000/api/resource