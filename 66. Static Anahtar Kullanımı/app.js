//                             ---------- STATIC ANAHTAR ----------

//      Bir sınıfın içindeki özellik veya fonksiyon statik ise class'a özgüdür. Değilse nesneye özgüdür.
//      Bellek yönetimi: Static metotlar veya özellikler sınıfın örneklerine bağlı olmadığı için, her yeni örnek oluşturulduğunda tekrar tanımlanmaz.

//?--------------------------------------------------------------------------------------------------------------------------------------
//?                               ---------- ORNEK 1 ----------
//?--------------------------------------------------------------------------------------------------------------------------------------

class Matematik {

    //?     Burada parametreli constructor (Yapıcı Metot) yapmadık. Fakat derleyici arkada boş bir tane yapıyormuş.

    static topla(a, b) {
        console.log(a + b);
    }

    cikar(a, b) {
        console.log(a - b);
    }

    carp(a, b) {
        console.log(a * b);
    }

    bol(a, b) {
        console.log(a / b);
    }
}

const matematik = new Matematik();                                       //?     Parametreli bir constructer yazmadığımız için parametreli bir nesne oluşturmadık.
matematik.cikar(10, 5);                                                  //?     Sınıf içindeki fonksiyonlar parametreli, onları parametre ile çağırıp çalıştırdık.
Matematik.topla(10, 7);                                                  //?     topla fonksiyonu static ile oluşturulduğu için nesne ile ulaşmaya çalışırsan hata alırsın. O yüzden direkt sınıf adı ile ulaştık. Fakat cikar fonksiyonu static olmadığı için ona nesne üzerinden ulaştık.

//?--------------------------------------------------------------------------------------------------------------------------------------
//*--------------------------------------------------------------------------------------------------------------------------------------
//*                               ---------- ORNEK 2 ----------
//*--------------------------------------------------------------------------------------------------------------------------------------

class Insan {
    static languagesCount = 10;
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }

    writeInfo() {
        console.log(this.firstName, this.lastName, this.salary, this.languagesCount);
    }
}

const insan1 = new Insan("Melih", "Diler", 65000);
insan1.writeInfo();                                                      //?     Çıktı = Melih Diler 65000 undefined  --> sondaki tanımsız yazısının sebebi: languagesCount static tanımlandı ve nesne ile erişmeye çaıştığımız için erişemedik.

console.log(Insan.languagesCount);                                       //?     Çıktı = 10 


//*--------------------------------------------------------------------------------------------------------------------------------------



