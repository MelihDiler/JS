//                                         ---------- ANA PROGRAM ----------    


//?--------------------------------------------------------------------------------------------------------------------------------------
//?                                           ---------- MESAJ ----------
//?--------------------------------------------------------------------------------------------------------------------------------------

let mesaj =
    `
Migros'a hoşgeldiniz.
Money Kartınız varmı ?
1-Evet
2-Hayır
`;

//?--------------------------------------------------------------------------------------------------------------------------------------
//*--------------------------------------------------------------------------------------------------------------------------------------
//*                                  ---------- Müşterinin aldığı ürünler ----------
//*--------------------------------------------------------------------------------------------------------------------------------------

const urunler = [                                                        //*     Dizimizin herbir elemanı object'dir.
    {
        urunIsmi: "Süt",
        fiyat: 15
    },
    {
        urunIsmi: "Bebek Bezi",
        fiyat: 100
    },
    {
        urunIsmi: "Kuşbaşı",
        fiyat: 220
    }
]

//*--------------------------------------------------------------------------------------------------------------------------------------
//TODO-----------------------------------------------------------------------------------------------------------------------------------
//TODO                                       ---------- ANA PROGRAM ----------
//TODO-----------------------------------------------------------------------------------------------------------------------------------

//true veya false
let sonuc = confirm(mesaj);                                              //TODO  confirm ile tamam/iptal seçeneği sunup cevabı true false olarak alıyorum.
let odenecekTutar;

if (sonuc) {                                                             //TODO  Money kart sorusunun cevabına göre işleyecek.
    //Money kartı vardır.
    let isim = prompt("Adınızı Giriniz :");                              //TODO  prompt ile müşteriden adını isim değişkenine aldık
    let soyisim = prompt("Soyisminizi giriniz");                         //TODO  prompt ile müşteriden soyadını soyisim değişkenine aldık

    const musteri = new Musteri(isim, soyisim, sonuc, urunler);          //TODO  Musteri adındaki sınıf için nesne üretip değerleri yolladık. O da super ile miras aldığı MigrosBase'e yolladı. 
    odenecekTutar = musteri.hesapla();                                   //TODO  Yollanmış değerlerle Musteri sınıfının hesapla metodu çalıştırıldı. O da super ile MigrosBase'deki hesaplayı çalıştırıp return ile değeri döndürdü.

    alert(
        `
        Müşteri Bilgileri : ${musteri.getIsim()} ${musteri.getSoyisim()} //TODO  MigrosBase sınıfındaki özelliklere orada fonksiyon çalıştırarak ulaştık.
        Ödenecek Tutar : ${odenecekTutar}
        `);


} else {
    const musteri = new Musteri(null, null, sonuc, urunler);             //TODO  Money kart olmadığı için isim soyisim sormadık ve o bilgileri null yani boş attık.
    odenecekTutar = musteri.hesapla();
    alert(`Ödenecek Tutar : ${odenecekTutar}`)
}

//TODO-----------------------------------------------------------------------------------------------------------------------------------

