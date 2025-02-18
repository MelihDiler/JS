//                          ---------- URUN ARAMA UYGULAMASI ----------

let urun1 = {
    isim: "ACER Swift",
    kategori: "Teknoloji",
    fiyat: 6219
}

let urun2 = {
    isim: "ACER Nitro 5",
    kategori: "Teknoloji",
    fiyat: 15475.64
}

let urun3 = {
    isim: "LENOVO V15",
    kategori: "Teknoloji",
    fiyat: 10999
}
let urun4 = {
    isim: "LENOVO V14",
    kategori: "Teknoloji",
    fiyat: 4399
}
let urun5 = {
    isim: "LENOVO Ideapad",
    kategori: "Teknoloji",
    fiyat: 4510
}


let urunler = [urun1, urun2, urun3, urun4, urun5];
let eslesenUrunler = [];                                                     //?  Kullanıcının girmiş olduğu kelime ile eşleşen tüm object'leri
                                                                             //?  bu dizi içerisine yerleştireceğiz.

let kullUrunIsmi = prompt("Bir ürün ismi giriniz");
secilenUrunleriDoldur(urunler);
secilenUrunleriYazdir(eslesenUrunler);



function secilenUrunleriDoldur(urunler){

    urunler.forEach(function (urun) {
        if (urun.isim.toUpperCase().includes(kullUrunIsmi.toUpperCase(), 0)) {   //*  urunler dizisindeki her eleman birer object. Sırayla
            eslesenUrunler.push(urun);                                           //*  urun1, urun2 ... şeklinde alıp "urun" değişkenine atayacak.
        }                                                                        //*  Daha sonra "urun.isim" aslında elinde urun1 varsa, 
    })                                                                           //*  urun1.isim demiş olduk. Bunu derkende tüm harfleri büyülttük. 
                                                                                 //*  Ardından includes ile içinde verdiğimiz değer var mı diye sorgulattık.
                                                                                 //*  Bu sorgulama ise şu şekilde oldu: kullanıcıdan gelen değerin
                                                                                 //*  Tüm harflerini büyülttük. Çünkü arayacağımız yerdeki isimleri de büyülttük.
                                                                                 //*  Böylelikle büyük küçük harf duyarlılığı kalmadı. ikinci parametre ise:
                                                                                 //*  Kaçıncı indeksten başlayacağını belirtiyor.
}                                 

function secilenUrunleriYazdir(urunler){
    urunler.forEach(function(urun){
        console.log("---------------------------------------------------");
        console.log("|" + urun.isim + "|" + urun.fiyat + "|" + urun.kategori);
        console.log("---------------------------------------------------");
    });
}

