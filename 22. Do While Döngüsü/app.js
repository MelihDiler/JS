//                             ---------- DO WHILE DONGUSU ----------


//*  1'den 10'a kadar yazdırma :
//*-----------------------------
let sayac = 1;

do {
    console.log(sayac);
    sayac++;
} while (sayac <= 10);


//?  Koşul sağlamasa da bir kez çalışma örneği :
//?---------------------------------------------
let yas = 23;

do {
    console.log("Ehliyetinizi alabilirsiniz");
} while (yas >= 25);

//TODO 1'den 20'ye kadar olan tek sayıların toplamı :
//TODO-----------------------------------------------

let sayi = 0;
let sonuc = 0;

do {
    if (sayi % 2 == 1) {
        sonuc += sayi;
    }
    sayi++;
} while (sayi <= 20);
console.log("Toplam : " + sonuc);