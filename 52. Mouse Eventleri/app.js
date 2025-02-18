//                             ---------- MOUSE EVENTLERİ ----------



//?--------------------------------------------------------------------------------------------------------------------------------------------
//?                                      DOMContentLoaded                 
//?--------------------------------------------------------------------------------------------------------------------------------------------

//?     Sayfan yüklendiğinde çalışır. Sayfanın kendisine event atılıyor. HTML belgesi tamamen yüklendiğinde, ancak dış kaynaklar 
//?     (örneğin resimler, CSS dosyaları, iframe'ler gibi) henüz tam olarak yüklenmemiş olabilir. Eğer sadece HTML elementlerine 
//?     erişmek veya DOM üzerinde işlem yapmak istiyorsanız, bu olayı kullanabilirsiniz. Bu, genellikle sayfanın daha hızlı çalışmasını sağlar.


window.addEventListener("DOMContentLoaded", run);

function run() {
    alert("Sayfa Yüklendi");
}


//?--------------------------------------------------------------------------------------------------------------------------------------------
//*--------------------------------------------------------------------------------------------------------------------------------------------
//*                                            load
//*--------------------------------------------------------------------------------------------------------------------------------------------

//*     Sayfadaki tüm içeriklerin (HTML, CSS, resimler, videolar, iframe'ler vb.) tamamen yüklendiği zaman tetiklenir. Sayfa içindeki tüm 
//*     kaynaklar tamamen yüklendiğinde, yani tüm dış bağlantılar dahil olmak üzere her şey hazır olduğunda tetiklenir. Eğer bir sayfa 
//*     tamamen yüklendiğinde çalıştırılması gereken bir kodunuz varsa, bu olayı kullanabilirsiniz. Genellikle daha yavaş bir olaydır
//*     çünkü tüm kaynakların yüklenmesini bekler.

window.addEventListener("load", run2);

function run2() {
    alert("Sayfa Tamamen Yüklendi");
}


//*--------------------------------------------------------------------------------------------------------------------------------------------
//TODO-----------------------------------------------------------------------------------------------------------------------------------------
//TODO                                        click
//TODO-----------------------------------------------------------------------------------------------------------------------------------------


const cardTitle = document.querySelectorAll(".card-title")[0];                //TODO  Todo List Sayfası yazısına tıklandığında

cardTitle.addEventListener("click", run3);

function run3(e) {                                                            //TODO  Tıklandığında eventin tipini yazdırdık.
    console.log(e.type);                                                      //TODO  Çıktı = click
}


//TODO-----------------------------------------------------------------------------------------------------------------------------------------
//!--------------------------------------------------------------------------------------------------------------------------------------------
//!                                          dblclick
//!--------------------------------------------------------------------------------------------------------------------------------------------


const cardTitle2 = document.querySelectorAll(".card-title")[1];               //!     Todo Listesi yazısına tıklandığında

cardTitle2.addEventListener("dblclick", run4);

function run4(e) {                                                            //!     Çift tıklandığında eventin tipini yazdırdık.
    console.log(e.type);                                                      //!     Çıktı = dblclick
}


//!--------------------------------------------------------------------------------------------------------------------------------------------
//?--------------------------------------------------------------------------------------------------------------------------------------------
//?                                          mouseover                 
//?--------------------------------------------------------------------------------------------------------------------------------------------

//?     card-body grubunda birçok html etiketi vardır. Her Todo'nun çerçevesi, "x" butonu vb. Bunların üzerlerine her geldiğimizde tekrar tekrar 
//?     yazar. Grubun çerçevesine her girdiğinde değil o gruptaki her html etiketine geldiğinde çalışır.


const cardBody = document.querySelectorAll(".card-body")[1];                  //?     Todo 1, Todo 2... olduğu grup

cardBody.addEventListener("mouseover", run5);

function run5(e) {                                                            //?     grubun her html etiketinin üzerine geldiğinde 1 artar.
    console.log(e.type);                                                      //?     Çıktı = mouseover
}


//?--------------------------------------------------------------------------------------------------------------------------------------------
//*--------------------------------------------------------------------------------------------------------------------------------------------
//*                                          mouseout
//*--------------------------------------------------------------------------------------------------------------------------------------------

//*     card-body grubunda birçok html etiketi vardır. Her Todo'nun çerçevesi, "x" butonu vb. Bunların üzerlerinden her ayrıldığımızda 
//*     yazar. Grubun çerçevesine her çıktığında değil o gruptaki her html etiketinden çıktığında çalışır.


const cardBody2 = document.querySelectorAll(".card-body")[1];                 //*     Todo 1, Todo 2... olduğu grup

cardBody2.addEventListener("mouseout", run6);

function run6(e) {                                                            //*     grubun her html etiketinin üzerinden ayrıldığında 1 artar.
    console.log(e.type);                                                      //*     Çıktı = mouseout
}


//*--------------------------------------------------------------------------------------------------------------------------------------------
//TODO-----------------------------------------------------------------------------------------------------------------------------------------
//TODO                                      mouseenter
//TODO-----------------------------------------------------------------------------------------------------------------------------------------

//TODO  mouseover'dan farkı gruba her girdiğinde çalışır. Her html etiketinde tekrarlama yapmaz.

const cardBody3 = document.querySelectorAll(".card-body")[0];                 //TODO  Todo giriniz ve Todo ekleyenizin olduğu grup

cardBody3.addEventListener("mouseenter", run7);

function run7(e) {                                                            //TODO  grubun her üzerine geldiğinde 1 artar.
    console.log(e.type);                                                      //TODO  Çıktı = mouseover
}


//TODO-----------------------------------------------------------------------------------------------------------------------------------------
//!--------------------------------------------------------------------------------------------------------------------------------------------
//!                                         mouseleave
//!--------------------------------------------------------------------------------------------------------------------------------------------

//!     mouseout'dan farkı grubtan her çıktığında çalışır. Her html etiketinde tekrarlama yapmaz.


const cardBody4 = document.querySelectorAll(".card-body")[0];                 //!     Todo giriniz ve Todo ekleyenizin olduğu grup

cardBody4.addEventListener("mouseleave", run8);

function run8(e) {                                                            //!     grubun her grup üzerinden ayrıldığında 1 artar.
    console.log(e.type);                                                      //!     Çıktı = mouseleave
}


//!--------------------------------------------------------------------------------------------------------------------------------------------
