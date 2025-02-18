//                             ---------- OOP (NESNE YÖNELİMLİ PROGRALAMA) ----------

// OOP = Object Oriented Programming

/*
    1-Özellikler       -->       this.isim
    2-Yapıcı metot     -->       constructor
    3-Function         -->       bilgileriGoster
*/

//  Bir sınıftaki değişkenlere, yapıcı metotlara ve functionlara erişebilmek için o sınıftan nesne oluşturmak gerekiyor.

//?--------------------------------------------------------------------------------------------------------------------------------------
//?                                  ---------- NESNE OLUSTURMA ----------
//?--------------------------------------------------------------------------------------------------------------------------------------

class Insan {                                                            //?     Sınıf
                                                                         //?     Burada bir değişken tanımlarken let veya const ile yapamazsın. Direkt değişken adıyla yazarsın. Arkada otomatik başına this. koyar fakat constructor'da this yazmak zorundasın.
    
    constructor(firstName, lastName, age, salary) {                      //?     Yapıcı metot
        this.isim = firstName;                                           //?     Parametreden gelen değeri "this" ile bu sınıfta yap diyerek "isim" adında özellik ekliyoruz.
        this.soyisim = lastName;                                         //?     Dinamik değer alması için değişkeni "this."" ile constructor içinde tanımladık.
        this.yas = age;
        this.maas = salary;
    }
    bilgileriGoster() {                                                  //?     Function
        console.log(
            `
            İsim :    ${this.isim}
            Soyisim : ${this.soyisim}
            Yaş :     ${this.yas}
            Maaş :    ${this.maas}
            `
        );
    }

}

const insan1 = new Insan("Melih", "Diler", 31, 65000);                   //?     Bir sınıftaki değişkenlere, yapıcı metotlara ve functionlara erişebilmek için o sınıftan nesne oluşturmak gerekiyor. new ile nesne oluşturduk. Değerleri sınıfa işaret ederek parametrelere gönderdik. İşlem varsa sonuç "insan1" değişkenine atanır.
const insan2 = new Insan("Ezgi", "Diler", 28, 65000);

insan1.bilgileriGoster();
insan2.bilgileriGoster();

console.log(insan1.isim);                                                //?     Çıktı = Melih
console.log(insan2.isim);                                                //?     Çıktı = Ezgi

//?--------------------------------------------------------------------------------------------------------------------------------------


