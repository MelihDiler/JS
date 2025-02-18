//                                          ---------- FOREACH DONGUSU ----------

let isimler = ["Melih", "Ezgi", "Panduf"];

let dizi_ismi = [1, true, "Ahmet", '?', null, 5.12, isimler];

//!-------------------------------------------------------------------------------
//!     dizi_ismi.forEach(function(yakalamak_istedigin_isim, index_numarasi){    
//!         çalıştırılacak kod;                                                      
//!     });                                                                      
//!-------------------------------------------------------------------------------

dizi_ismi.forEach(function (isim) {              //*  dizi_ismi adlı dizideki elemanları foreach ile tek tek isim adlı fonksiyona dön.
    console.log(isim);                           //*  Bu bir döngü olduğu için here döngüde bir eleman alıp isim adlı parametreye atar ve
});                                              //*  onu ekrana yazdırırız. Daha sonra tekrar döner ve sıradaki indeksi isim parametresine
                                                 //*  atar ve onunla işlem yaparız. Sırayla tek tek alır ve biz o alınan isim değişkeniyle
                                                 //*  istediğimizi yapabiliriz.



//?--------------------------------------------------------------------------------------------------------------------------------------
//?                                        ---------- FOR ILE YAPILISI ----------
//?--------------------------------------------------------------------------------------------------------------------------------------

for (let i = 0; i < dizi_ismi.length; i++) {
    console.log(dizi_ismi[i]);
}

//?--------------------------------------------------------------------------------------------------------------------------------------
//*--------------------------------------------------------------------------------------------------------------------------------------
//*                                        ---------- WHILE ILE YAPILISI ----------
//*--------------------------------------------------------------------------------------------------------------------------------------

sayac = 0;

while (sayac < dizi_ismi.length) {
    console.log(dizi_ismi[sayac]);
    sayac++;
}

//*--------------------------------------------------------------------------------------------------------------------------------------
//TODO-----------------------------------------------------------------------------------------------------------------------------------
//TODO                                    ---------- FUNCTION YERINE ARROW ----------
//TODO-----------------------------------------------------------------------------------------------------------------------------------

//TODO  function yazısı gitti. Tek parametreli olduğu için parantezler gitti. Tek satır kod olduğu için de süslü parantezler gitti.

dizi_ismi.forEach(isim => console.log(isim));

//TODO-----------------------------------------------------------------------------------------------------------------------------------

