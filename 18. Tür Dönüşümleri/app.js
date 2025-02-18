/*                                  ---------- TÜR DÖNÜŞÜMLERİ ----------

    string, numbers, booleans, undefined, null, symbol    --> Primitive Data Types (İlkel Veri Tipleri) - DEĞER TİPLİ
    object, function, Array                               --> Non-Primitive Data Types (İlkel Olmayan Veri Tipleri) - REFERANS TİPLİ
*/




//                        ----- STRING TO NUMBER -----                    

let a = 5;
let b = "10";

console.log(a + b);    //* Çıktı 510 olur. Çünkü aralarında bir string varsa metin üzerinde değerlendirir ve ilk değer olan 5'in yanına
                       //* 10 yazar. Yani "a" ile "b" yi toplamaz birleştirir. Bunu yapmanın 4 yolu var.
//*     ---  1. YÖNTEM  ---

//*     let c = Number(b);
//*     console.log(a + c);

//?     ---  2. YÖNTEM  ---

//?     console.log(a + Number(b));

//TODO  ---  3. YÖNTEM  ---
//TODO  Değişken tanımlanırken dönüşüm yapılır. Yukarıdaki let b = "10"; kodu let b = Number("10"); şeklinde olmalı

//!     ---  4. YÖNTEM  ---

//!     let x = 8;
//!     let y = parseInt("12");             Tam sayılarda. 
//!     let z = parseFloat("1.1");          Ondalıklı sayılarda.
//!     console.log(x+y+z);                 Çıktı --> 8 + 12 + 1.1 = 21.1'dir.
 
//!     parseInt ve parseFloat'un Number'dan farkı    
//!     let q =  "123abc456";
//!     Number ile dönüşümde NaN (Not a Number) hatası alırız. parse ile ilk metin karakterine kadar alır yani "123" kısmını sayısal değere çevirir.


//                        ----- NUMBER TO STRING -----       


let d = 55;
console.log(typeof d);         //*  Çıktı -->  number

let e = String(60);
//* let e = (55).toString();   //*  2. yöntem
console.log(typeof e);         //*  Çıktı -->  string


//                        ----- BOOLEAN TO STRING -----


let sonuc = String(true);      //?  Boolean olan veri tipini stringe çevirir.
console.log(typeof sonuc);     //?  Çıktı --> string
console.log(sonuc);            //?  true fakat string olarak. 1-0 bool ilişkisi yoktur.


//                        ----- ARRAY TO STRING -----

let rakamlar = [1,2,3,4];
console.log(typeof rakamlar);  //!  Çıktı --> object. Arrayler object veri tipindedir.
let rakamlar2 = String([1,2,3,4]);
console.log(rakamlar2);        //!  Çıktı --> string.


//                        ----- ARRAY TO NUMBER -----


let rakamlar3 = Number([1,2,3,4]);
console.log(rakamlar3);        //*  Çıktı --> NaN (Arrayler sayıya dönemez)