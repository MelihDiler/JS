//                               ---------- MATH SINIFI METOTLARI ----------
//                               -------------------------------------------




//?                                      ---------- FLOOR ----------

//?     Ondalıklı sayının "."dan sonrasını atar. Sayıyı zemine yuvarlar.

let a = 3.99;
console.log(Math.floor(a));                     //?     Çıktı = 3



//*                                       ---------- CEIL ----------

//*     Eğer bir sayı "."lı yani 4.1, 60.45 ise. Direkt üst sayıya yuvarlar. 

let b = 4.01;
console.log(Math.ceil(b));                      //?     Çıktı = 5



//TODO                                   ---------- ROUND ----------

//TODO  Ondalıklı sayımız üstü veya altı nereye yakınsa oraya yuvarlar. Tam ortasını yani 0.50'yi yukarı yuvarlar.

let c = 5.49;
let d = 5.50;
let e = 5.51;
let f = -5.50;
let g = -5.51;
console.log(Math.round(c));                     //TODO  Çıktı = 5
console.log(Math.round(d));                     //TODO  Çıktı = 6
console.log(Math.round(e));                     //TODO  Çıktı = 6
console.log(Math.round(f));                     //TODO  Çıktı = -5
console.log(Math.round(g));                     //TODO  Çıktı = -6



//!                                       ---------- MAX ----------

//!     Verdiğimiz dizideki en büyük değer döner.

console.log(Math.max(c,d,e,f,g));               //!     Çıktı = 5.51



//?                                       ---------- MIN ----------

//?     Verdiğimiz dizideki en küçük değer döner.

console.log(Math.min(c,d,e,f,g));               //?     Çıktı = -5.51



//*                                       ---------- ABS ----------

//*     Mutlak değerini döner. Yani eksi değerliler artı değerli döner.

console.log(Math.abs(g));                      //*     Çıktı = 5.51



//TODO                                    ---------- SQRT ----------

//TODO  Bir sayının karekökünü verir.

console.log(Math.sqrt(16));                    //TODO  Çıktı = 4



//!                                       ---------- POW ----------

//!     Üssünü alma işlemi yapar. İlk parmetredeki değerin ikinci parametredeki kuvvetini geri verir.

console.log(Math.pow(2,4));                    //!     Çıktı = 16    --> 2*2*2*2 = 2 üzeri 4



//?                                        ---------- PI ----------

//?     Pi sayısını verir. Bu bir metot değil property özelliktir.

console.log(Math.PI);                          //?     Çıktı = 3.141592653589793



//*                                      ---------- RANDOM ----------

//*     Rastgele bir sayı üretmemizi sağlar. Rastgel 0 ile 1 arasında bir değer döner. Bu sebeple 100 ile çarpabiliriz.

console.log(Math.floor(Math.random()*100));    //*     Çıktı  = Her zaman 0 ile 100 arasında değişir.