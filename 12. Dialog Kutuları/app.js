//                                    ---------- Diyalog Kutuları ----------

//?----------------------------------------------------------------------------------------------------------------------------------------
//?                             Alert
//?----------------------------------------------------------------------------------------------------------------------------------------

alert("Mesaj");                            //?     Sayfada pop-up yani küçük çerçeve içinde uyarı mesajı çıkarır. Yukarıda ortada görünür.

//?----------------------------------------------------------------------------------------------------------------------------------------
//*----------------------------------------------------------------------------------------------------------------------------------------
//*                             Prompt
//*----------------------------------------------------------------------------------------------------------------------------------------

//* Console.ReadLine();                            Kullanıcıdan değer almak için C#'da bu şekilde yapıyorduk.   
let isim = prompt("İsminizi Giriniz :");   //*     Kullıcıdan yine pop-up şeklinde değer girmesini isteriz ve girdiği değeri isim ve yaş
let yas = prompt("Yaşınızı giriniz :");    //*     değişkenine atarız. İkisini art arda ister. Eğer giriş yapmadan kapatırsa değer null, 
//*     eğer aşağıdaki gibi kodda birinin girişi yapmazsa null değeri gelmez. Dönüşler hep string döner.

console.log("İsminiz :" + isim + " " + "Yaşınız :" + yas);



//*----------------------------------------------------------------------------------------------------------------------------------------
//TODO-------------------------------------------------------------------------------------------------------------------------------------
//TODO                          Confirm (Onaylamak)
//TODO-------------------------------------------------------------------------------------------------------------------------------------

//TODO  Kullanıcıya "Tamam" ya da "İptal" seçeneği olan onay kutusunu pop-up olarak verir.
//TODO  Geri dönüşler true ya da false olarak olur.

let cevap = confirm("Silmek istediğinize eminmisiniz ?");
console.log(cevap);                        //TODO  "Tamam" cevabına true, "İptal" cevabına false döndürür.

//TODO-------------------------------------------------------------------------------------------------------------------------------------