//                     ---------- 10'LUK SAYIYI 2'LIK SAYIYA CEVIRME ----------

/*
    10'luk sistem yani decimal'den 2'lik sisteme yani binary'e çevirme yöntemi :
    
    Örn: 15 sayısını binary'e çevirmek için : 

    13 / 2 = 6  ve kalan 1
     6 / 2 = 3  ve kalan 0
     3 / 2 = 1  ve kalan 1
     en son  1 çıktığı için onu direkt yazıyoruz,
     sonuç : 1101 bu yazım türü sondan başa doğrudur. Yani ilk önce,son işlemdeki bölüm 1 olduğu için tekrar 2'ye bölmedik ve onu başa
     yazdık. sonra 3. işlemden kalan 1'di onuda yanına yazdık. Daha sonra 2. işlemden kalan 0'dı, o nuda 3. sıraya yazdık ve ilk işlem
     olandan kalan 1 olduğu için onu da sona yazdık. Yani ters çevirmiş olduk. 

*/


convertDecimalToBinary(15);

function convertDecimalToBinary(number) {
    let binary = "";                           //*  Boş bir string oluşturduk. Çünkü 1010 01011 gibi rakaları tek tek yan yana koyacağız.
    while (true) {
        binary += (number % 2).toString();     //*  Sonucu string olarak yazıyoruz.
        number = Math.floor(number / 2);       //*  Yaptığımız işlemlerde küsürat kullanmıyoruz. O yüzden aşağı yuvarladık.
        if (number == 1) {                     //*  1, 2'ye bölünmeyip direkt yazıldığı için her döngüde kalan 1 mi diye kontrol ediyoruz.
            binary += 1;                       //*  Döngüden çıkmadan önce son kalan 1'i ekleyip o şekilde break ile çıkıyoruz. binary
            break;                             //*  değişkeni string olduğu için onunla number da birleştirsen otomatik string olur.
        }                                      //*  bu sebeple number tipinde "1" değerini yazdık.
    }
    let result = reverse(binary);              //*  Fonksiyon(metot) içinde fonksiyon(metot) çalıştırabiliyorduk. reverse fonksiyonunu
    console.log("Sonuç : " + result);          //*  binary değişkeni ile çalıştırıp sonucu result değişkenine attı.
}


function reverse(binary) {                     //?  Çıkan sonucu ters çevirmeye yarayan fonksiyonu yazıyoruz.
    let reverseBinary = "";
    for (let i = binary.length - 1; i >= 0; i--) {   //?  Her verilen deecimalin binary karşılığındaki uzunluğu değişeceği için length-1
        reverseBinary += binary.charAt(i);
    }

    return reverseBinary;
}