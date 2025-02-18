//                                ---------- Veri Tipleri ---------


//* 1-String
let isim = "Melih";
console.log(typeof isim);      //* Bu şekilde console'dan string olarak dönüş alırız.

//* 2-Number
let sayi1 = 10;
let sayi2 = 10.1;

//* 3-Boolen
console.log(5>2);              //* TRUE
console.log(5>8);              //* FALSE

//* 4-Null (Boş)
let a = null;                  //* Null içi boş değer yok demek. "0" değildir. False değildir.
console.log(a);                //* Çıktı null olarak gelir.

//* 5-Undefined (Tanımlanmamış)
let x;
console.log(x);                //* Çıktı undefined'dır 
console.log(typeof x);         //* Çıktı undefined'dır 

//* 6-Object (Nesne)
let insan ={
    isim : "Melih",
    soyisim : "Diler",
    yas : 31
}
console.log(typeof insan);     //* Çıktı object olarak gelir.

let rakamlar = [1,2,3,4,5];    //* Bu bir dizidir.
console.log(typeof rakamlar);  //* Çıktı object olarak gelir.

//* 7-Function
let func = function(){
    console.log("Merhaba");
}

func();
console.log(typeof func);      //* Çıktı function olarak gelir.










