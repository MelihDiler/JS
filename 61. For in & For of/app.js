//                                 ---------- FOR IN & FOR OF ----------

let names = ["MELİH", "EZGİ", "PANDUF", "DEFNE"];

//?--------------------------------------------------------------------------------------------------------------------------------------
//?                                        ---------- FOR IN ----------
//?--------------------------------------------------------------------------------------------------------------------------------------

//?     For in döngüsü dizide döndüğü her elemanın indeksini verir.

for (let name in names) {                             //?     let ile değişken tanımlarız, in ile döneceği değişkeni yazarız.
    console.log(name);                                //?     Çıktı = 0 / 1 / 2 / 3 
}
// console.log(name, names[name]);                    //?     Çıktı = 0 Melih / 1 Ezgi / 2 Panduf / 3 Defne    Burada name ile index değerini aldığımız için yanına "," ile names değişkeninden [] içine name indeks değerlerinden eşleşenleri getir demiş olduk. Böyle indekslerin yanında değişkenlerde gelmiş oldu.

//?--------------------------------------------------------------------------------------------------------------------------------------
//*--------------------------------------------------------------------------------------------------------------------------------------
//*                                        ---------- FOR OF ----------
//*--------------------------------------------------------------------------------------------------------------------------------------

//*     For of döngüsü dizide döndüğü her elemanın değerini verir. 

for (let isim of names) {                             //*     let ile değişken tanımlarız, of ile döneceği değişkeni yazarız.
    console.log(isim);                                //*     Çıktı = MELİH / EZGİ / PANDUF / DEFNE 
}
// console.log(isim, names.indexOf(isim));            //*     Çıktı = Melih 0 / Ezgi 1 / Panduf 2 / Defne 3    Burada isim ile değişken değerini aldığımız için yanına "," ile yanına yeni bir yazılacak değer atadık. names adlı değişkenin indeksOf ile onun içindeki isim değişkenine denk gelen indeksi ver dedik.

//*--------------------------------------------------------------------------------------------------------------------------------------

