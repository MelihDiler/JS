const formWrapper = document.querySelector(".form-wrapper");                             //*     Burada querySelector ile event eklemek istediklerimizi seçiyoruz.
const form = document.querySelector("#form");
const searchInput = document.querySelector("#searchInput");
const buttonWrapper= document.querySelector(".button-wrapper");
const searchButton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const imageListWrapper = document.querySelector(".imagelist-wrapper");

runEventListeners();                                                                     //*     Aşağıdaki eventleri çalıştırmak için şartsız direkt fonksiyon oluşturduk.

function runEventListeners(){                                                            //TODO  Eventleri çalıştırır. Tüm eventler burada yazılı
    form.addEventListener("submit" , search);                                            //*     Butona basıldığında search fonksiyonunu çalıştırır. Burada şunu yapabilirdik: searchButton.addEventListener("click" , search); fakat submit ile yaparak buton tıklama dışında enter tuşuna bastığında da çalışır.
    clearButton.addEventListener("click", clear);                                        //*     Temizle butonuna click yapılırsa clear fonksiyonunu çalıştır.
}

function clear(){                                                                        //TODO  Temizle butonuna basılırsa çalışacak fonksiyon.
    searchInput.value="";                                                                //*     Arama yaptığımız yerdeki değeri boşaltıyoruz. Ekrandanda silmiş olduk.
    Array.from(imageListWrapper.children).forEach((child)=>child.remove())               //*     imageListWrapper'ın çocuklarını array'e çevirip forEach ile "child" değişkeninde dönüyoruz. child remove diyerek tüm resimleri tek tek silmiş olduk.
    // imageListWrapper.innerHTML="";
    
}

function search(e){                                                                      //TODO  e = Arama çubuğunun ve butonların bulunduğu nesnenin tamamı. Bir olay tetiklendiğinde (örneğin bir butona tıklama, bir klavye tuşuna basma, form gönderme) tarayıcı bu olaya ait bilgileri içeren bir nesne oluşturur. 
    const value = searchInput.value.trim();                                              //*     searchInput yani arama kısmındaki yazılan değerin trim ile sağındaki ve solundaki boşlukları atarak velue değişkenine yolladık.
    // @RequestParam  - Spring- Rest APİ
    fetch(`https://api.unsplash.com/search/photos?query=${value}`,{                      //*     Bu site bize çeşitli sorgular için sunucu hizmeti vermektedir. Biz de burada bir anahtar kelime girerek onunla ilgili fotoğrafları isteyeceğiz.
        method : "GET",                                                                  //*     Burası fetch'in ikinci parametresidir ve üst satırdaki açık süslü parantez ile başlar. Method = GET isteği yapıp yani sunucudan veri almak istiyoruz.
        headers : {                                                                      //*     Headers =  Birçok header olabileceği için süslü parantez açıldı.
            Authorization : "Client-ID C-ZwMdVfZLUqf2EUV6lJeOB9k0_1CVGHsXaUfwJRamU"      //*     Authorization = veri alabilmek için şifre, Access Key giriyoruz. Sitede mevcut
        }
    })
    .then((res)=> res.json())                                                            //*     Bize dönen değeri res değişkeni ile yakaladık. Response tipinde promise döndüğü için arrow func ile onu json() tipine dönüştürüp alt satırda tekrar .then ile yakalıcaz.
    .then((data)=>{                                                                      //*     Yakaladığımız değeri data parametresine atadık.
       Array.from(data.results).forEach((image)=>{                                       //*     Get sorgulaması ile bize bir nesne geliyor ve onun içinde 10 adet nesne var ve onun da içinde fotoğrafla ilgili bilgiler ve fotoğraf linki var. Bizim bunlara ulaşabilmemiz için result kısmına gitmemiz lazım. Bizim değişkenimiz data olduğu için data.results dedik. Bize 10 adet dizi geldi. Her bir indeksin içindeki url kısmı ve onun içindeki small kısmı küçük resim linki verir. Bizim bunlara ulaşmamız için önce array'e çevirdik ve sonrasında forEach ile image değişkenine döndük.
        // console.log(image.urls.small)                                                 //*     Bize gelen image içindeki url'e ve onun içindeki small kısmına ulaşarak fotoğrafın linkine erişmiş olduk.
        addImageToUI(image.urls.small)                                                   //*     Almış olduğum link ile addImageDefault fonksiyonunu çalıştırdık.
       })
    })
    .catch((err)=> console.log(err));                                                    //*     Hata dönerse err değişkeni ile yakalıyoruz ve konsola yazıyoruz..
    e.preventDefault();                                                                  //*     Submit bizim ekranı refreshlemesin diye bu kodla varsayılan özellikler iptal edildi.
}


function addImageToUI(url){                                                              //TODO  Arayüze resmi ekleme
    /*
 <div class="card">
                <img src="" alt="">
            </div>
    */
    console.log(imageListWrapper)
    const div = document.createElement("div");                                           //?     Div elementi oluşturduk.
    div.className="card";                                                                //?     Oluşturduğumuz elementin yani div'in içine card adında bir attribute yani className ekledik.

    const img = document.createElement("img");                                           //?     img elementi oluşturdk.
    img.setAttribute("src",url);                                                         //?     img elementine setAttribute ile attribute ekliyoruz. Parantez içindeki ilk parametre atribü adı ikincisi değeridir.
    img.height='400';                                                                    //?     yükseklik 400 piksel
    img.width='400';                                                                     //?     genişlik 400 piksel

    div.append(img);                                                                     //?     div'in içine img etiketini koyduk.
    imageListWrapper.append(div);                                                        //?     oluşturduğum bu div etiketini de başka bir div'in içine almam gerekiyor o da imageListWrapper adındaki div.
} 