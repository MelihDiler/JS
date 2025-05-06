//                                    ---------- EVENT (OLAYLAR) ----------
//?--------------------------------------------------------------------------------------------------------------------------------------
//?                       1. YÖNTEM:               
//?--------------------------------------------------------------------------------------------------------------------------------------

//?     Direkt html içine yazmak. Tercih edilmez karışıklık yaratır. Temiz kod olmaz. index.html'i incele

//?--------------------------------------------------------------------------------------------------------------------------------------

//*--------------------------------------------------------------------------------------------------------------------------------------
//*                       2. YÖNTEM:
//*--------------------------------------------------------------------------------------------------------------------------------------

//*     JS'de metot yazıp o metodu index.html'de çağırmak.

function changeTitle() {                                                            //*     Burada yazan metodu index.html'de çağırdık.
    document.querySelectorAll('.card-title')[1].textContent = "Todo Listesi İsmi Değişti...";
    console.log("Todo Listesi İsmi Değişti...");
}

//*--------------------------------------------------------------------------------------------------------------------------------------

//TODO-----------------------------------------------------------------------------------------------------------------------------------
//TODO                    3. YÖNTEM:
//TODO-----------------------------------------------------------------------------------------------------------------------------------

//TODO  Tüm kodları JS'de yazıp ilgili html kodunu id, class veya tagname ile yakalamak

// const todoAddButton = document.querySelector("#todoAddButton");                 //TODO  Burada id ile yakaladığımız için querySelectorAll kullanmadık çünkü id'ler eşsiz isimler alırlar.

// todoAddButton.addEventListener("click", function () {                           //TODO  İlgili butonu todoAddButton'a atamıştık.
//     alert("Merhaba");                                                           //TODO  addEventListener metodu içine ilk parametre hangi eylem olduğunda çalışacağı. Biz butona tıklamayı seçtik.
// })                                                                              //TODO  Fakat JS'de onclick değil click yazılır bu önemli.

//TODO-----------------------------------------------------------------------------------------------------------------------------------

//!--------------------------------------------------------------------------------------------------------------------------------------
//!                       4. YÖNTEM:
//!--------------------------------------------------------------------------------------------------------------------------------------

//!     Yine tüm kodlar JS'de yazılır. Yukarkinden farkı ise addEventListener sonrasında function yazmak yerine bir function(metot)
//!     oluşturup onu çağırmak.

// const todoAddButton = document.querySelector("#todoAddButton");
// todoAddButton.addEventListener("click", changeTitle2);

// function changeTitle2() {
//     document.querySelectorAll('.card-title')[0].textContent = "Ana Başlık Değişti...";
//     console.log("Ana Başlık Değişti");
// }



// function changeTitle2(e) {
//     console.log(e.type);                                                        //!     Event'ın çalışmış olduğu tipi verir.
//     console.log(e.target);                                                      //!     Event'ın çalışmış olduğu html elementini verir.
//     console.log(e.target.textContent);                                          //!     Event'ın çalışmış olduğu html elementinin textContent'ini verir.
//     console.log(e.target.className);                                            //!     Event'ın çalışmış olduğu html elementinin className'ini verir.
// }

