//                                         ---------- ANA SINIF ----------    



class MigrosBase {                                                       
    indirimOrani = 30;

    constructor(isim, soyisim, kartVarmi, urunler) {
        this.isim = isim;
        this.soyisim = soyisim;
        this.kartVarmi = kartVarmi;
        this.urunler = urunler;
    }

    hesapla() {
        let odenecekTutar = 0;                                           //*     Bu fonksiyonun her yerinden erişebilmek için burada tanıplayıp if içinde tanımlamadık.
        if (this.urunleriKontrolEt(this.urunler)) {                      //*     if true / false üzerine çalışır. urunleriKontrolEt fonksiyoonunu çalııştırıp sonucunu true-false olarak alıyoruz. Eğer urunleriKontrolEt global bir fonksiyon değil, sınıfın içinde tanımlanmış bir metotsa, çağırırken this kullanmanız gerekir. Aksi halde, JavaScript bunu global bir fonksiyon gibi algılamaya çalışır ve bulamaz.

            //Sepetim dolu.
            if (this.kartVarmi) {
                //Money kartı vardır
                this.urunler.forEach((urun) => {
                    odenecekTutar += (urun.fiyat * (100 - this.indirimOrani) / 100);     //*     %20 halinin atamasını yapıyoruz.
                })
            } else {
                //Money kartı yoktur
                this.urunler.forEach((urun) => {
                    odenecekTutar += urun.fiyat;                         //*     MoneyKart olmadığı için indirimsiz ürünleri toplayıp döndürüyoruz.
                })
            }


        } else {
            alert("En az bir tane ürün satın almalısınız.");
        }
        return odenecekTutar;
    }

    urunleriKontrolEt(urunler) {
        if (urunler != null && urunler.length > 0) {                     //*     Boş değilse ve en az 1 ürün varsa true döner.
            return true;
        }
        return false;
    }

    getIsim() {
        return this.isim;                                                //*     Buradaki isimleri çağırabilmek için
    }

    getSoyisim() {
        return this.soyisim;                                             //*     Buradaki soyisimleri çağırabilmek için
    }
}