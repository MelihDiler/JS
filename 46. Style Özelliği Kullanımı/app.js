//                        ---------- STYLE OZELLIGI KULLANIMI ----------

const todo = document.querySelectorAll(".list-group-item")[0];

// console.log(todo);                                             //?     Yukarıda seçmek istediğimizi yazıp doğru seçimi kontrol ettikten sonra burayı yorum satırı yaptık. İşlemlere aşağıda devam edeceğiz.

todo.style.color = "White";                                       //?     Yazımızı siyahtan beyaza çevirdik.
todo.style.backgroundColor = "purple";                            //?     Arka planı mor yaptık.
todo.style.fontWeight = "bold";                                   //?     Yazıları tam kalınlaştırdık. bold yerine rakamsal değer vererek de istediğimiz kalınlığa ulaştırabiliriz.
todo.style.paddingTop = "20px";                                   //?     Yazımızı üstten 20 piksel aşağı çektik
todo.style.paddingLeft = "70px";                                  //?     Yazımızı soldan sağa 70 piksel çektik.

const todoList = document.querySelector(".list-group");           //?     Todo 1, Todo 2 ... yazan butonların oluşturduğu tabloyu yakaladık.

todoList.style.marginTop = "60px";                                //?     Yakaladığımız grubu komple 60 piksel aşağı indirdik.
todoList.style.marginLeft = "100px";                              //?     Yakaladığımız grubu komple 100 piksel sağa çekdik.

const clearButton = document.querySelector("#todoClearButton");   //?     Tüm todoları temizle butonunu yakaladık.

clearButton.style.borderRadius = "50px";                          //?     50 piksel olarak butona radüs ver.

