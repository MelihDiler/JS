class Musteri extends MigrosBase{
    constructor(isim ,soyisim , kartVarmi , urunler){
        super(isim,soyisim,kartVarmi,urunler);                           //*     super() ile MigrosBase constructor'ına yolladık.
    }
    
    hesapla(){
     return  super.hesapla();                                            //*     Önceden işlemlerin sonucunu yazdırmayı console.log() ile fonksiyon içindeyapıyorduk. Şimdi return ile çağırdığımız yere yolluyoruz. Main'deki odenecekTutar = musteri.hesapla(); koduna.
    }
}

