//                                  ---------- Atama Operatörleri ----------
// Elindeki sayıyı aynı değişkende arttırma azaltma çarpma bölme mod alma üs alma vb. işlemleri yapmanı sağlar.

//?                                            = Operatörü
let a = 1;

//*                                            == Operatörü
console.log(5 == 5);               //*     Çıktı true olarak gelicektir.
console.log(5 == 4);               //*     Çıktı false olarak gelicektir.
console.log(5 == "5");             //*     Çıktı true olarak gelicektir. Veri tipine bakmadan değerleri karşılaştırdığı için true geldi.

//TODO                                         === Operatörü
console.log(5 === "5");            //TODO  Çıktı false olarak gelicektir. Çünkü hem veri tipi hem de değerler eşit mi diye kontrol eder.

//!                                            += Operatörü
sayi = 4;
//! sayi = sayi + 2;                       Çıktı 6 olarak gelir. Bunun yerine aşağıdaki gibi yapabilirsin.
sayi += 2;                         //!     Çıktı 6 olarak gelir.

//?                                            -= Operatörü
sayi2 = 4;
sayi2 -= 3;                        //?     Çıktı 1 olarak gelir.

//*                                            *= Operatörü
sayi3 = 4;
sayi3 *= 5;                        //*     Çıktı 20 olarak gelir.

//TODO                                         /= Operatörü
sayi4 = 4;
sayi4 /= 4;                        //TODO  Çıktı 1 olarak gelir. 4/4=1

//!                                            %= Operatörü
sayi5 = 12;
sayi5 %=5;                         //!     Çıktı 2 olarak gelir. 12'yi 5 böler kalan 2'dir. Onu da kendisine yazar.

//?                                            **= Operatörü
sayi6 = 4;
//? sayi6 = sayi6 ** 2;
sayi6 **= 2;                       //?     Çıktı 16 olarak gelir. 