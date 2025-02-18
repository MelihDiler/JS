//                               ---------- FOR DÖNGÜSÜ ----------


//*  1'den 10'a kadar yazdırma:
//*----------------------------

for (let i = 1; i <= 10; i++) {       
    console.log(i);
}



//?  1'den 10'a kadar çift sayıları yazdırma:
//?------------------------------------------

for (let j = 0; j <= 10; j+=2) {       //?  j = 1; dersek bu seferdee tekleri yazdırmış oluruz.
        console.log(j);
    }


//TODO  50'den 0'a kadar ekrana yazdırsın ve sonrasında toplamlarını versin.
//TODO----------------------------------------------------------------------

let toplam = 0;
for(let x = 50; x > -1; x--){
    toplam += x;                          //TODO  Değişkeni burada değilde globalde dışarda tanımladık. Çünkü içerden dışarıya ulaşılır.
    console.log(x);                       //TODO  Dışarıdan içeriye ulaşılamaz çünkü fonksiyon kapanmış olur.
}
console.log("Toplam = " + toplam);