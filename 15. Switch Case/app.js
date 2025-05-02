//                        ---------- Switch Case ----------
// Sırayla tarar uygun olanı çalıştırır break ile çıkar.

let sayi = Number(prompt("Lütfen 1 ile 5 arasında bir sayı giriniz: "));

switch (sayi) {
    case 1:
        console.log("Girilen sayı 1'dir.");
        break;

    case 2:
        console.log("Girilen sayı 2'dir");
        break;
    case 3:
        console.log("Girilen sayı 3'dür.");
    //*  Burada break anahtar kelimesini kaldırdık.            
    case 4:                                       //*  Çıktı olarak sırayla "Girilen sayı 3" ve "Girilen sayi 4" olarak verdi. 
        console.log("Girilen sayı 4'dür.");       //*  Yani break yoksa caseleri taramaya devam eder ve ilk break ile çıkar. 
        break;                                    //*  Eğer ki case 4'deki break kaldırılırsa bu sefer 3 ve 4'ten sonra
    case 5:                                       //*  "Girilen sayı 5" çıktı olarak verir.
        console.log("Girilen sayı 5'dir.");
        break;
    default:
        console.log("Girilen sayı 1 ile 5 arasında olmalıdır.");
        break;
}


//------------------------------------------------------------------------------------------------------------------------------------//


let yeniSatir = "\r\n";
let metin = "1-Pazartesi" + yeniSatir
    + "2-Salı" + yeniSatir
    + "3-Çarşamba" + yeniSatir
    + "4-Perşembe" + yeniSatir
    + "5-Cuma" + yeniSatir
    + "6-Cumartesi" + yeniSatir
    + "7-Pazar" + yeniSatir;
+ "Lütfen bir seçim yapınız";

let deger = prompt(metin);

switch (deger) {
    case "1":
        console.log("Pazartesi günü");
        break;
    case "2":
        console.log("Salı günü");
        break;
    case "3":
        console.log("Çarşamba günü");
        break;
    case "4":
        console.log("Perşembe günü");
        break;
    case "5":
        console.log("Cuma günü");
        break;
    case "6":
        console.log("Cumartesi günü");
        break;
    case "7":
        console.log("Pazar günü");
        break;
    default:
        console.log("Lütfen geçerli bir değer giriniz");
}

