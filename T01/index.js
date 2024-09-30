//Mini Challange 1 
// import geometry.js
const { error } = require("console");
const geometry = require("./geometry.js");

// data
const a = 10;
const t = 4;
const s = 13;
const p = 8;
const l = 3;
const d1 = 9;
const d2 = 6;

console.log(`Luas Segitiga: ${geometry.luasSegitiga(a, t)}`);
console.log(`Luas Persegi: ${geometry.luasPersegi(s, s)}`);
console.log(`Luas Persegi Panjang: ${geometry.luasPersegiPanjang(p, l)}`);
console.log(`Luas Belah Ketupat: ${geometry.luasBelahKetupat(d1, d2)}`);


// Mini Challange 2
const fs = require("fs").promises;
fs.readFile("./log.txt", "utf-8")
    .then((data) => {
        console.log("Conten berisi: ")
        console.log(data);
    })
    .catch((error) => {
        console.log("Eror", error)
    })