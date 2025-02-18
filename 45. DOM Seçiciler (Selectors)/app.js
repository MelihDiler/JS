/*                            ---------- DOM SECICILER (SELECTORS) ----------

  HTML etiketlerini üç farklı yöntem ile yakalayıp üzerinde işlemler yapabiliyoruz. Bunlar : 
  classname - id - tagname
  Örn: <button id="todoAddButton" type="submit" class="btn btn-primary mt-4 btn-sm">Todo Ekleyin</button>
  Yukarıdaki butonun kodudur ve ister id'sini girerek ister classname girerek isterde tagname girerek bukodu çağırıp üzerinde 
  işlem yapabiliriz.
  
  getElementById : id ye göre elementi yakalar
  getElementByClassName : class ismine göre yakalar.
  getElementByTagName : etiket ismine göre yakalar.

*/
//?------------------------------------------------------------------------------------------------------------------------------------------

const button = document.getElementById("todoAddButton");          //?     document nesnesi içindeki id'si şu olan elementi getir demek.

console.log(button);                                              //?     Çıktı = <button id="todoAddButton" type="submit" class="btn btn-primary mt-4 btn-sm">Todo Ekleyin</button>
console.log(button.id);                                           //?     Çıktı = todoAddButton
console.log(button.getAttribute("id"));                           //?     Bu bir üstteki kodun 2. yöntemidir. Burada id isimle attribute'u getir diyoruz. Attirbute = id, type, class
console.log(button.className);                                    //?     Çıktı = btn btn-primary mt-4 btn-sm  --> Burada aslında 4 adet class vardır. Her boşluktan sonra yeni class ismi gelir. biz classname getir derken tüm classların isimlerini getirdi. 
console.log(button.getAttribute("class"));                        //?     Bu bir üstteki kodun 2. yöntemidir.    
console.log(button.classList[3]);                                 //?     Çıktı = btn-sm  -->  Burada classlar içinden 4. olan ama 3. indekse denk geleni getir dedik.


button.classList.forEach(function (className) {                   //?     Class isimleri alt alta verebilmek için forEach döngüsünden geçirdik. Tek tek ekrana yazdırdık.
  console.log(className);
})

console.log(button.textContent);                                  //?     Çıktı = Todo Ekleyin  -->  Butona vermiş olduğumuz ism geldi.
console.log(button.innerHTML);                                    //?     Yukarıdakinin aynısı farkı ise yukarıdaki stringdir. Bu ise html kodlarını yazdığımızda tanır. Yani örnek açıklama aşağıda.

button.textContent = "Todo Ekleyin";                              //?     Çıktı = Todo Ekleyin
button.textContent = "<b>Todo Ekleyin<b>";                        //?     Çıktı = <b>Todo Ekleyin<b>
button.innerHTML = "<b>Todo Ekleyin<b>";                          //?     Çıktı = Todo Ekleyin --> Fakat bold yani kalın harflerle. Biz burada <b> ile butonun üzerindeki ismi kalın verdik. Bu <b>'yi html kodu olarak bildiği için ekrana <b> yazmak yerine yazının harflerini kalınlaştırdı.

//?------------------------------------------------------------------------------------------------------------------------------------------
//*------------------------------------------------------------------------------------------------------------------------------------------

const todoList = Array.from(document.getElementsByClassName("list-group-item"));  //*     Çıktı = 4 adet html kodudur. Bu sebeple Array.from ile diziye çevirip o şekilde çıktı alabiliyoruz. Yoksa hata veriyor.
console.log(todoList);
todoList.forEach(function (todo) {
  console.log(todo.textContent);                                                  //*     Çıktı = Todo 1, Todo 2, Todo 3, Todo 4  --> textContent = ekranda görünen ismi
})

//*------------------------------------------------------------------------------------------------------------------------------------------
//TODO---------------------------------------------------------------------------------------------------------------------------------------

const forms = Array.from(document.getElementsByTagName("form"));                  //TODO  Çıktı = Etiket adıyla yakaladık. 2 tane form olduğu için onları döndürür.
forms.forEach(function (form) {
  console.log(form);
})
console.log(forms[1]);                                                            //TODO  Çıktı = 1. indeksteki formu tekrar yazdırdık.


const todoList2 = document.getElementsByTagName("li");
console.log(todoList2);                                                           //TODO  Çıktı = 4 adet liste ekrana döndürür.

//TODO---------------------------------------------------------------------------------------------------------------------------------------
//!------------------------------------------------------------------------------------------------------------------------------------------

//!     getElementById - getElementByClassName - getElementByTagName ile yakaladıklarımızı bu şekilde de yakalayabiliriz:
//!     querySelector - querySelectorAll
//!     CSS'in aynısı: ID seçerken "#", class seçerken ".", tagname ise direkt yazılarak yapılır.


console.log(document.getElementById("todoClearButton"));                          //!     getElementById ile yakaladığımız şeyin bir diğer yöntemi aşağıdadır.

const clearButton = document.querySelector("#todoClearButton");                   //!     Bu da bir diğer yakalama yöntemidi. Aynı css'lerde seçer gibi. ID seçerken #
console.log(clearButton);


const todoList3 = document.querySelector(".list-group");
console.log(todoList3);                                                           //!     Çıktı = 4 adet liste

const todoList4 = document.querySelector(".list-group-item");                     //!     Çıktı = 4 adet olmasına rağmen 1 adet getirdi. id'lerden her isimde bir tane vardır fakat classlarda bir sürü olabilir. 
console.log(todoList4);                                                           //!     Bu sebeple querySelector yerine querySelectorAll kullanmalıyız ki aynı isimdeki tüm class'ları getirsin.

const todoList5 = document.querySelectorAll(".list-group-item");                  
console.log(todoList5);                                                           //!     list-group-item isimli tüm classlar gelmiş oldu.

const todoList6 = document.querySelectorAll(".list-group-item")[2];                  
console.log(todoList6);                                                           //!     list-group-item isimli tüm classlar bulur ve 2. indekstekini getirir.

//!------------------------------------------------------------------------------------------------------------------------------------------
//?------------------------------------------------------------------------------------------------------------------------------------------

const todoList7 = document.querySelectorAll("li:first-child");                    //?     İlk çocuğu getirir yani ilk "li" ekrana yazılır.
const todoList8 = document.querySelectorAll("li:last-child");                     //?     Son çocuğu getirir yani son "li" ekrana yazılır.
const todoList9 = document.querySelectorAll("li:nth-child(2)");                   //?     İkinci çocuğu getirir yani ikinci "li" ekrana yazılır. İndeks değil direkt 2. sıradaki li'dir. 0'dan başlamaz.


//?     odd = Tekli sayıları getirir.
//?     even = Çiftli sayıları getirir.

const todoList10 = Array.from(document.querySelectorAll("li:nth-child(odd)"));    //?     Seçtiğimiz tekli sıralardakileri dizi içerisine aldık.

todoList10.forEach(function(todo){                                                //?     Dizi elemanlarını forEach ile tek tek todo değişkenine yazdık.
    todo.style.backgroundColor = "lightgrey";                                     //?     Her tekli sıradakinin style içerisinden backgrounColor'a ulaşarak arka plan rengini açık gri olarak değiştirdik.
})

console.log(todoList10);

//?------------------------------------------------------------------------------------------------------------------------------------------