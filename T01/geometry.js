// Luas Segitiga
function luasSegitiga( a, t) {
    // operasi
    return 0.5 * a * t;
}

function luasPersegi(s) {
    return s * s;
}

function luasPersegiPanjang(p, l) {
    return p * l;
}

function luasBelahKetupat(d1, d2) {
    return 0.5 * d1 * d2;
}

module.exports = {
    luasSegitiga,
    luasPersegi,
    luasPersegiPanjang,
    luasBelahKetupat
};