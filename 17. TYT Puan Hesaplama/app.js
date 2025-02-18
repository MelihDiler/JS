//                         ---------- TYT PUAN HESAPLAMA ----------


let turkceDogru, turkceYanlis = 0;
let matDogru, matYanlis = 0;
let fenDogru, fenYanlis = 0;
let sosDogru, sosYanlis = 0;
let okulPuani = 0;
let puan = 0;


let yeniSatir = "\r\n";
let metin = "TYT puan hesaplama uygulamasına hoşgeldiniz!" + yeniSatir
    + "1-Puan Hesapla" + yeniSatir
    + "2-Çıkış yap";

let secim = prompt(metin);

switch (secim) {
    case "1":
        okulPuani = Number(prompt("Okul puanınızı giriniz: "));

        turkceDogru = Number(prompt("Türkçe doğru sayısı: "));
        turkceYanlis = Number(prompt("Türkçe yanlış sayısı: "));

        matDogru = Number(prompt("Matematik doğru sayısı: "));
        matYanlis = Number(prompt("Matematik yanlış sayısı: "));

        sosDogru = Number(prompt("Sosyal doğru sayısı: "));
        sosYanlis = Number(prompt("Sosyal yanlış sayısı: "));

        fenDogru = Number(prompt("Fen doğru sayısı: "));
        fenYanlis = Number(prompt("Fen yanlış sayısı: "));

        let dogruSayisi = turkceDogru + matDogru + sosDogru + fenDogru;
        let yanlisSayisi = turkceYanlis + matYanlis + sosYanlis + fenYanlis;
        let net = dogruSayisi - (yanlisSayisi / 4);
        puan = (net * 4) + 100 + okulPuani;

        alert("TYT Puanınız : " + puan);

        break;
    case "2":
        alert("Uygulamadan çıkış yapıldı...");
        break;
    default:
        alert("lütfen geçerli bir seçim yapınız...");
        break;
}