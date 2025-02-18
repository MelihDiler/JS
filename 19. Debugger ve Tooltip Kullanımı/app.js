//                              ---------- Debugger ve Tooltip ----------


//*  TOOLTIP = örneğin "parseIn" yazdık ve bıraktık "t" harfini koymadık ve sağ tarafta bir alan çıkar. O alanın en sağında bir ok
//*  vardır ve o oka tıklayınca yine sağ tarafta bir açıklayıcı alan çıkar. İşte orasına Tooltip denir. 

let a = 10;
debugger;                 //? Debugger bu satırdan başlar.
let b = 15;
let c = a+b;              //? 25
let d = a+b+c;            //? 50
let e = a+b+c+d;          //? 100

let sonuc = a+b+c+d+e;
console.log("Sonuç : ", sonuc);