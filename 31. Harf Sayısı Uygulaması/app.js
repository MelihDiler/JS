//                        ---------- HARF SAYISINI BULMA UYGULAMASI ----------

let metin = "Şuanda İstanbul'da Javascript eğitimi alıyoruz.";

let harf = prompt("Harfi giriniz : ");

let sonuc = bul(harf);
alert(sonuc + " adet " + harf + " var...");

function bul(harf) {                                                 //*  Bu "harf" değişkeni ile 5. satırdaki "harf" değişkeni 
    let toplam = 0;                                                  //*  tamamen birbirinden farklıdır.
    for(let i = 0; i<metin.length; i++){
        if(metin.charAt(i).toLowerCase()=== harf.toLowerCase())      //?  Büyük küçük harf duyarlılığını kaldırmış olur.
            toplam +=1;
    }
    return toplam;
}


