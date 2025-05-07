//                                       ---------- AJAX ----------

/*
    -----------
    ReadyState:
    -----------                                
    0: request not initialized                       istek başlatılmadı
    1: server connection established                 sunucu bağlantısı kuruldu
    2: request received                              istek alındı
    3: processing request                            isteği işlediği an
    4: request finished and response is ready        istek tamamlandı ve yanıt hazır

    "readyState" her değiştiğinde onreadystatechange çalışır.
    Cevap metnini almak için "responseText" kullanılır.

    -------
    Status: 
    -------
    200: "OK"                                        İstek başarılı bir şekilde gitti ve döndü
    403: "FORBIDEN"                                  Bulunamadı
    404: "Page Not Found"                            Sayfa Yok
    
*/

//?--------------------------------------------------------------------------------------------------------------------------------------
//?                                           ---------- ORNEK ----------
//?--------------------------------------------------------------------------------------------------------------------------------------

function prepareURL(url, id) {
    if (id === null) {
        return url;                                                      //?     ID verilmemişse sadece URL döner
    }
    return `${url}?postId=${id}`                                         //?     URL ve ID tek metinde döndürür. Bunu GET ile kullanacağız.
}


function getComments(url, id) {
    let newURL = prepareURL(url, id);                                    //?     Fonksiyonu çalıştırıp returnden geleni newURL değişkenine atadık.
    const xhr = new XMLHttpRequest();                                    //?     XMLHttpRequest nesnesi oluşturuluyor. Bu nesne ile sunucudan veri çekme, veri gönderme gibi işlemler yapılabilir.
    xhr.addEventListener("readystatechange", () => {                     //?     xhr nesnesine bir event ekledik. readystatechange olduğunda yani sunucu durum değiştirdiğinde arrow function çalışsın.
        if (xhr.readyState === 4 && xhr.status === 200) {                //?     readystate 4 olunca ve status 200 olunca istek gitti ve döndü demek.
            console.log(JSON.parse(xhr.responseText));                   //?     Şartlar sağlanınca da cevap metnini ekrana yazdırıyoruz. Dönüş hep string olur. Bizde JSON ile dizlere çevirmiş olduk.
        }
    })

    xhr.open("GET", newURL);                                             //?     open = XMLHttpRequest nesnesi üzerinde yapılacak isteğin yapılandırılmasını sağlar. Bu metodun 3 parametresi vardır: GET isteği yapıp yani sunucudan veri almak istiyoruz. newURL ile Sunucunun hangi adresine istek yapılacağını belirttik. Üçüncü parametre true olarak ayarlanmıştır. Bu, isteğin asenkron yapılacağını, yani web sayfasının geri kalanının yüklenmesine engel olmadan işlemin yapılacağını belirtir. Eğer false olursa, istek senkron hale gelir ve işlem tamamlanana kadar sayfa yanıt vermez.
    xhr.send();                                                          //?     send() metodu, open() ile yapılandırılmış olan isteği sunucuya gönderir. Bu metod, isteğin başlatılmasını sağlar.
}

getComments("https://jsonplaceholder.typicode.com/comments", null);      //?     Bu adresi girdiğimizde filtreleme yapmadan atılmış postları ve onlara yapılan yorumları ve sahiplerini gösteriyor. null yerine ID numarası girersem bu sefer id ye sahip olanları döndürür.

//?     GET     /posts                  
//?     GET     /posts/1                
//?     GET     /posts/1/comments       
//?     GET     /comments?postId=1      .com/ sonrasına bunu ekleyip GET ile istekte bulunursak postId 1'in yorumlarını getirir.
//?     POST    /posts                  
//?     PUT     /posts/1                
//?     PATCH   /posts/1                
//?     DELETE  /posts/1                


//!     getComments() fonksiyonu bir kez çağrılır ve sonrasında readystatechange olayı içindeki kodlar, asenkron bir şekilde çalışır.

//?--------------------------------------------------------------------------------------------------------------------------------------





