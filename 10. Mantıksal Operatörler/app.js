//                          ---------- Mantıksal Operatörler ----------

//?                                    && Operatörü
let yas = 31;
let para = 3000;
let saglik = false;

console.log(yas > 18 && para > 2500 && saglik == true);      //?     Çıktı false olarak gelicektir. Çünkü true olarakgelmesi için tüm 
                                                             //?     şartlar true olmalıydı.

//*                                    || Operatörü
console.log(5<3 || 3>4 ||  5 == 5);                          //*     Çıktı true olur. Çünkü veya operatöründe bir tane true olması yeter.

//TODO                                 ! Operatörü
let x = false;
console.log(!x);                                             //TODO  Çıktı true gelir. Çünkü değer ne ise tersini verir.
