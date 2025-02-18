//                  ---------- PARAMETRELI METOT ----------


//*  İsim soyisim yazdırma:
//*------------------------

function yazdir(isim, soyisim){
    console.log(isim + " " + soyisim);
}

yazdir("Melih","Diler");     //*  Burada yazdır metodunun parametrelerine sırasıyla atama yapmış olduk. Değer girmezsen undefined olur.
yazdir("Ezgi","Diler");      //*  Burada ise parametreler değiştirildi. Bu parametreler ile metot çalıştırılmış oldu.


//?  Küpünü alma:
//?--------------


function cube(sayi){
    console.log(sayi*sayi*sayi);
}

cube(3);

//TODO  Yaş hesaplma :
//TODO----------------


let yas = Number(prompt("Yaşınızı giriniz : "));

function kontrolEt(x){
    if(x > 18){
        console.log("Ehliyeti alabilirsiniz.");
    }else{
        console.log("Ehliyeti alamazsınız.");
    }
}

kontrolEt(yas);