//                                   ---------- DATE METODU ----------


let tarih = new Date();                   /*  Buradaki new anahtar kelimesi ile bir nesne oluşturmuş olduk. Bu sayede alt satırlarda
tarih.getTime() diyebileceğiz. Yani nesneyi tarih değişkenine attık ve o değişken ile tarihin herhangi bir yerine ulaşabiliyoruz. 
Saat, gün, ay, vb. */


//*                                      ---------- GET ----------
//*     Get ile al demiş oluruz. Bununla okuma işlemi yaparız.
 
console.log(tarih);                       //*  Çıktı = Mon Jan 06 2025 18:35:43 GMT+0300 (GMT+03:00)
console.log(tarih.getFullYear());         //*  Çıktı = 2025         --> "tarih" nesnesinin yılın getir dedik.
console.log(tarih.getMonth());            //*  Çıktı = 0            --> Aylar 0'dan 11'e kadar sıralanır. 0 = Ocak, 1 = Şubat
console.log(tarih.getDate());             //*  Çıktı = 6            --> Ayın kaçıncı günü
console.log(tarih.getDay());              //*  Çıktı = 1            --> Haftanın kaçıncı günü (Pazaretesi)
console.log(tarih.getHours());            //*  Çıktı = 18           --> Sadece saat DK yok!
console.log(tarih.getMinutes());          //*  Çıktı = 35           --> Sadece DK saat yok!
console.log(tarih.getSeconds());          //*  Çıktı = 43           --> Sadece DK saat yok!
console.log(tarih.toLocaleDateString());  //*  Çıktı = 06.01.2025   --> String
console.log(tarih.toLocaleTimeString());  //*  Çıktı = 18:35:43     --> String
console.log(tarih.toLocaleString());      //*  Çıktı = 06.01.2025 19:11:27



//?                                      ---------- SET ----------
//?     Set ile ata demiş oluruz. Bununla yazma işlemi yaparız.

console.log(tarih);                       //*  Çıktı = Mon Jan 06 2025 18:35:43 GMT+0300 (GMT+03:00)
tarih.setDate(8);                         //*  Ayın gününü 8 yaptık.
console.log(tarih);                       //*  Çıktı = Mon Jan 08 2025 18:35:43 GMT+0300 (GMT+03:00)


console.log(tarih);                       //*  Çıktı = Mon Jan 08 2025 18:35:43 GMT+0300 (GMT+03:00)
tarih.setHours(tarih.getHours()+2);       //*  O anki saatin üzerine 2 saat ekle.
console.log(tarih);                       //*  Çıktı = Mon Jan 08 2025 20:35:43 GMT+0300 (GMT+03:00)


//TODO                          ---------- KENDI TARIHINI OLUSTURMA ----------

let kendiTarihim = new Date(1993,4,18,11,45,0);          //TODO  Ayı 4 yapmamızın sebebi aylar 0. indeksten başlar mayıs 4'e denk gelir.
console.log(kendiTarihim);