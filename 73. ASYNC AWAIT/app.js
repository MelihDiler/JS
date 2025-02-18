//                                     ---------- ASYNC AWAIT ----------

/*
    Promise işler arttıkça callback hell gibi olur ve ASYNC ile .then zincirinden kurtarırız. 

    ornekFunction()
    .then(){
        .then(){
            .then(){
                console.log("örnek")
            }
        }
    }

    Bir yerde await kulacaksın tanımlı olduğu fonksiyonun başına async yazmak zorundasın. ASYNC yazılırsa Promise döndürür.
    .then önceki kod döndüğü zaman çalışan bir metottu. Şimdi ise direkt değişkene atıyoruz fakat asenkron çalışan sunucu ile haberleşme yapıp gecikme olabilecek durumlarda örn:Promise gibi dönüşlerde sonucu değişkene atamadan alttaki koda geçmesin diye await ile sonucu bekletiyoruz.

*/


//?--------------------------------------------------------------------------------------------------------------------------------------
//?                                      ---------- ORNEK 1 ----------
//?--------------------------------------------------------------------------------------------------------------------------------------

function hello() {
    return "Hello World";
}
console.log(hello());                                                    //?     Çıktı = Hello World  -->  hello üstüne gelirsen ben sana "string" dönerim diyor.

async function hello2() {                                                //?     Başına async ekledik
    return "Hello World";
}
// console.log(hello2());                                                   //?     Çıktı = Hello World  -->  hello üstüne gelirsen ben sana "Promise" dönerim diyor.
hello2()
    .then((res) => console.log(res));                                    //?     Çıktı = Hello World  -->  Burada ise Premise'den döneni .then ile yakalayıp yazdırdık.


// //?--------------------------------------------------------------------------------------------------------------------------------------
//*--------------------------------------------------------------------------------------------------------------------------------------
//*             ---------- POST ID 1 OLANI GETIRIP SONRA ONUN YORUMLARINI GETIRECEGIZ ----------
//*--------------------------------------------------------------------------------------------------------------------------------------

//*     HTML'i kontrol et buton eklendi.

// document.querySelector("#button").addEventListener("click", () => {      //*     id'si button olana bir event ekliyoruz. click yapılırsa arrow function çalışsın. Ekranda buton var.
//     fetch("https://jsonplaceholder.typicode.com/posts/1")                //*     post id'si 1 olanın postunu getir. Response tipinde bir Promise dönecek.
//         .then((response) => response.json())                             //*     .then ile response tipindeki Promise'i yakaladık ve arrow function ile response'u json'a çevirdik.
//         .then((post) => {                                                //*     .then ile Promise gelen 1 numaralı postu yakalamış olduk.
//             fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)//*     Burada yorumların linkini verip değişken olarak da yakalamış olduğumuz postun id'sini yazdık. O id'ye sahip yorumları getirecek.
//                 .then((response) => response.json())                     //*     Response şeklinde gelen Promise'i yakaladık ve onu arrow function ile Promise'e çevirdik. Buradaki response parametresi ile yukarıdaki tamamen farklı karışmaz.
//                 .then((comments) => console.log(comments))               //*     Promise'i de .then ile yakalayıp arrow function ile ekranayazdırdık.
//         })
// })

//*     ASYNC ile kısa hali aşağıdadır.

//*--------------------------------------------------------------------------------------------------------------------------------------
//TODO-----------------------------------------------------------------------------------------------------------------------------------
//TODO                               ---------- ASYNC ILE YAPMA ----------
//TODO-----------------------------------------------------------------------------------------------------------------------------------

//TODO  YUKARIDAKİ ÖRNEĞİ ASYNC İLE YAPILIŞI:
//TODO---------------------------------------

// document.querySelector("#button").addEventListener("click", async () => {//TODO  Aşağıda await kullanacağımız için async yazmak zorundayız.
//     const responsePost = await fetch("https://jsonplaceholder.typicode.com/posts/1")//TODO  İstek yolladığımızda sunucu yavaş olabilir, sorunlu olabilir, internet yavaş olabilir hata dönebilir vb. sebeplerden dolayı bir alttaki kod çalışmamalı kod çöker. Bu sebeple await koyduk ve bu satır dönüş almadan bir alttaki satır çalışmayacak. Bana Response tipinde Promise döndüğü için onu da değişkene atadık.
//     const post = await responsePost.json();                              //TODO  Asenkron problemi yaşamamak için await ile bekletiyoruz. Her yerde await kullanılmaz sadece asenkron çalışan Promise gibi şeylerde kullanılmalı. Bu sefer de Promise tipinde post değişkenine atanır.

//     const responseComments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);//TODO  Burada yorumların linkini verip değişken olarak da yakalamış olduğumuz postun id'sini yazdık. O id'ye sahip yorumları getirecek. Burasıda asenkron çalıştığı için await ile beklettik. 

//     const comments = await responseComments.json();                      //TODO  Burası da asenkron olduğu için Response tipindeki Promise'i Promise'e çevirerek değişkene atadık.
//     console.log(comments)
// })

//TODO  YUKARIDAKİ ASYNC ÖRNEĞİNİN KISA HALİ:
//TODO---------------------------------------

document.querySelector("#button").addEventListener("click", async () => {
    const post = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()//TODO  Yukarıdakinden farkı alt satırı buraya dahil etmiş olduk. sonuna .json() koyduk ve bu işlemle bir Promise döndüğü için işlemin yapıldığı kodu parantez içine alıp başına await ekledik.
    const comments = await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json();//TODO  Burada yorumların linkini verip değişken olarak da yakalamış olduğumuz postun id'sini yazdık. O id'ye sahip yorumları getirecek. Burasıda asenkron çalıştığı için await ile beklettik. 
    console.log(comments)
})

//TODO-----------------------------------------------------------------------------------------------------------------------------------

