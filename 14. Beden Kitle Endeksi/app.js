//                               ---------- Vücut Kitle İndeksi ----------

let kilo = Number(prompt("Lütfen kilonuzu giriniz :"));
let boy = Number(prompt("Lütfen boyunuzu giriniz :"));
let sonuc = kilo / (boy ** 2);

if (sonuc < 18.5) {
    console.log("İdeal kilonun altında");

}
else if (sonuc > 18.5 && sonuc < 24.9) {
    console.log("ideal kiloda");
}
else if (sonuc > 25 && sonuc < 29.9) {
    console.log("ideal kilonun üstünde");
}
else if (sonuc > 30 && sonuc < 39.9) {
    console.log("İdeal kilonun çok üstünde (obez)");
}
else if (sonuc >= 40) {
    console.log("İdeal kilonun çok üstünde (morbid obez)");
}


//                               ---------- Benzin İstasyonu ----------

let dizel = 24.53, benzin = 22.25, lpg = 11.1;
const yeniSatir = "\r\n";        //* Bu koda js'de alt satıra geçmeye yarıyor. Her yerde bunu yazmak yerine değişmeyeceği için const
//* değişkenine atadık. lazım oldukça yeniSatir değişkenini çağıracağız.

const yakitMetni = "1-Dizel" + yeniSatir
    + "2-Benzin" + yeniSatir
    + "3-LPG" + yeniSatir
    + "Yakıt türünüzü seçiniz:";

let yakitTipi = prompt(yakitMetni);

if (yakitTipi == "1" || yakitTipi == "2" || yakitTipi == "3") {
    let yakitLitresi = Number(prompt("Lütfen yakıt litresini giriniz: "));
    let bakiye = Number(prompt("Bakiyenizi giriniz: "));

    if (yakitTipi == "1") {
        //DİZEL
        let odenecekTutar = dizel * yakitLitresi;
        if (odenecekTutar <= bakiye) {
            bakiye = bakiye - odenecekTutar;                        // 46. satırda uzun uzun yazmak yerine önceden işlemi yapıp orada kullandık.
            alert("Yakıt alma işlemi başarılı" + yeniSatir
                + "Kalan bakiye : " + (bakiye));

        }
        else {
            alert("Bakiyeniz yeterli değildir" + yeniSatir
                + "Ödenecek tutar :" + odenecekTutar + yeniSatir
                + "Bakiye :" + bakiye + yeniSatir
                + "Eksik Tutar : " + (odenecekTutar - bakiye));
        }

    }
    else if (yakitTipi == "2") {
        //BENZİN
    }
    else if (yakitTipi == "3") {
        //LPG
    }
    else {
        alert("Lütfen geçerli bir yakıt türü seçiniz...");
    }

}
else{
    alert("Lütfen geçerli bir yakıt türü seçiniz...");
}