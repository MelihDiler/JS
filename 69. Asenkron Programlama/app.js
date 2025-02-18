//                                     ---------- ASENKRON PROGRAMLAMA ----------

/*
    JavaScript senkron çalışan bir dildir. 2 iş varsa biri 4sn diğeri 12sn'de bitiyorsa;
    Senkron programlama ise: sırayla yapar toplamda 16sn'de bitirir.
    Asenkron programlama ise: aynanda yapar. En uzun süreye sahip işlem süresinde hepsi biter yani 12 sn'de biter.
    
    ---------------------------------
    Asenkron en sık çalışan durumlar:
    ---------------------------------
    1-) Timing
    2-) Event(Olay)
    3-) Http isteklerinde
        -XmlHttpRequest
        -Fetch Api
        -Axios
    ---------------------------------

    ----------------------------------
    Asenkronu yönetmek için:
    ----------------------------------
    CALLBACK       -->  ES6 Önceesi  -->  callback hell
    PROMISE        -->  ES6 2015     -->  .then hell
    ASYNC  AWAIT   -->  ES7
    ----------------------------------
*/

//?--------------------------------------------------------------------------------------------------------------------------------------
//?                                       ---------- ORNEK 1 ----------
//?--------------------------------------------------------------------------------------------------------------------------------------

// console.log("Melih");

// setTimeout(() => {
//     console.log("Süre doldu ve çalıştı");
// }, 1500);

// setTimeout(() => {                                              //?     Çıktı = Melih / Diler / 500 ms bekledi ve çalıştı / Süre doldu ve 
//     console.log("500 ms bekledi ve çalıştı");                   //?     çalıştı. Normalde "Diler" en son yazıldığı için en son çıktı 
// }, 500);                                                        //?     olması lazım ama timerlar asenkron olduğu için arkada çalışır ve 
// console.log("Diler");                                           //?     kodun çalışmasına devam eder bekleme yapmaz.

// //?--------------------------------------------------------------------------------------------------------------------------------------
// //*--------------------------------------------------------------------------------------------------------------------------------------
// //*                              ---------- ASENKRON SORUNU SIMULE ETME ----------
// //*--------------------------------------------------------------------------------------------------------------------------------------

// //*     Rest API'den sanki çekmişiz gibi örnek bir dizi oluşturduk.

// const users = [
//     {
//         userId: 5,
//         post: "Melih Post 1"
//     },
//     {
//         userId: 5,
//         post: "Melih Post 2"
//     },
//     {
//         userId: 5,
//         post: "Melih Post 3"
//     },
//     {
//         userId: 6,
//         post: "Ezgi Post 1"
//     },
//     {
//         userId: 7,
//         post: "Panduf Post 1"
//     }
// ]

// function getUserId() {
//     setTimeout(() => {
//         return 5;                                               //*     API sorgulamasını zaman olarak simüle ettik. 1sn'de cevap geliyor.
//     }, 1000);
// }

// function getPostByUserId(userId) {
//     setTimeout(() => {
//         users.forEach((user) => {                               //*     Bendeki kayıtlı users'larda foreach ile dönüp user değişkenine yazıyorum.
//             if (user.userId === userId) {                       //*     Her yakaladığım dizinin userId kısmı ile return olarak dönüp userId değişkenine atadığımız 5 değeri eşit olunca kodumuz çalışır..
//                 console.log(user.post);                         //*     Yakaladığım user'ın post'unu ekrana yazdırdık.
//             }
//         })
//     }, 500);
// }

// let userId = getUserId();                                       //*     fonksiyonu çalıştırıyoruz ve 1sn sonra bize 5 cevabını dönüyor.
// getPostByUserId(userId);                                        //*     Üstteki fonksiyon daha 5 değerini dönmeden çalıştığı için çıktı yok.


//*--------------------------------------------------------------------------------------------------------------------------------------
//TODO-----------------------------------------------------------------------------------------------------------------------------------
//TODO                                        ---------- CALLBACK ----------
//TODO-----------------------------------------------------------------------------------------------------------------------------------

//TODO  Bir fonksiyonu bir fonksiyona parametre geçerek asenkron yapıyı senkrona çeviririz.
//TODO  Çıktı = Melih / Diler

// function getName(callback) {                                    //TODO  Buraya istediğin değişken adını verebilirsin. callback şart değil.
//     setTimeout(() => {
//         console.log("Melih");                                   //TODO  Sanki API'den istek yapmışım gibi 1sn'de dönen bir simülatör.
//         callback();                                             //TODO  getName'i çalıştırırken parametre olarak "getSurname"i verdik. Fonksiyon çalışırken de parametresi ile uyumlu olan şey fonksiyondur ve callback parametresine atanan getSurname callback() yerine geçerek getSurname() olur ve onu çalıştırır.
//     }, 1000);
// }

// function getSurname() {
//     setTimeout(() => {
//         console.log("Diler");                                   //TODO  Sanki API'den istek yapmışım gibi 500ms'de dönen bir simülatör.
//     }, 500);
// }

// getName(getSurname);

//TODO-----------------------------------------------------------------------------------------------------------------------------------
//!--------------------------------------------------------------------------------------------------------------------------------------
//!                                           ---------- 2. YONTEM ----------
//!--------------------------------------------------------------------------------------------------------------------------------------

//!     Burada parametre kullanarak çalıştırıyoruz.
//!     Çıktı = Melih Diler

function getName(callback) {                                    //!     Buraya istediğin değişken adını verebilirsin. callback şart değil.
    setTimeout(() => {
        let name = "Melih"                                      //!     Sanki API'den istek yapmışım gibi 1sn'de dönen bir simülatör.
        callback(name);                                         //!     Bu sefer ismi alıp yazdırmak yerine callback olan fonksiyona parametre olarak yolladık. Orada kullanıcaz.
    }, 1000);
}

function getSurname(name) {                                     //!     getName'den gelen parametre ile çalışır
    setTimeout(() => {
        let surname = "Diler";                                  //!     Sanki API'den istek yapmışım gibi 500ms'de dönen bir simülatör.
        console.log(name, surname);                             //!     Hepsi bu fonksiyonda çalıştı. name = getName'den gelen parametredir. ikisini bir yazdırdık.
    }, 500);
}

getName(getSurname);                                            //!     Yinee callback şeklinde çağırdık.


//!--------------------------------------------------------------------------------------------------------------------------------------


