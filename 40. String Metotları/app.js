//                              ---------- STRING SINIFININ METOTLARI ----------

let kurs = "Modern Web Geliştirme Kursu";
let tarih = "2022";
let isim = "Melih";
let bosluklu = "   Melih Diler      ";



//?                                       ---------- CHARAT ----------

//?     Verilen indeks numarasındaki karakteri döndürür.

let karakter = kurs.charAt(5);
console.log(karakter);



//*                                       ---------- CONCAT ----------

//*     İki ve daha fazla farklı stringi birleştirip kopyasını geri döndürür.

let sonuc = kurs.concat(" ", tarih, " ", isim);
console.log(sonuc);



//TODO                                    ---------- INDEXOF ----------

//TODO  Belirtilen öğenin dizide ya da string içinde ilk bulunduğu konumu döner. Eğer öğe bulunamazsa -1 döner.

let index = kurs.indexOf("e");
console.log(index);                                      //TODO  Çıktı = 3



//!                                     ---------- LASTINDEXOF ----------

//!     Belirtilen öğenin dizide ya da string içinde son bulunduğu konumu döner. Eğer öğe bulunamazsa burada da -1 döner.

let indexLast = kurs.lastIndexOf("e");
console.log(indexLast);                                  //!     Çıktı = 20



//?                              ---------- TOUPPERCASE & TOLOWERCASE ----------

//?     Tüm harfleri büyültür ya da küçültür. Orijinale dokunmaz kopyasını döndürür. 

let buyuk = kurs.toUpperCase();
let kucuk = kurs.toLowerCase();
console.log(kurs);
console.log(buyuk);
console.log(kucuk);



//*                                        ---------- TRIM ----------

//*     Başındaki ve sonundaki boşluklar kaldırılır, ancak string’in içindeki boşluklar etkilenmez.

console.log(bosluklu);
console.log(bosluklu.trim());



//TODO                                     ---------- SLICE ----------

//TODO  Bir dizinin veya string'in belirli bir bölümünü almak için kullanılır. Kopyasını döner. İlk parametre başlangıç indeksi(dahil),
//TODO  ikinci parametre bitiş indeksi(hariç). Ayrıca negatif indexleri kabul eder. Yani saymaya sondan başlar. Başlangıç değeri bitiş
//TODO  değerinden büyük ise boş string değeri döndürür.

console.log(kurs.slice(7, 10));                          //TODO  Çıktı = WEB
console.log(kurs.slice(-6, -2));                         //TODO  Çıktı = " Kur"
console.log(kurs.slice(10, 7));                          //TODO  Çıktı = ""



//!                                     ---------- LASTINDEXOF ----------

//!     Slice'ın benzeridir. Farkları negatif index kabul etmez negatif değeri "0" olarak kabul eder. Başlangıç değeri bitişten büyük
//!     ise ikisini yer değiştirerek işlem yapar. 

console.log(kurs.substring(7, 13));                      //!     Çıktı = "Web Ge"   slice metodun aynısı
console.log(kurs.substring(-6, 2));                      //!     Çıktı = "Mo"
console.log(kurs.substring(13, 7));                      //!     Çıktı = "Web Ge"   13 ile 7 indeksini yer değiştirerek verdi.



//?                                        ---------- REPLACE ----------

//?     1. parametredeki değeri 2. parametredeki değer ile değiştir demek. Kopyasını döner.

console.log(kurs);                                      //?     Çıktı = "Modern Web Geliştirme Kursu"
console.log(kurs.replace("Modern", "Güncel"));          //?     Çıktı = "Güncel Web Geliştirme Kursu"
console.log(kurs);                                      //?     Çıktı = "Modern Web Geliştirme Kursu"



//*                                        ---------- SPLIT ----------

//*     bir string'i parametredeki değere göre bölerek bir dizi (array) oluşturmak için kullanılır. Parametredeki değer kullanılmaz.

console.log(kurs);                                      //*     Çıktı = "Modern Web Geliştirme Kursu"
let dizi = kurs.split(" ");
console.log(dizi);                                      //*     Çıktı = ['Moder', 'Web', 'Geliştirme', 'Kursu']



//TODO                                    ---------- VALUEOF ----------

//TODO  



//!                                      ---------- STARTSWITH ----------

//!     Benim metnim sana verdiğim değerle mi başlıyor? 1. parametre ile metinde bu kelime 2. parametredeki indeksten başlıyor mu? Boolean döner.

console.log(kurs);                                      //!     Çıktı = "Modern Web Geliştirme Kursu"
console.log(kurs.startsWith("Mode"));                   //!     Çıktı = true
console.log(kurs.startsWith("Web", 7));                 //!     Çıktı = true
console.log(kurs.startsWith("web", 7));                 //!     Çıktı = false  --> Çünkü büyük küçük harf duyarlılığı var.



//?                                        ---------- ENDSWITH ---------- 

//?     Benim metnim sana verdiğim değerle mi bitiyor?

console.log(kurs);                                      //?     Çıktı = "Modern Web Geliştirme Kursu"
console.log(kurs.endsWith("me Kursu"));                 //?     Çıktı = true
console.log(kurs.endsWith("U"));                        //?     Çıktı = false  --> Çünkü büyük küçük harf duyarlılığı var.