//                                  ---------- ELEMENTLER UZERINDE GEZINME ----------
//-----------------------------------------------------------------------------------------------------------------------------------------
const todo = document.querySelector(".list-group-item");
const todoList = document.querySelector(".list-group");
const todoLastChild = document.querySelector(".list-group-item:nth-child(4)");       //  class ismi list.group-item olanlardan 4. olan son çocuğu getir dedik. İndeks değil çocuk. querySelectorAll demedik çünkü tek 4.yü yakalamak istedik. Tip farkı var sadece.
const card = document.querySelector(".card");
//console.log(card);                                     //      Üstteki kodu doğru seçtik mi diye kontrol edip ardından gerekli olmadığı için yorum satırı yaptık.
const row2 = document.querySelector(".row");             //      class ismi row olanı yakaladı.



//?----------------------------------------------------------------------------------------------------------------------------------------
//?                                 ---------- EBEVEYNDEN COCUKLARA ERISMEK ----------
//?----------------------------------------------------------------------------------------------------------------------------------------

let value;

value = todoList.children;                               //?     todoList değişkenine atanan ebeveynin çocuklarını dizi olarak döndürür.
value = todoList.children[todoList.children.length - 1]; //?     Sondaki çocuğu yakalamış oluruz.
todoList.children[3].textContent = "Değişti";            //?     Sondaki Todo 4'ün adını değişti olarak değiştirdik.
value = todoList;                                        //?     Bu bir dizi değil. Diziye çevrilemediği için içinde gezinemezsin.
value = todoList.children;                               //?     Bu bir collection ve diziye çevirip içerisinde gezebilirim.
value = Array.from(todoList.children)                    //?     Diziye çevrildi


value.forEach(function (todo) {                           //?     Diziye çevrilen çocuklar tek tek ekrana yazdırıldı.
    console.log(todo);
})

console.log(value);
//?----------------------------------------------------------------------------------------------------------------------------------------
//*----------------------------------------------------------------------------------------------------------------------------------------
//*                                  ---------- COCUKTAN EBEVEYNE ERISMEK ----------
//*----------------------------------------------------------------------------------------------------------------------------------------

value = todo;                                            //*     Todo 1 elementini yakaladı
value = todo.parentElement;                              //*     Todo 1 elemntinin ebeveynini yakaladık.
value = todo.parentElement.parentElement;                //*     Todo 1'in annesinin annesini yakalamış olduk. "card-body"
let cardElement = value.parentElement;                   //*     Todo 1'in annesinin annesi value değişkenindeydi. Burada onunda annesine eriştik. "card"
let row = cardElement.parentElement;                     //*     cardElement'in annesi olan row'a eriştik. "row"
let container = row.parentElement;                       //*     row'un annesi olan container'a eriştik. "container"


console.log(container);

//*----------------------------------------------------------------------------------------------------------------------------------------
//TODO-------------------------------------------------------------------------------------------------------------------------------------
//TODO                              ---------- KARDESLER ARASINDA GEZINMEK ----------
//TODO-------------------------------------------------------------------------------------------------------------------------------------

value = todo;                                            //TODO  Todo 1 elementini yakaladı
value = todo.nextElementSibling;                         //TODO  Todo 1'den sonraki kardeşini getir dedik ve Todo 2 geldi
value = todoLastChild;                                   //TODO  Sayfanın başında bu deişkene son çocuk atandı bak!
value = todoLastChild.previousElementSibling;            //TODO  Son çocuk Todo 4'ten bir önceki kardeşe git dedik.


console.log(value);
//TODO-------------------------------------------------------------------------------------------------------------------------------------

value = row2.children[0].children[3].children[0].textContent = "Todo Listesi Başlığı Değişti";            //TODO  row elemtinin çocuklarından 0. indekteki çocuğun çocuklarından 3. indeksteki çocuğun çocuğunu getir dedik. childrenlara indeks vermemizin sebebi eğer vermesydik çocukları listelerdi. Biz 0. indeksteki çocuktan ilerlemek için bunu yaptık.

let todo3 = document.querySelector(".container");
value = todo3.children[0].children[0].children[3].children[2].children[2].style.background = "grey";      //TODO  todo 3 arka plan rebgi gri yapıldı. Anneden çocuğa ulaşarak bulduk.


console.log(value);