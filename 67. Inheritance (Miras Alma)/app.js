//                                 ---------- INHERITANCE (MIRAS ALMA) ----------

//      Person adındaki sınıfımızda firstName özelliği var. Başka sınıfları yazarken de onların içine firstName diye tekrardan değişken
//      yazmayacağız. Kod tekrarı yanlış bir programlama biçimidir. Bu sebeple miras almayı uygulayacağız

//?--------------------------------------------------------------------------------------------------------------------------------------
//?                                      ---------- ORNEK 1 ----------
//?--------------------------------------------------------------------------------------------------------------------------------------

// class Person {
//     firstName = "Melih";

//     write() {
//         console.log(this.firstName);
//     }
// }

// const person = new Person();
// person.write();                                                          //?     Çıktı = Melih


// class Student extends Person {                                           //?     Student adında sınıf oluştururken extends ile Person sınıfından miras aldık.

//     write() {                                                            //?     Bu write ile miras aldığı write bambaşka. Biz buradakini write fonksiyonunu çalıştırırken firstName özelliğini miras alıyoruz.
//         console.log(this.firstName);                                     //?     Normalde Student sınıfında firstName olmamasına rağmen "this." yani bu dediğimizde Person'a baktı miras alabildi.
//     }
// }

// const student1 = new Student();
// student1.write();
// console.log(student1.firstName);

//?--------------------------------------------------------------------------------------------------------------------------------------
//*--------------------------------------------------------------------------------------------------------------------------------------
//*                                    ---------- THIS / SUPER ----------
//*--------------------------------------------------------------------------------------------------------------------------------------

//*     this: Mevcut nesnenin özellik ve metodlarına erişim sağlar (miras alınmış olsa bile).
//*     super: Üst sınıfın metodlarına veya yapıcısına erişim sağlar. super ile doğrudan bir üst sınıfın özelliğine erişim doğrudan mümkün değildir. super yalnızca metodlara erişim sağlar. Ancak bir üst sınıfın constructor'ına erişip özelliği alabiliriz ya da dolaylı yöntemlerle bu özelliğe erişim sağlayabiliriz.

class Person2 {

    firstName2 = "Melih";
    firstName3 = "Ezgi";
    write2() {
        console.log(this.firstName2);                                    //*     this = nerede yazıldıysa orayı gösterir. Sınıfta yazıldığı için sınıftaki firstName2'yi alır.
    }
}


class Student2 extends Person2 {
    firstName3 = "Diler";
    write2() {
        console.log(this);                                               //*     Çıktı = Student2 {firstName2: 'Melih', firstName3: 'Diler'}  -->  this ile miras aldığımız özelliklere ulaşabildiğimiz için ilk önce miras aldığımız sınıfın özelliklerini sonra kendi sınıfının özelliklerini yazdı. "Ezgi" özelliği çıkmadı çünkü firstName3 adında kendi sınıfımızda değer var o onu baskıladı.
        super.write2();                                                  //*     Çıktı = Melih  -->  super ile write2 olan miras aldığı metotu çalıştırır. Mouse ile üzerine gelirsen gösterir. Miras aldığı sınıf Person2. person2'nin write2'sini çalıştır demiş olduk.
        console.log(this.firstName3);                                    //*     Çıktı = Diler  -->  miras aldığımız sınıftaki "Ezgi" aynı özellik adında olduğu için baskılandı. Onu super ile çağırabiliriz fakat direkt özelliği değil contructor yada fonksiyon ile.
    }
}

const student2 = new Student2();
student2.write2();                                                       //*     student2'deki write2 fonksiyonunu çalıştırdık.

//*--------------------------------------------------------------------------------------------------------------------------------------
//TODO-----------------------------------------------------------------------------------------------------------------------------------
//TODO                         ---------- SUPER() ----------
//TODO-----------------------------------------------------------------------------------------------------------------------------------

//TODO  super() = miras almış olduğun sınıfın constructor'ını gösterir.
//TODO  Person ile bir ana sınıf oluşturup student ve engineer sınıfları ortak özellikleri kod tekrarı yapmamak için Person'dan aldılar.

class Person {

    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }

    writeInfo() {
        console.log(this.firstName, this.lastName, this.salary);
    }

}


class Student extends Person {

    constructor(firstName, lastName, salary) {
        super(firstName, lastName, salary);                              //TODO  super() = miras almış olduğun sınıfın constructor'ını gösterir. Student'taki firstName Person'daki firstName'e atmış olduk.
    }

    writeInfo() {
        super.writeInfo();                                               //TODO  Çıktı = Melih Diler 65000  -->  super ile Person sınıfının writeInfo'sunu çalıştırdık.
    }
}


class Engineer extends Person {

    constructor(firstName, lastName, salary) {
        super(firstName, lastName, salary);                              //TODO  super() = miras almış olduğun sınıfın constructor'ını gösterir. Student'taki firstName Person'daki firstName'e atmış olduk.
    }

    writeInfo() {
        super.writeInfo();                                               //TODO  Çıktı = Ezgi Diler 65000  -->  super ile Person sınıfının writeInfo'sunu çalıştırdık.
    }
}

const student1 = new Student("Melih", "Diler", 65000);
student1.writeInfo();

const engineer1 = new Engineer("Ezgi", "Diler", 65000);
engineer1.writeInfo();

//TODO-----------------------------------------------------------------------------------------------------------------------------------


