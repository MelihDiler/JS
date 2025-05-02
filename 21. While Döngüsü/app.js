//                            ---------- WHILE DONGUSU ----------



//* 1'den 10'a kadar yazdırma :
//*----------------------------

let sayac = 1;

while (sayac <= 10) {
    console.log(sayac);
    sayac++;
}


//? 1'den 10'a kadar çiftleri yazdırma :
//?-------------------------------------

let sayac2 = 0;

while (sayac2 <= 10) {
    console.log(sayac2);
    sayac2 += 2;
}

//? ------------ YA DA ------------

let sayac3 = 0;

while (sayac3 <= 10) {
    if (sayac3 % 2 == 0) {
        console.log(sayac3);

    }
    sayac3++;
}


//TODO  Sonsuz while döngüsü ile 1'den 7'ye kadar sayma ve break ile kırma :
//TODO----------------------------------------------------------------------

let sayac4 = 1;

while (true) {
    console.log(sayac4);
    if (sayac4 == 7) {
        break;
    }
    sayac4++;
}