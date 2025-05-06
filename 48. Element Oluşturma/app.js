//                                     ---------- ELEMENT OLUSTURMA ----------
//--------------------------------------------------------------------------------------------------------------------------------------------------

const cardBody = document.querySelectorAll(".card-body")[1];    //*     İki adet card-body olduğundan dolayı ikincisini seçmek için 1. indeksi ekledik.
const todoList = document.querySelector(".list-group");         //*     Todo 1, Todo 2 ... listesidir.


//--------------------------------------------------------------------------------------------------------------------------------------------------
//?-------------------------------------------------------------------------------------------------------------------------------------------------
//?                                      ---------- BUTON EKLEME ----------
//?-------------------------------------------------------------------------------------------------------------------------------------------------

const link = document.createElement("a");
link.id = "goBlogWebSite";
link.className = "btn btn-dark btn-sm  mt-3";
link.href = "https://www.google.com";
link.target = "_blank";                                         //?     Ayrı bir sekmede açmasını sağlar.
link.innerHTML = "Kişisel Web Siteme Git";
cardBody.appendChild(link);                                     //?     appendChild ile cardBody'nin sonuna bu link koy demek.

//?-------------------------------------------------------------------------------------------------------------------------------------------------
//*-------------------------------------------------------------------------------------------------------------------------------------------------
//*                                      ---------- TODO EKLEME ----------
//*-------------------------------------------------------------------------------------------------------------------------------------------------

/*
<li class="list-group-item d-flex justify-content-between">Todo 1
                            <a href="#" class="delete-item">
                                <i class="fa fa-remove"></i>
                            </a>
                        </li>
*/

const todo = document.createElement("li");                            //*     "li" etiketi oluşturur.
const todoLink = document.createElement("a");                         //*     "a" etiketi oluşturur.
const i = document.createElement("i");                                //*     "i" etiketi oluşturur.

todo.className = "list-group-item d-flex justify-content-between";
todo.innerHTML = "Todo 5";

todoLink.href = "#";
todoLink.className = "delete-item";

i.className = "fa fa-remove";

todoLink.appendChild(i);                                              //*     todoLink "a" etiketidir. "i" etiketi örnek kodda "a" etiketinin içindedir. Bu yüzden "i"yi todoLink'in içine atıyoruz.
todo.appendChild(todoLink);                                           //*     todo "li" etiketidir. "a" etiketini "li" etiketinin içine attık.
todoList.appendChild(todo);                                           //*     "todoList" Todo 1,2,3... o listedir. "todo"yu oraya ekliyoruz.



//*-------------------------------------------------------------------------------------------------------------------------------------------------
console.log(link); 