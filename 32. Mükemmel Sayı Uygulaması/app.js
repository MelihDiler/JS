//                           ---------- MUKEMMEL SAYI UYGULAMASI ----------


/*  Eğer ki vermiş olduğun sayının tam bölenlerinin toplamı, vermiş olduğumuz sayının 2 katına eşitse o mükemmel sayıdır.
    Örn: "6" sayısının tam bölenleri : 1, 2, 3, 6'dır. Bunların toplamı 12'dir. Sayımızın 2 katı çıkan sonucumuza eşittir.
    Yani "6" mükemmel bir sayıdır.
*/

let sayi = Number(prompt("Lütfen sayı giriniz :"));
isPerfectNumber(sayi);


function isPerfectNumber(number) {
    let toplam = 0;

    for (let i = 2; i <= sayi / 2; i++) {
        if (number % i == 0) {
            toplam += i;
        }
    }
    toplam += 1 + sayi;                                    //  Bunu yapmamızın sebebi bir sayının tam bölenlerini bulmak için yarısına kadar
    //  bölmemiz yeterli. Ayrıca çıkan sonuç ile 1 ve kendisini de toplamalıyız çünkü
    if ((toplam / 2) == sayi) {                         //  onlarda tam bölenleridir.
        alert("Mükemmel sayı...");
    } else {
        alert("Mükemmel sayı değildir...");
    }
}
