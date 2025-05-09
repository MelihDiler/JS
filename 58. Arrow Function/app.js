//                                          ---------- ARROW FUNCTION ----------


//?---------------------------------------------------------------------------------------------------------------------------------------
//?                                     ---------- FONKSIYON KLASİK YAZIMI ----------
//?---------------------------------------------------------------------------------------------------------------------------------------

function yazdir() {
    console.log("Merhaba")
}

yazdir()

//?---------------------------------------------------------------------------------------------------------------------------------------
//*---------------------------------------------------------------------------------------------------------------------------------------
//*                                     ---------- ARROW FUNCTION YAZIMI ----------
//*---------------------------------------------------------------------------------------------------------------------------------------

const yazdir2 = () => {                          //*     Aslında =>'den sonrası fonksiyon. Daha kısa yazıldı. Sonrasında çağırmak 
    console.log("Merhaba")                       //*     için de yazdir2 adlı değişkene atadık.
}

yazdir2()

//*---------------------------------------------------------------------------------------------------------------------------------------
//TODO------------------------------------------------------------------------------------------------------------------------------------
//TODO                                ---------- ARROW FUNCTION TEK SATIRSA ----------
//TODO------------------------------------------------------------------------------------------------------------------------------------

//TODO  Arrow function tek satırsa süslü parantezler yazılmasa da olur.

const yazdir3 = (firstName, lastName) => console.log("Merhaba", firstName, lastName)

yazdir3("Melih", "Diler");


//TODO------------------------------------------------------------------------------------------------------------------------------------
//!---------------------------------------------------------------------------------------------------------------------------------------
//!                                ---------- ARROW FUNCTION TEK PARAMETREYSE ----------
//!---------------------------------------------------------------------------------------------------------------------------------------

//!     Eğer ki tek parametereyse, parametrenin parantezlerini kaldırabilirsin.

const yazdir4 = firstName => console.log("Merhaba", firstName)

yazdir4("Melih");


//!---------------------------------------------------------------------------------------------------------------------------------------
//*---------------------------------------------------------------------------------------------------------------------------------------
//*                                     ---------- ARROW FUNCTION RETURN ----------
//*---------------------------------------------------------------------------------------------------------------------------------------

//*     Tek parametre olduğu için parantezler kalktı. Tek satırlı kod olduğu için süslü parantezler de kalktı. Ayrıca tek satırlı kod olup 
//*     bu kod da return olduğu için return'de kalktı. 

const kupAl = x => x * x * x                     //*     Burada return yazmadık. 
console.log("Değer", kupAl(3));                  //*     Çıktı = Değer 27 -->  kupAl metodunu 3 ile çalıştır sonucu kupAl'a yaz.

const kareAl = (x) => x * x
console.log("Değer", kareAl(3));                 //*     Çıktı = Değer 9 -->  karaAl metodunu 3 ile çalıştır sonucu kareAl'a yaz.

//*---------------------------------------------------------------------------------------------------------------------------------------

