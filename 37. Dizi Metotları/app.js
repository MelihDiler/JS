//                         ---------- DIZI METOTLARI ----------


let arabalar = ["bmw", "toyota", "renault", "mercedes", "porsche"];
let motorlar = ["harley", "ducati", "kawasaki", "yamaha"];



//?                          ---------- PUSH METODU ----------

//?     Dizinin sonuna değer ekler. = ile bir değişkene atama yaparsan dizinin son uzunluğunu döner.

console.log(arabalar.length);                  //?     Çıktı = 5
let diziUzunluk = arabalar.push("opel");       //?     arabalar.push("opel");  ile sadece dizinin sonuna değer ekleyip bırakabilirdik.
console.log(diziUzunluk);                      //?     Çıktı = 6



//*                       ---------- UNSHIFT METODU ----------

//*     Dizinin başına değer ekler. = ile bir değişkene atama yaparsan dizinin son uzunluğunu döner.

diziUzunluk = arabalar.unshift("hyundai");     //*     "hyundai","bmw","toyota","renault","mercedes","porsche","opel"   olur.
console.log(diziUzunluk);                      //*     Çıktı = 7



//TODO                       ---------- POP METODU ----------

//TODO  Dizinin sonundaki değeri siler. = ile bir değişkene atama yaparsan silinen elamanı döner.

silinenEleman = arabalar.pop();
console.log(silinenEleman);                      //TODO  Çıktı = "opel"



//!                         ---------- SHIFT METODU ----------

//!     Dizinin başındaki değeri siler. = ile bir değişkene atama yaparsan silinen elamanı döner.

silinenEleman = arabalar.shift();
console.log(silinenEleman);                      //!     Çıktı = "hyundai"



//?                        ---------- SPLICE METODU ----------

//?     ilk parametre ile işlem kaçıncı indeksten başlayacağı seçeriz. İkinci parametre ile kaç elaman sileceğimizi belirleriz.
//?     "0" ise silmez "1" ise 1 eleman "2" ise 2 eleman siler. üçüncü parametre ile de hangi değeri ekleyeceğimizi belirleriz.
//?     3. parametreye herhangi bir değer yazmazsak ekleme işlemi yapmaz.

console.log(arabalar);                           //?     Çıktı = "bmw","toyota","renault","mercedes","porsche"
silinenEleman = arabalar.splice(2, 1, "dacia");    //?     2. indeksten başlar, 1 eleman siler, "dacia" değerini ekler. Silenen değeri döner.
console.log(arabalar);                           //?     Çıktı = "bmw","toyota","dacia","mercedes","porsche"
console.log(silinenEleman);



//*                       ---------- TOSTRING METODU ----------

//*     Diziyi stringe çevirir.

let stringArabalar = arabalar.toString();        //*     Diziyi stringe çevirir.
console.log(stringArabalar);                     //*     Çıktı = string olarak olur.
console.log(typeof stringArabalar);              //*     Çıktı = string
console.log(typeof arabalar);                    //*     Çıktı = object



//TODO                      ---------- JOIN METODU ----------

//TODO  toString'den tek farkı parametrelerde belirleyeceğin işaretle ile değerleri ayırıp yine string olarak geri döner. 
//TODO  toStirng "," ile ayırır.

let join = arabalar.join("-");
console.log(join);                               //TODO  Çıktı = bmw-toyota-dacia-mercedes-porsche



//!                         ---------- CONCAT METODU ----------

//!     İki diziyi birleştiir.

let birlesmisDizi = arabalar.concat(motorlar);
console.log(birlesmisDizi);                      //!     Çıktı = "bmw","toyota","dacia","mercedes","porsche","harley","ducati","kawasaki","yamaha"



//?                         ---------- SLICE METODU ----------
//?     Belirlenen yerden itibaren dizideki elemanların kopyasını oluşturur. İlk parametre dizinin kaçıncı indeksinden başlayacağını,
//?     ikinci parametre kaçıncı indeksine kadar değer alacağını belirler. İkinci parametreyi yazmazsan sonuna kadar alır.

console.log(arabalar);                          //?     Çıktı = "bmw","toyota","dacia","mercedes","porsche"
let ayriDizi = arabalar.slice(2, 4);             //?     2. indeksten başlar 4. indekse kadar alıp ayriDizi adlı diziye kopyalar.
console.log(ayriDizi);                          //?     Çıktı = "dacia","mercedes"



//*                       ---------- TOSTRING OZELLIGI ----------

//*     Bu metot değil özelliktir. Bize dizininuzunluğunu verir.

console.log(arabalar.length);                   //*     Çıktı = 5



//TODO                     ---------- REVERSE METODU ----------
//TODO  Diziyi ters çevirerek geri verir. Kopyasını değil direkt kendisini çevirir.

console.log(arabalar);                         //TODO  Çıktı = "bmw","toyota","dacia","mercedes","porsche"
arabalar.reverse();
console.log(arabalar);                         //TODO  Çıktı = "porsche", "mercedes", "dacia", "toyota", "bmw"



//!                         ---------- SPLIT METODU ----------

//!     Elimizdeki string değer dizi olacak şekilde yazılmış ve belirli bir karakter ile bölünmüş ise bunu diziye sıkıntısız çevirir.

let isimler = "Melih,Ezgi,Panduf , Defne"      //!     Dikkat edilmesi gereken yer = Aşağıda parametre olarak "," belirledik.
//!     Yaptığı işlem sadece virgüller arasındaki değerleri alıp diziye indekslere yerleştirmek.
let isimlerDizi = isimler.split(",");          //!     Panduf'dan sonra boş krakteri, Defne'den önceki boş karakteri de alır. 
console.log(isimlerDizi);                      //!     Çıktı = "Melih", "Ezgi", "Panduf ", " Defne"



//?                        ---------- INDEXOF METODU ----------

//?     Verdiğimiz değer dizide varsa kaçıncı indexte olduğunu, yoksa -1 değerini döndürür. Birebir yazmak gerekir.

console.log(arabalar);                         //!     Çıktı = "porsche", "mercedes", "dacia", "toyota", "bmw"

let index = arabalar.indexOf("bmw");
console.log(index);                            //!     Çıktı = 4



//*                       ---------- INCLUDES METODU ----------

//*     Verdiğimiz değer dizide varsa true, yoksa false değerini döndürür. Birebir yazmak gerekir. Fakat dizi içerisinde object
//*     tanımlarsak ve bunların içerisinde string değerler varsa o zaman birebir tam eşleşme değil o string içerisinde o değer 
//*     var mı diye bakar. Yani aşağıdaki örnekte "porsche" object içinde bir string olsaydı ve biz de arabalar.model.includes(p);
//*     deseydik porsche içinde "p" harfi olduğu için onu bulacaktı. 

let sonuc = arabalar.includes("porsche");
console.log(sonuc);                            //*     Çıktı = true

if (sonuc) {
    console.log("Belirtilem eleman vardır...");//*     Çıktı = "Belirtilen eleman vardır..."
} else {
    console.log("Belirtilen eleman yoktur...");
}

//TODO                         ---------- FIND ----------

//TODO  bir dizide belirli bir koşulu sağlayan ilk öğeyi bulmak için kullanılır. Bulduğu ilk öğeyi döndürür, eğer hiçbir öğe koşulu sağlamazsa undefined döner.

const ogrenci = ogrenciler.find(ogrenci => ogrenci.id === 3);//TODO  Çikti: { id: 3, isim: "Veli" } ogrenciler dizisinin elemanlarini sirayla donup  ID'si 3 olanla ilk eşleşn elemanı döner.

