//                              ---------- DIZILER (ARRAYS) ----------

let dizi_ismi = [1, true, "Ahmet", '?', null, 5.12];  //  Tek bir dizi içerisinde her çeşit veri tipini tutabilir. Dizi içinde dizi olabilir.
                                                      //  Dizi içinde Nesne(object) olabilir. 
                                                      //  Bu dizi 6 elemanlıdır ve 0,1,2,3,4,5 indeksleri vardır. Foreach ile 6. indeksi
                                                      //  getir dersen undefined döner.
                                                      //  Tanımladıktan sonra da değer atayabilirsin.
                                                      //  Diziler object tipindedir.

let dizi1 = [];                                       //  Boş bizi tanımladık. Yeni yöntemdir.
let dizi2 = new Array();                              //  Nesne tabanlı boş bir dizi tanımladık. Eski yöntemdir.

let sayilar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,"Ali"];



console.log(sayilar[6]);                              //  sayilar dizisinin 6. indeksini ekran yaz demek.

console.log(sayilar[10]);                             //  "Ali" çıktısını verir.

sayilar[10]="Melih";                                  //  sayilar dizisinin 10. indeksini "Melih" olarak değiştir. 10. indeks yoksa ekler.

console.log(sayilar[10]);                             //  Yukarıda "Ali" değerini "Melih" ile değiştirdiğimiz için çıktı "Melih" olur.

console.log(sayilar[11]);                             //  11. indeks olmadığı için undefined döner.

sayilar[11]="Ezgi";                                   //  diziye yeni indeks ekler 11. indekse yeni değer atar.

console.log(sayilar[11]);                             //  Yukarıda boş olan indekse değer atandığı için undefined değil artık değer döner.

sayilar[sayilar.length]="Panduf";                     //  Dizilerdeki değerlerin sayısı indeksin 1 üstü olduğu için bu şekilde yeni
                                                      //  indeks ataması yapılabilir.
// sayilar.push("GİGİ");                              //  yeni indeks eklemenin diğer yöntemi.
                                               
console.log(sayilar[12]);