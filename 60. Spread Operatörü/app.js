//                                    ---------- SPREAD OPERATORU ----------

let deneme = [10, 20, 30, 40];

// console.log(numbers[0],numbers[1],numbers[2],numbers[3]);              //      Bu eski yöntem

console.log(...deneme);                                                   //      Bu yeni yöntem


//?--------------------------------------------------------------------------------------------------------------------------------------
//?                                        ---------- ORNEK 1 ----------
//?--------------------------------------------------------------------------------------------------------------------------------------

let numbers = [10, 20, 30, 40];                                           //?     Klasik bir dizi tanımı
const add = (a, b, c, d) => {                                             //?     Klasik bir arrow function tanımı
    console.log(a + b + c + d);
}

add(...numbers);                                                          //?     add fonksiyonunu parametreli çağırırken parametreyi Spread ile çağırdık.


//?--------------------------------------------------------------------------------------------------------------------------------------
//*--------------------------------------------------------------------------------------------------------------------------------------
//*                                        ---------- ORNEK 2 ----------
//*--------------------------------------------------------------------------------------------------------------------------------------

const diller1 = ["Java", "C#"];
const diller2 = ["Php", "Python"];
const diller3 = ["HTML", "CSS", ...diller1, ...diller2];                  //*     Aslında şudur: ["HTML", "CSS", diller1[0], diller1[1], diller2[0],diller2[1]];

// const dillerYeni = diller1 + diller2;                                  //*     Çıktı = Java,C#Php,Pyton                  Dikkat edilirse aralarında "," yok.
// const dillerYeni = diller1.concat(diller2);                            //*     Çıktı = ['Java', 'C#', 'Php', 'Python']   Burada iki diziyi birleştirip yeni bir değişkende döndürmüştür. Eskiler hala orijinal haliyle durur.
const dillerYeni = [diller1, ...diller2]                                  //*     Çıktı = [Array(2), 'Php', 'Python']       Dikkat edilirse  ilkini kapalı bir dizi, ikincisi açık bir dizi olarak vermiş.
console.log(dillerYeni);
console.log(diller3);                                                     //*     Çıktı = ['HTML', 'CSS', 'Java', 'C#', 'Php', 'Python']      Hepsini açarak vermiş.

//*--------------------------------------------------------------------------------------------------------------------------------------
//TODO-----------------------------------------------------------------------------------------------------------------------------------
//TODO                                     ---------- ORNEK 3 ----------
//TODO-----------------------------------------------------------------------------------------------------------------------------------

const sayilar = [1,2,3,4,5,6,7,8,9,10];                                   //TODO  Klasik bir dizi tanımladık.

let [a,b] = sayilar;                                                      //TODO  Destructing ile ilk indeksi a'ya ikinci indeksi b'ye tanımladık.
console.log(a,b);                                                         //TODO  Çıktı = 1 2

let [x,y,...kalanSayilar] = sayilar;
console.log(x,y,kalanSayilar);                                            //TODO  Çıktı = 1 2 (8) [3, 4, 5, 6, 7, 8, 9, 10]


//TODO-----------------------------------------------------------------------------------------------------------------------------------









