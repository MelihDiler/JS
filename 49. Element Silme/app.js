//                                    ---------- ELEMENT SILME ----------

const todoList = document.querySelector(".list-group");           //*     Todo listi yakaladık.
const todos = document.querySelectorAll(".list-group-item");      //*     Yukarıdaki grupta bulunan tüm itemleri(todoları) All ile yakaladık.
const todo1 = document.querySelector(".list-group-item");         //*     Yukarıdaki o class isimlilerin hepsini getirir. Bu ilkini getirir. Yani Todo 1'i.

todos[0].remove();                                                //*     Todo 1 ekrandan silindi. Dedik ki todos içindeki 0. indekse denk gelen Todo 1'i sil.
//* todo1.remove();                                               //*     Yine Todo 1'i siler. 

//* todoList.removeChild(3);                                      //*     Bunda hata verir. Burada childlarda 3. indeksi sil demiş olmuyorsun. Bu bir array değil ve indeks veremezsin. Bu bir nodeList'tir. Onun yerine aşağıdaki gibi olmalı.
todoList.removeChild(todos[3]);                                   //*     Todo 4 silindi. 2.yöntemi aşağıdadır.
todoList.removeChild(todoList.lastElementChild);                  //*     Todo 3 silindi. Üst satırda Todo 4 silindiği için artık son todo ise Todo 3 oldu. Bu sebeple bu koda Todo 3'ü siler







