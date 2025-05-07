//                                           ---------- PROMISE ----------


/*
   Asenkron yapıları senkrona çevirmek için promise kullanıyoruz. CALLBACK'lerin gelişmiş versiyonu.
   ES6 ile başladı.

   PROMISE ADIMLARI:
   -----------------
   1-) Pending              =  İşlediği an 
   2-) Fullfilled (resolve) =  İşlem başarılı oldu --> .then ile yakalarız
   3-) Rejected   (reject)  =  Reddedildi          --> .catch ile yakalarız
*/


//?--------------------------------------------------------------------------------------------------------------------------------------
//?                                           ---------- ORNEK ----------
//?--------------------------------------------------------------------------------------------------------------------------------------

// let check = true;                                                        //?     Değiştirebilmek için let ile tanımladık.
// function createPromise() {
//     return new Promise((resolve, reject) => {                            //?     Oluşturduğumuz fonksiyon Promise nesne döndürsün diye return yazdık.
//         if (check) {
//             resolve("Promise'te sıkıntı yok")                            //?     check true ise resolve dön
//         } else {
//             reject("Sıkıntı büyük")                                      //?     check false ise reject dön
//         }
//     })
// }

// createPromise()                                                          //?     İlk önce burası çalıştı.
//     .then((response) => {                                                //?     Bize dönen Promise nesnesi resolve ise .then ile yakaladık ve response parametresine atadık.
//         console.log(response);
//     })
//     .catch((error) => {                                                  //?     Bize dönen Promise nesnesi reject ise .catch ile yakaladık ve error parametresine atadık.
//         console.log(error)
//     })
//     .finally(() => console.log("Her zaman çalışır"))                     //?     Bize dönen Promise nesnesi her ne olursa olsun .finally ile yakaladık ve bir değişken dönmediği için direkt arrow function'ı çalıştırdık.


//?--------------------------------------------------------------------------------------------------------------------------------------
//*--------------------------------------------------------------------------------------------------------------------------------------
//*                     ---------- KENDI OLUSTURDUGUMUZ JSON ILE ASENKRONU SENKRONA CEVIRME ----------
//*--------------------------------------------------------------------------------------------------------------------------------------

function readStudents(url) {                                             //*     url parametresine json dosyamızı verip çalıştırdık.
   return new Promise((resolve, reject) => {                             //*     Bir Promise oluşturup onu resolve, reject değerlerini return ile döndük.
      const xhr = new XMLHttpRequest();                                  //*     XMLHttpRequest nesnesi oluşturuluyor. Bu nesne ile sunucudan veri çekme, veri gönderme gibi işlemler yapılabilir.
      try {                                                              //*     try catch'e koyduk çünkü reject kısmını else alanına yazarsak.Durum her değiştiğinde else çalışır. O yüzden bizde reject'i ilk döngüde çalıştırmasın diye catch kısmına yazdık.
         xhr.addEventListener("readystatechange", () => {                //*     xhr nesnesine bir event ekledik. readystatechange olduğunda yani sunucu her durum değiştirdiğinde arrow function çalışsın.
            if (xhr.readyState === 4 && xhr.status === 200) {            //*     readystate 4 olunca ve status 200 olunca istek gitti ve döndü demek.
               resolve(JSON.parse(xhr.responseText));                    //*     Aldığımız sonucu JSON'a çevirerek resolve'ın içerisine koyduk.
            }
         })
      } catch (error) {                                                  //*     Sistem bir hata kodu atarsa catch çalışır ve parametresine kodu atar. Eğer ki url dosya adını bilerek yanlış girersek sistem bize 404 hatasını catch ile dönecektir. Ayrıca oluşturduğumuz json dosyasında da syntax hatası yaparsak dönecektir.
         reject(error);                                                  //*     Hata kodunu reject ile döner.
      }

      xhr.open("GET", url);                                              //*     open = XMLHttpRequest nesnesi üzerinde yapılacak isteğin yapılandırılmasını sağlar. Bu metodun 3 parametresi vardır: GET isteği yapıp yani sunucudan veri almak istiyoruz. url ile Sunucunun hangi adresine istek yapılacağını belirttik. Üçüncü parametre true olarak ayarlanmıştır. Bu, isteğin asenkron yapılacağını, yani web sayfasının geri kalanının yüklenmesine engel olmadan işlemin yapılacağını belirtir. Eğer false olursa, istek senkron hale gelir ve işlem tamamlanana kadar sayfa yanıt vermez.
      xhr.send();                                                        //*     send() metodu, open() ile yapılandırılmış olan isteği sunucuya gönderir. Bu metod, isteğin başlatılmasını sağlar.
   })
}

readStudents("student.json")                                             //*     Fonksiyonumuzu çağırdık. Parametremiz bizim oluşturduğumuz json dosyasının adı. Eğer ki dosya adını bilerek yanlış girersek sistem bize 404 hatasını catch ile dönecektir. Ayrıca oluşturduğumuz json dosyasında da syntax hatası yaparsak dönecektir.
   .then((data) => {                                                     //*     .then ile yakaladığımızı data parametresine atayarak forEach'i çalıştırıyoruz.
      data.forEach(user => {
         console.log(user.firstname)
      })
   })
   .catch((err) => console.log(err))                                     //*     .catch ile yakaladığımızı err parametresine atayarak arrow function'ı çalıştırıyoruz.


//*--------------------------------------------------------------------------------------------------------------------------------------
//TODO------------------------------------------------------------------------------------------------------------------------------------
//TODO                                     ---------- PROMISE ALL ----------
//TODO------------------------------------------------------------------------------------------------------------------------------------

const p1 = Promise.resolve("Birinci promise başarılı");                  //TODO  Burada zorla Promise'i resolve döndürüp p1 değişkenine atadık.
const p2 = Promise.resolve("İkinci promise başarılı");
const p3 = new Promise((resolve, reject) => {
   resolve("Üçüncü promise başarılı")
})

Promise.all([p1, p2, p3])
   .then(res => {                                                        //TODO  Eğerki tüm promisle resolve ise then'e girer.
      console.log(res)                                                   //TODO  Her bir resolve'u array olarak döner.
   })                                                               
   .catch()                                                              //TODO  Eğerki bir tanesi bile reject olursa catch'e girer.
//TODO------------------------------------------------------------------------------------------------------------------------------------








