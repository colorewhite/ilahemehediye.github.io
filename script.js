// Renk değişimini sağlayacak renklerin listesi
var renkler = [
    'rgb(255, 0, 0)',   // Kırmızı
    'rgb(0, 255, 0)',   // Yeşil
    'rgb(0, 0, 255)',   // Mavi
    'rgb(255, 255, 0)', // Sarı
    'rgb(255, 0, 255)', // Pembe
    'rgb(0, 255, 255)'  // Turkuaz
];

// Yazıyı değiştirirken renk değişimini sağlayacak fonksiyon
function renkDegistir() {
    var baslik = document.getElementById('baslik');
    var rastgeleRenk = renkler[Math.floor(Math.random() * renkler.length)];
    baslik.style.color = rastgeleRenk;
}

// Belirli aralıklarla renk değişimini çağır
setInterval(renkDegistir, 1000); // Her 1 saniyede bir

function page2() {
    window.location.href = "page2.html";
}
