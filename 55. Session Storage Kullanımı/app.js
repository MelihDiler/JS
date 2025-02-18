//                                        ---------- STORAGE ----------

//     Depolama alanıdır. String olarak eklenir ve döner. 2 adet vardır.
//     Örnekleri Session üzerinden yapıcaz fakat session yerine local yazarak aynılarını localStorage için de gerçekleştirebiliriz.
//     1-) Local Storage: Sekme, browser veya pc hangisini kaparsan kapa bilgiler yok olmaz
//     2-) Session Storage: Sekme, browser veya pc hangisini kaparsan kapa bilgiler yok olur.



//                                ---------- SESSION STORAGE KULLANIMI ----------


//?--------------------------------------------------------------------------------------------------------------------------------------------
//?                                                DEĞER EKLEME                 
//?--------------------------------------------------------------------------------------------------------------------------------------------

//?     Verdiğimiz Key ve Value parametrelerini SET komutu ile ekler. İlk parametre Key, ikinci parametre Value

sessionStorage.setItem("350", "Melih");
sessionStorage.setItem("123", "Ezgi");
sessionStorage.setItem("567", "Panduf");


//?--------------------------------------------------------------------------------------------------------------------------------------------
//*--------------------------------------------------------------------------------------------------------------------------------------------
//*                                                DEĞER SİLME
//*--------------------------------------------------------------------------------------------------------------------------------------------

//*     Verdiğimiz Key'i storge'dan REMOVE komutu ile siler

sessionStorage.removeItem("567");

// sessionStorage.clear(); Her şeyi siler.


//*--------------------------------------------------------------------------------------------------------------------------------------------
//TODO-----------------------------------------------------------------------------------------------------------------------------------------
//TODO                                             DEĞER ALMA
//TODO-----------------------------------------------------------------------------------------------------------------------------------------

//TODO  Verdiğimiz Key'i storge'dan GET komutu ile alır.

let value = sessionStorage.getItem("123");
if (value !== null) {                                                    //TODO  Verdiğimiz key'e denk bir değer yoksa "null" döndürür.
    console.log("Değer bulundu :" + value);                              //TODO  Aldığımızı gösterebilmek için console'a yazdırdık.
} else {
    console.log("Değer bulunamadı.");
}


//TODO-----------------------------------------------------------------------------------------------------------------------------------------
//!--------------------------------------------------------------------------------------------------------------------------------------------
//!                                            DEĞERLER STRING OLUR   
//!--------------------------------------------------------------------------------------------------------------------------------------------

//!     Verdiğimiz değerler numerik bile olsa string olarak kaydolur ve string olarak döner.

sessionStorage.setItem(999, 55555);
let value2 = sessionStorage.getItem(999);
console.log(value2 + " " + typeof value2);                               //!     Çıktı = 55555 string





//!--------------------------------------------------------------------------------------------------------------------------------------------
//?--------------------------------------------------------------------------------------------------------------------------------------------
//?                                       SESSION STORAGE ARRAY YAZDIRMA
//?--------------------------------------------------------------------------------------------------------------------------------------------

let names = ["Melih", "Ezgi", "Panduf", "Defne"];                        //?     Öncelikle bir Array oluşturduk.

sessionStorage.setItem("names", names);                                  //?     İlk parametre "key" ikinci parametre Array.

let value3 = sessionStorage.getItem("names");                            //?     Key ismi ile çağırdık.
console.log(value3 +" " + typeof value3);                                //?     Çıktı = Melih,Ezgi,Panduf,Defne string. Array verdik string döndü.

//?     ÇÖZÜMÜ:
//?------------


// let names = ["Melih", "Ezgi", "Panduf", "Defne"];                     //?     Öncelikle bir Array oluşturduk.

// sessionStorage.setItem("names", JSON.stringify(names));               //?     JSON.stringify ile Array olarak ekledik ve Applicationda [] içinde gözüküyor. Aslında JSON formatında bir string'e dönüştürerek gömdük.

// let value3 = JSON.parse(sessionStorage.getItem("names"));             //?     Key ismi ile çağırdık. JSON.parse ile JSON formatına döndürerek Array olarak getirdik yoksa Array olsa bile getirirken string getirecekti.
// console.log(value3 +" " + typeof value3);


//?--------------------------------------------------------------------------------------------------------------------------------------------













