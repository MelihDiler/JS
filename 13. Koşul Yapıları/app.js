//                       ---------- KOŞUL YAPILARI ----------

let not = 65;
if (not > 50) {
    console.log("Geçtiniz, Notunuz: " + not);
}
else {                                                 //?  else kısmı olmadanda kod yazılabilir.
    console.log("Kaldınız, Not: " + not);
}



// ------------------------------------------------------------------------------------------------------------------------------------//


let yas = Number(prompt("Yaşınuız :"));               //*  String tipindeki kullanıcı girişini number tipine çevirerek "yas" değişkenine atadı.
let para = prompt("Bütçeniz :");

if (yas >= 18 && para >= 3000) {                      //! if bloğu şart kısmında kıyaslarımız number ise değişkenlermizdeki değerleri 
    alert("Ehliyet sınavına katılabilirsiniz...");    //! otomatik number'a dönüştürür. Örnekte görüldüğü gibi, "yas" değişkeni
} else {                                              //! number tipine dönüştürülerek atandı fakat "para" değişkeni direkt string kaldı.
    alert("Ehliyet sınavına katılamazsınız...");      //! Fakat if koşulu içinde kıyasladığımız alan number tipinde olduğu için string
}                                                     //! olan para değişkenini number tipine otomatik çevirip o şekilde değerlendirdi.



// ------------------------------------------------------------------------------------------------------------------------------------//



let vize1 = Number(prompt("Vize 1 notunuzu giriniz :"));
let vize2 = Number(prompt("Vize 2 notunuzu giriniz :"));
let final = Number(prompt("Final notunuzu giriniz :"));

let sonuc = (vize1 * 0.3) + (vize2 * 0.3) + (final * 0.4);

if (sonuc >= 95 && sonuc <= 100) {                           // Burada sırayla kontrol sağlanır. If false ise bir alt şart sorgulanır,
    alert("AA :" + sonuc);                                   // o da false ise bir alt şart sorgulanır. Bu şekilde sırayla else ksımına
}                                                            // kadar gider ve hiçbir şart sağlanmadıysa else çalışır. Sadece bir yer
else if (sonuc >= 85 && sonuc < 95) {                         // çalışır.
    alert("BA :" + sonuc);
}
else if (sonuc >= 75 && sonuc < 85) {
    alert("BB :" + sonuc);
}
else if (sonuc >= 65 && sonuc < 75) {
    alert("CB :" + sonuc);
}
else if (sonuc >= 55 && sonuc < 65) {
    alert("CC :" + sonuc);
}
else if (sonuc >= 50 && sonuc < 55) {
    alert("DC :" + sonuc);
}
else if (sonuc >= 45 && sonuc < 50) {
    alert("DD :" + sonuc);
}
else if (sonuc >= 40 && sonuc < 45) {
    alert("FD :" + sonuc);
}
else if (sonuc < 40 && sonuc >= 0) {
    alert("FF :" + sonuc);
}
else {
    alert("Yanlış değer girdiniz...");
}



// ------------------------------------------------------------------------------------------------------------------------------------//



let ad = prompt("İsminizi giriniz :");
let tckn = prompt("TCKN giriniz :");

// kontrolEt(ad, tckn);

function kontrolEt(ad, tckn){
    if (ad != "") {
        if (tckn.length == 11) {
            console.log("İsim ve tckn problemsiz girildi...");
        }
        else {
            console.log("Lütfen tc'nizi 11 karakter olarak giriniz...");
        }
    }
    else {
        console.log("Lütfen isim alanını boş bırakmayınız!!!");
    }
}

// Aynı sistemin diğer yöntemi

kontrolEt2(ad, tckn);

function kontrolEt2(ad, tckn){
    if(ad==""){
        console.log("Lütfen isim alanını boş bırakmayınız!!!");
        return;                                                        // Eğer if çalışırsa return sayesinde komple method'dan çıkar.
    }                                                                  // Bu sayede baştan başlarız.
    if(tckn.length!=11){
        console.log("Lütfen tc'nizi 11 karakter olarak giriniz...");
        return;                                                        // Eğer if çalışırsa return sayesinde komple method'dan çıkar.
    }                                                                  // Bu sayede baştan başlarız.

    console.log("İsim ve tckn problemsiz girildi...");
}
