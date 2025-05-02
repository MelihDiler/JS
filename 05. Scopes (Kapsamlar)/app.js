
//                                         ---------- SCOPE (KAPSAM) ----------

//    -> Global Scope         Her yerden erişilir. Bunu yapmak için hiçbir {} içinde tanımlamaman gerekiyor. Ram bellekte yer kapladığı için yavaşlamaması adına her değişkeni global değişken olarak tanımlamamak gerekir.
//    -> Function Scope
//    -> Block Scope

var sayi0 = 5;                 //*    Global değişken

function method1() {
    var sayi1 = 20;        //?    Function Scope = Sadece tanımlandığı {} içerisinde çağırabiliriz.
    console.log(sayi1);    //?    Bu kod doğru olandır. Tanımlandığı alanda çağrılmış. Fakat alttaki öyle değil.
}
//? console.log(sayi1);                 Globalde tanımlanmadığı için errişemez ve hata verir. O yüzden yorum satırı yaptık.
method1();

function method2() {
    let sayi2 = 5;             //?     Function Scope
    if (true) {
        let sayi3 = 10;        //TODO  Block scope
        console.log(sayi2);    //TODO  Bu kod block dışında tanımlandığı için çağırılabilir.
        console.log(sayi3);    //TODO  Bu kod block içinde tanımlandığı için çağırılabilir.

    }
    if (true) {
        //console.log(sayi3);  //TODO  Bu kod block dışında başka bir blockta tanımlandığı için çağıramazsın. Var olsaydı çağırılırdı. Çünkü Var değişkeni block scope'u kırar.
    }
    //console.log(sayi3);      //TODO  Bu kod method içindeki bir blockda tanımlandığı için çağıramazsın. Var olsaydı çağırılırdı. Çünkü Var değişkeni block scope'u kırar.
}
method2();


