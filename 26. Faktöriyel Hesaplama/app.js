//                     ---------- FAKTORIYEL HESAPLAMA ----------


let sayi = Number(prompt("Lütfen faktöriyel hesabı için sayı giriniz : "));
carpim = 1;

for(let  i = 1; i<= sayi; i++){
    carpim*=i;
}
alert("Sonuc : " + carpim);