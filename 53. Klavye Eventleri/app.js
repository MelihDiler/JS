//                             ---------- KLAVYE EVENTLERİ ----------



//?--------------------------------------------------------------------------------------------------------------------------------------------
//?                                          keypress                 
//?--------------------------------------------------------------------------------------------------------------------------------------------

//?     Belirtilen yerde klavyede herhangi bir tuşa basılırsa çalışır. 
 
// document.addEventListener("keypress", run);                                      //?     document yerine window yazarsan iframe'lerde de çalışır.

// function run(e) {
//     console.log(e.type);                                                         //?     Çıktı = keypress
//     console.log(e.key);                                                          //?     Çıktı = Hangi tuşa bastıysan onu verir.
//     console.log(e.keyCode);                                                      //?     Çıktı = Hangi tuşa bastıysan onun ascii karşılığını verir.
//     console.log(e.which);                                                        //?     Çıktı = Yukarıdakinin farklı yöntemi.
// }


//?--------------------------------------------------------------------------------------------------------------------------------------------
//*--------------------------------------------------------------------------------------------------------------------------------------------
//*                                          keydown
//*--------------------------------------------------------------------------------------------------------------------------------------------

//*     keypress'de sadece harf ve sayılarda çalışırken kydownda tüm tuşlarda çalışır.

// document.addEventListener("keydown", run2);                                      //*     document yerine window yazarsan iframe'lerde de çalışır.

// function run2(e) {
//     console.log(e.type);                                                         //*     Çıktı = keydown
//     console.log(e.key);                                                          //*     Çıktı = Hangi tuşa bastıysan onu verir.
// }


//*--------------------------------------------------------------------------------------------------------------------------------------------
//TODO-----------------------------------------------------------------------------------------------------------------------------------------
//TODO                                        keyup
//TODO-----------------------------------------------------------------------------------------------------------------------------------------


//TODO  Tuşa basılıyken değilde bıraktığında çalışır. Tüm tuşlarda çalışır.

// document.addEventListener("keyup", run3);                                        //TODO  document yerine window yazarsan iframe'lerde de çalışır.

// function run3(e) {
//     console.log(e.type);                                                         //TODO  Çıktı = keyup
//     console.log(e.key);                                                          //TODO  Çıktı = Hangi tuşa basıp bıraktıysan onu verir.
// }


//TODO-----------------------------------------------------------------------------------------------------------------------------------------
//!--------------------------------------------------------------------------------------------------------------------------------------------
//!     F5 tuşuna bastığında sayfa yenilenmeyi iptal etme
//!--------------------------------------------------------------------------------------------------------------------------------------------

// document.addEventListener("keydown", run4);                                      

// function run4(e) {
//     console.log(e.keyCode);                                                      //!     Bundan sonraki kodlar yazılmadıysa çıktı 116 olup hemen kayboluyor çünkü sayfa yenileniyor.
//     if(e.keyCode === 116){                                                       //!     F5 tuşunun ascii karşılığı 116'dır.
//         alert("Sayfa yenileme engellendi!");
//     }

//     e.preventDefault();                                                          //!     Sayfadaki tüm varsayılan özellikleri engeller.   
// }

//!--------------------------------------------------------------------------------------------------------------------------------------------
//?--------------------------------------------------------------------------------------------------------------------------------------------
//?     Input kısmına girilen değerleri üzerindeki başlığa yazdırma               
//?--------------------------------------------------------------------------------------------------------------------------------------------
 
const cardTitle = document.querySelectorAll(".card-title")[0];
const input = document.querySelector("#todoName");                                  //?     input = Todo giriniz adlı değer alan çubuk.

input.addEventListener("keyup", run5);                                              //?     input değişkenine evennt eekledik. bir tuşa basılırsa run5 fonksiyonu çalıştırılacak.

function run5(e){
    cardTitle.textContent = e.target.value;                                         //?     target o anki çalışmış olduğu event etiketini verir. value ile de o html etiketindeki değeri almış oluruz.
}


//?--------------------------------------------------------------------------------------------------------------------------------------------
