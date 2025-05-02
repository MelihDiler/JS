/*                                   ---------- DEGER VE REFERANS TIPLERI ---------- 


string, numbers, booleans, undefined, null, symbol    --> DEĞER TİPLİ - Primitive Data Types (İlkel Veri Tipleri)
object, function, Array, DOM                          --> REFERANS TİPLİ - Non-Primitive Data Types (İlkel Olmayan Veri Tipleri)

Değer Tipli       = Ramin STACK kısmında depolanır.
Referans Tipli    = Ramin HEAP kısmında depolanır.

Değer tipler değeri verir ve arasında hiçbir bağ yoktur. Değerlerinin eşit olup olmadıklarına bakar.
Referans tipler ise değerlerinin eşitliklerine değil baktıkları yerlerin aynı olup olmadıklarına bakar.
*/

//?                                          ---------- DEĞER TİPİ ----------
//?                                          --------------------------------                                

let a = 5;
let b = 5;
let c = a;

if (a == b) {
    console.log("Eşittir.");                           //?     Çıktı = Eşittir
} else {
    console.log("Eşit değildir!");
}

if (a == c) {
    console.log("Eşittir.");                           //?     Çıktı = Eşittir
} else {
    console.log("Eşit değildir!");
}



//*                                         ---------- REFERANS TİPİ ----------
//*                                         -----------------------------------    

let dizi1 = [1, 2, 3];
let dizi2 = [1, 2, 3];
let dizi3 = dizi1;

if (dizi1 == dizi2) {
    console.log("Eşittir.");                           //?     Çıktı = Eşit değildir!  -->  Çünkü değerleri aynı olabilir ama ramde
} else {                                               //?     farkı yerlerde tutulur ve bu sorguda aynı yere mi bakıyorlar diye 
    console.log("Eşit değildir!");                     //?     soruyoruz aslın.
}

if (dizi1 == dizi3) {
    console.log("Eşittir.");                           //?     Çıktı = Eşittir
} else {
    console.log("Eşit değildir!");
}

//TODO  ÖNEMLİ :
//TODO----------

let dizi4 = [1, 2, 3];
let dizi5 = dizi4;

dizi5.push(12);

console.log(dizi4);                           //?     Çıktı = 1,2,3,12
console.log(dizi5);                           //?     Çıktı = 1,2,3,12   

//?     dizi5'te yaptığımız değişiklikten dizi4'te etkilendi. Normalde değer tiplerinde bu olmaz. Fakat ram bellekte biz dizi5'e
//?     diyoruz ki dizi4'ün baktığı yere bak. Sonrasında da baktığı yere "12" değerini ekliyoruz. Bu sebeple ikisi de aynı yere
//?     baktığı için birinde yaptığımız değişiklik diğerini de etkiliyor.
