//                   ---------- BREAK & CONTINUE ----------


//TODO   BREAK = Komple kırar döngüden çıkar.
//TODO   CONTINUE = 1 kere döngüyü iptal eder fakat döngüden çıkmaz.


//*  1'den 10'a kadar sayıları yazdırırken 8'e geldiğimizde döngüden çıkalım.
//*--------------------------------------------------------------------------

let sayac = 1;

while (sayac <= 10) {
    if (sayac == 8) {
        break;
    }
    console.log(sayac);
    sayac++;
}


//?  1'den 10'a kadar yazdıralım fakat 8'i yazmasın.
//?-------------------------------------------------

let sayac1 = 0;

while (sayac1 <= 10) {
    sayac1++;
    if (sayac1 > 10) {
        break;
    }
    if (sayac1 == 8) {
        continue;                          //?  Bu satırdan itibaren while döngü sonuna kadar çlıştırma demek. Bir sonraki döngüde şart
    }                                      //?  sağlamayacağı için continue sonrasındaki kodlar çalışır.
    console.log(sayac1);

}
