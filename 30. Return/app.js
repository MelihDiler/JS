//                        ---------- RETURN ----------

/* Fonksiyon içinde tanımlanmış değerleri dışarı çıkarmada kullanılır. Ayrıca return anahtar kelimesinden sonra hiçbir kod çalışmaz.
   Geriye return ile değer döndürmeyen metotlara "void" denir. metot çağrılırken sağ tarafta çıkan tooltip'de değer dönmüyorsa void,
   değer dönüyorsa dönen değer cinsi yazar.
*/

function cube(sayi){
    let sonuc = sayi*sayi*sayi;
    return sonuc;                      // "sonuc" değişkenini direkt dışarıda kullanamayız. Çünkü fonksiyon kapanır. 
}                                      // Bu sebeple return ile çıkarırız. Return ile çıkarmak için de çağırılan metodun "cube(3)" başına
                                       // "let donenDeger =" ibaresini ekleriz. 
let donenDeger = cube(3);
// console.log(sonuc);                    Bu kod hatalıdır. Fonksiyon içinde tanımlanan değişken fonksiyon dışında kullanılamaz.
console.log(donenDeger); 



