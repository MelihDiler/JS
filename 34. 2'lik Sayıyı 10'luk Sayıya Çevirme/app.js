//                     ---------- 2'LIK SAYIYI 10'LUK SAYIYA CEVIRME ----------

let cikti = convertBinaryToDecimal("10110010101");

function convertBinaryToDecimal(binary) {
    let usluSayi = 0;
    let sonuc = 0;

    for (let i = binary.length - 1; i >= 0; i--) {
        if (binary.charAt(Number(i) != 0)) {                               //*  "0" yutan elemandır. Bu sebeple 0'ları program şişmesin diye çaıştırmıyoruz. Çünkü 0 x 2** herhangi bir sayı ile çarparsan çarp sonuç hep 0'dır.
            sonuc += (2 ** usluSayi) * binary.charAt(Number(i));           //*  İstersek üslü hesaplama için hazır bir metot var. 
        }                                                                  //*  Math.pow(2, usluSayi);
        usluSayi++;
    }
    return sonuc;                                                          //*  Bunun yerine direkt console.log() ile yazdırabilirdim
}                                                                          //*  fakat dışarda kullanma ihtiyacımız olursa diye return
console.log("Sonuç : " + cikti);                                           //*  ile dışarı çıkardım. Bu örnek için şart değildi.