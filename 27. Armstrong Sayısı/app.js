//                      ---------- ARMSTRONG SAYISI ----------

//  Bir sayının her bir rakamlarının küplerinin toplamı kendisini veriyorsa bu armstrong demektir. Örn: 153 = (1*1*1) +(5*5*5)+(3*3*3)


let sayi = prompt("Sayı giriniz : ");     //*  Burada Number'a çevirmememizin nedeni, number içinde olmayıp string içinde olan charAt
let toplam = 0;                           //*  methodunu kullanabilmek için. charAt = verdiğin index no karşılığında karakteri döndürür.

for(let i = 0; i < sayi.length; i++){
    let rakam = sayi.charAt(i)
    toplam +=rakam*rakam*rakam;
}

if(Number(sayi)==toplam){
    alert("Armstrong sayısıdır.");
}else{
    alert("Armstrong sayısı değildir.");
}
