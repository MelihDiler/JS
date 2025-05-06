//                             ---------- DESTRUCTING KULLANIMI ----------

//     Dizilerdeki elemanları sırayla tanımlanan değişkenlere tek tek tanımlar görevi budur. Tanımlarken verileri diziden alacağı için 
//     değişkenleri [] içine yazarız. Eğer ki object'den alacaksak değişkenleri {} içine tanımlarız.

//?--------------------------------------------------------------------------------------------------------------------------------------
//?                               ---------- ESKİ YÖNTEM İLE ----------
//?--------------------------------------------------------------------------------------------------------------------------------------



let langs = ["C#", "C++", "JavaScript", "Python"];
let lang1, lang2, lang3, lang4;

lang1 = langs[0];                                       //?     Arrayin 0. ndeksindeki değeri lang1 değişkenine atadık.
lang2 = langs[1];                                       //?     Arrayin 1. ndeksindeki değeri lang2 değişkenine atadık.
lang3 = langs[2];                                       //?     Arrayin 2. ndeksindeki değeri lang3 değişkenine atadık.
lang4 = langs[3];                                       //?     Arrayin 3. ndeksindeki değeri lang4 değişkenine atadık.

console.log(lang1, lang2, lang3, lang4);                //?     Çıktı = C# C++ JavaScript Python

//?--------------------------------------------------------------------------------------------------------------------------------------
//*--------------------------------------------------------------------------------------------------------------------------------------
//*                            ---------- DESTRUCTING İLE YAZMA ----------
//*--------------------------------------------------------------------------------------------------------------------------------------

//*     Yukarıdaki örnekteki gibi uzun uzun yazmak yerine destruction ile yazmak daha kullanışlıdır.

let diller = ["C#", "C++", "JavaScript", "Python"];
let [dil1, dil2, dil3, dil4] = diller;                  //*     diller adlı dizinin 0. indeksinden başlayarak sırayla oluşturduğumuz değişkenlere atıyor.

console.log(dil1, dil2, dil3, dil4);                    //*     Çıktı = C# C++ JavaScript Python

//*--------------------------------------------------------------------------------------------------------------------------------------
//TODO-----------------------------------------------------------------------------------------------------------------------------------
//TODO                    ---------- DESTRUCTING İLE YAZMA 2. YÖNTEM ----------
//TODO-----------------------------------------------------------------------------------------------------------------------------------

//TODO     Yukarıdaki örnekteki gibi uzun uzun yazmak yerine destruction ile yazmak daha kullanışlıdır.

// let diller = ["C#", "C++", "JavaScript", "Python"];
// let dil1, dil2, dil3, dil4;
// [dil1, dil2, dil3, dil4] = diller;

// console.log(dil1, dil2, dil3, dil4);                    //TODO  Çıktı = C# C++ JavaScript Python

//TODO-----------------------------------------------------------------------------------------------------------------------------------
//!--------------------------------------------------------------------------------------------------------------------------------------
//!                                   ---------- ORNEK 1 ----------
//!--------------------------------------------------------------------------------------------------------------------------------------

const hesapla = (a, b) => {
    const toplam = a + b;
    const cikar = a - b;
    const carp = a * b;
    const bol = a / b;

    const dizi = [toplam, cikar, carp, bol];
    return dizi;
}

let [a, b, c, d] = hesapla(10, 2);                      //!     Hesapla metodunu 10 ve 2 parametreleri ile çalıştırıp sonucu dizi olduğu için destructing ile sırayla oluşturulan a,b,c,d değişkenlerine atandı. //?     Diziler [] ile tanımlandığı için []'le yaptık.

console.log(a, b, c, d,);

// console.log(hesapla(10,2));                          //!     Başka bir yöntemdir. Kısadır fakat dizi döner tek tek yazmaz.


//!--------------------------------------------------------------------------------------------------------------------------------------
//?--------------------------------------------------------------------------------------------------------------------------------------
//?                               ---------- ORNEK NESNE ----------
//?--------------------------------------------------------------------------------------------------------------------------------------


const person = {
    firstName: "Melih",
    lastName: "Diler",
    salary: 65000,
    age: 31,
}

// let isim, soyisim, maas, yas;

// isim = person.firstName;
// soyisim = person.lastName;
// maas = person.salary;
// yas = person.age;

// console.log(isim, soyisim, maas, yas);
//?--------------------------------------------------------------------------------------------------------------------------------------

let { firstName, lastName, salary, age } = person         //?     Diziler [] ile tanımlandığı için []'le, nesneler {} ile tanımlandığı 
//?     için {}'le yaptık. Ayrıca nesne içindekilerle aynı isimde yapmak zorundayız. Çünkü farklı isim verirsek, anahtar değer olarak 
//?     nesne tanımlandığı için neyi nereye atacağına yani maplemeyi başaramıyor. Eğerki nesne isimleriyle değilde başka bir değişkenle
//?     kullanmak istersek:
// let {firstName:isim, lastName:soyisim, salary:maas, age:yas} = person
// console.log(isim, soyisim,maas,yas);
//?     Ayrıca şu kodu hata olarak gösterir:
// let firstName, lastName, salary, age
// {firstName, lastName, salary, age} = person
//?     Çünkü süslü parantezi block olarak algılıyor ve syntax hatası veriyor bu sebeple yukarıdaki gibi ya direkt let ile oluşturup 
//?     vericez ya bu kodu parantez içine alarak block olaark algılamasını önleyeceğiz.

console.log(firstName, lastName, salary, age);
//?--------------------------------------------------------------------------------------------------------------------------------------












