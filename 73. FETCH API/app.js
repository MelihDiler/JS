//                                           ---------- FETCH API ----------

/*
    AJAX'ın daha yeni ve kolay hali
*/

//?--------------------------------------------------------------------------------------------------------------------------------------
//?                                           ---------- ORNEK 1 ----------
//?--------------------------------------------------------------------------------------------------------------------------------------

// function getStudents(url) {
//     fetch(url)                                                           //?     fetch bize promise döner ama response tipinde. Onu da .then ile aşağıda yakalıcaz.
//         .then((response) => {
//             return response.json();                                      //?     AJAX'da responseText dönerdi ama fetch'de response dönüyor. Bu yüzden response.json() dedik fakat burada da sana Promise dönerim diyor ve onu da tekrar dışarda bir altta .then ile yakalayacağız.
//         })
//         .then((data) => console.log(data))                               //?     İlk .then içindeki return ile döneni yine .then ile yakaladık.
//         .catch((err) => console.log(err))
// }

// getStudents("student.json");

//?--------------------------------------------------------------------------------------------------------------------------------------
//*--------------------------------------------------------------------------------------------------------------------------------------
//*                                      ---------- METOT ICINDE ISLEM ----------
//*--------------------------------------------------------------------------------------------------------------------------------------

//*     Yukarıdan tek farkı arrow functionlar tek satırsa return yazmana gerek yok otomatik arka planda kendisi return yazar.

function getData(url) {
    fetch(url)                                                           //*     fetch bize promise döner ama response tipinde. Onu da .then ile aşağıda yakalıcaz.
        .then((response) => response.json())                             //*     AJAX'da responseText dönerdi ama fetch'de response dönüyor. Bu yüzden response.json() dedik fakat burada da sana Promise dönerim diyor ve onu da tekrar dışarda bir altta .then ile yakalayacağız.
        .then((data) => console.log(data))                               //*     İlk .then içindeki return ile döneni yine .then ile yakaladık.
        .catch((err) => console.log(err))
}

getData("https://jsonplaceholder.typicode.com/users");

//*--------------------------------------------------------------------------------------------------------------------------------------
//TODO------------------------------------------------------------------------------------------------------------------------------------
//TODO                             ---------- METOTU CAGIRDIGIN YERDE ISLEM ----------
//TODO------------------------------------------------------------------------------------------------------------------------------------

function getData(url) {
    return fetch(url)                                                    //*     fetch bize promise döner ama response tipinde. Onu da .then ile aşağıda yakalıcaz.
}

getData("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())                                 //*     AJAX'da responseText dönerdi ama fetch'de response dönüyor. Bu yüzden response.json() dedik fakat burada da sana Promise dönerim diyor ve onu da tekrar dışarda bir altta .then ile yakalayacağız.
    .then((data) => console.log(data))                                   //*     İlk .then içindeki return ile döneni yine .then ile yakaladık.
    .catch((err) => console.log(err))

//TODO------------------------------------------------------------------------------------------------------------------------------------
//!--------------------------------------------------------------------------------------------------------------------------------------
//!                                           ---------- POST ISLEMI ----------
//!--------------------------------------------------------------------------------------------------------------------------------------

function saveStudents() {
    fetch("https://jsonplaceholder.typicode.com/albums", {               //!     Gönderilecek adres.
        method: "POST",                                                  //!     Metot tipimiz post yani gönderme.
        headers: {                            
            "Content-Type": "application/json"                           //!     JSON formatında data vericem diyoruz.
        },
        body: JSON.stringify(data)                                       //!     data değişkenindeki değerleri JSON formatında bir string olarak karşıya yükle.
    })
}

//!--------------------------------------------------------------------------------------------------------------------------------------



