//Tüm Elementleri Seçmek

const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");
const filterInput = document.querySelector("#todoSearch");

let todos = [];                                                      //*     Local Storage için boş bir dizi oluşturduk. Her yerden erişmek için globalde oluşturduk.

runEvents();                                                         //*     Aşağıdaki eventleri çalıştırmak için şartsız direkt fonksiyon oluşturduk.

function runEvents() {                                               //TODO  Eventleri çalıştırır. Tüm eventler burada yazılı
    form.addEventListener("submit", addTodo);                        //*     form = Todo giriniz input alanı ve butonun olduğu yeri kapsar. Buton kısmıda html'de görevi submit olarak tanımlı. form'a bir event ekledik. Submit tetiklenirse addTodo fonksiyonunu çalıştır dedik.
    document.addEventListener("DOMContentLoaded",pageLoaded);        //*     Sayfa yüklendiğinde pageLoaded metodunu çalıştır.
    secondCardBody.addEventListener("click",removeTodoToUI);         //*     secondCardBody'de nereye basarsa bassın çalışır fakat bastığı yeri çağırdığımız fonksiyonda görüp ona göre işlem yapıyoruz. Çarpıya basarsa ilgili todoyu butona basarsa tüm todoları sileceğiz.
    clearButton.addEventListener("click",allTodosEverywhere);        //*     "Tüm Todoları Temizle" butonuna basarsa bu fonksiyon çalışır.
    filterInput.addEventListener("keyup",filter);                    //*     Her tuşa bastığında filtre yapsın istiyoruz. Keyup ile her tuştan elini çektiğinde çalıştıracağız.
}

function pageLoaded(){                                               //TODO  Local Storage'daki değerleri, ekran her yüklendiğinde ekrana güncel halini yazar. Çünkü sayfa her yenilendiğinde kaydetmediği için kaybolur. O sebeple ekrana yazılanlardan ziyade local storage'daki bilgileri alacak çünkü orası kalıcı.
    checkTodosFromStorage();                                         //*     Bu metodu tekrar çalıştırmamızın sebebi yukarıdaki array'in güncel halini almak.
    todos.forEach(function(todo){
       addTodoToUI(todo);
    });
}

function filter(e){                                                  //TODO  
    const filterValue = e.target.value.toLowerCase().trim();                 //*     e = Arama çubuğunun bulunduğu nesnenin tamamı. target = arama çubuğu. value = çubuğa yazılan değer. Harfleri küçültülmüş ve cümlenin sağındaki solundaki boş karakterler atılmış.
    const todoListesi = document.querySelectorAll(".list-group-item");       //*     Tüm "li"leri yani Todoları "todoListesi" değişkenine atadık.
    
    if(todoListesi.length>0){                                                //*     Todo listesi boş değilse aramaya yapsın diye yoksa kitlenip kalır.
        todoListesi.forEach(function(todo){                                  //*     Halihazırda mevcut olan tüm todoları yakalayıp todo değişkeni üstünden dönüyoruz.
            if(todo.textContent.toLowerCase().trim().includes(filterValue)){ //*     "li"nin içindeki textContent yani todonun ekranda görünen isminin büyük küçük harf olarak yazılmış olabileceğinden onlarıda küçültüp boşluklarını atarak sonrasında da içinde geçiyor mu kontrolü gerçekleştiriyoruz.
                //
                todo.setAttribute("style","display : block");                //*     Bu ve aşağıdaki aslında css kodudur. setAttribute = yeni bir öellik eklemek yada mevcut olanı değiştirmek için kullnılır.
            }else{
                todo.setAttribute("style","display : none !important");      //*     Kullanılan bootstrap displayin none olmasına engel olduğu için !important dedik ve bootstrapin önüne geçirip öncelik tanıttık. Durum şu: Böyle bir durum olursa bootstrapinkini değil bunu kullanmasını istiyorum demek.
            }
        });

    }else{
        showAlert("warning","Filtreleme yapmak için en az bir todo olmalıdır!");//*  warning = kullandığımız div çatısının renk kodu. Eğer ki danger yazsaydık kırmızı renk olucaktı. ilk parametre type kısmına, ikinci parametre mesaj kısmına denk geliyor.
    }

}

function allTodosEverywhere(){                                       //TODO  Tüm Todo'ları temizle (Burada "e" parametresine ihtiyacımız olmadığı için yazmadık)
   const todoListesi = document.querySelectorAll(".list-group-item");//*     Tüm "li"lerin class isimleri .list-group-item olduğu için tüm todoları alır.
   if(todoListesi.length>0){                                         //*     Ekranda todo yokken butona basılırsa diye önce onu kontrol ediyoruz.
    //Ekrandan Silme
    todoListesi.forEach(function(todo){                              //*     Tüm "li"leri tek tek todo değişkeninde dönüyoruz.
        todo.remove();                                               //*     Herbirini tek tek siliyoruz.
    });

    //Storage'dan Silme
    todos=[];                                                        //*     Local Storage tüm değerleri todos[] arrayinden aldığı için array'i boşalttık.
    localStorage.setItem("todos",JSON.stringify(todos));             //*     Boşalmış halinide tekrar Local Storage'a atadık.
    showAlert("success","Başarılı bir şekilde silindi");             //*     success = kullandığımız div çatısının renk kodu. Eğer kidanger yazsaydık kırmızı renk olucaktı. ilk parametre type kısmına, ikinci parametre mesaj kısmına denk geliyor.
   }else{
    showAlert("warning","Silmek için en az bir todo olmalıdır");
   }
}

function removeTodoToUI(e){                                          //TODO  Todoları silme
    if(e.target.className==="fa fa-remove"){                         //*     e = bu fonksiyonu çağırığırken tıklanan nesneyi, target ise tıklanan yeri getirir. Tıklanan çarpı ise clasName'i fa fa-remove gelicektir.
       //Ekrandan Silme
       const todo = e.target.parentElement.parentElement;            //*     e = tıklanan yerdeki nesnenin tamamı. target = tıklanan "x"'dir. <i class="fa fa-remove"></i> olduğu için ve todoyu komple kaldırabilmek için parent ile ebeveynlarine ulaşıyoruz. İlk parent ile "a"ya 2. parent ile "li"ye yani todo'nun tamamına ulaşıyoruz.
       todo.remove();                                                //*     Tuttuğumuz listedeki todonun kodunun tamamını yani "li" etiketini sildik.

       //Storage'dan Silme
       removeTodoToStorage(todo.textContent);                        //*     Todo'nun ekranda görünen ismini fonksiyona parametre olarak atadık ve fonksiyonu çalıştırırken textContent ile yakalayacağız.
       showAlert("success","Todo başarıyla silindi.");               //*     success = kullandığımız div çatısının renk kodu. Eğer kidanger yazsaydık kırmızı renk olucaktı. ilk parametre type kısmına, ikinci parametre mesaj kısmına denk geliyor.
    }
}

function removeTodoToStorage(removeTodo){                            //TODO  Todoları storage'dan silme. removeTodo = Todo'nun ekrandaki ismi
    checkTodosFromStorage();                                         //*     Bu metodu tekrar çalıştırmamızın sebei yukarıdaki array'in güncel halini almak.
    todos.forEach(function(todo,index){                              //*     Güncellenen storage'daki array'i forachde todo adında indexi ile birlikte dönüyoruz.     
        if(removeTodo===todo){                                       //*     Sildiğimiz todo adı ile arraydeki todo adı eşleşirse kod çalışır.
            todos.splice(index,1);                                   //*     splice metodu ile ilk parametreden başlayıp 2. parametre kadar siliyoruz. Yani eşleşen kendi indeksinden başlayıp 1 tane yani direkt eşleşen silinir.
        }
    });
    localStorage.setItem("todos",JSON.stringify(todos));             //*     Sildikten sonra arrayin güncel halini atıyoruz.
}

function addTodo(e) {                                                //TODO  Todo girişi yapma ve sonucu mesaj olarak verme. "Başarılı" veya "bir değer giriniz"
    const inputText = addInput.value.trim();                         //*     addInput = html'deki todoName'dir. O da değer alan çubuktur. Ona girilen değeri almak için .value ve başında sonunda boşluk varsa onları atsın iye de "trim" eklendi.
    if (inputText == null || inputText == "") {                      //*     null = direkt butona basma, ""= çubuğa tıklayıp boş bir şekilde butona basma 
        showAlert("warning", "Lütfen boş bırakmayınız!");            //*     warning = kullandığımız div çatısının renk kodu. Eğer ki danger yazsaydık kırmızı renk olucaktı. ilk parametre type kısmına, ikinci parametre mesaj kısmına denk geliyor.
    } else {
        addTodoToUI(inputText);                                      //*     Arayüze ekleme
        addTodoToStorage(inputText);                                 //*     Storage ekleme
        showAlert("success", "Todo Eklendi.");                       //*     success = kullandığımız div çatısının renk kodu. Eğer ki danger yazsaydık kırmızı renk olucaktı. ilk parametre type kısmına, ikinci parametre mesaj kısmına denk geliyor.
    }

    e.preventDefault();                                              //*     Farklı bir sayfaya gitmesin diye koyuldu. 
}

function addTodoToUI(newTodo) {                                      //TODO  Arayüze Ekleme
/*
<li class="list-group-item d-flex justify-content-between">Todo 1
                            <a href="#" class="delete-item">
                                <i class="fa fa-remove"></i>
                            </a>
                        </li>
*/
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.textContent = newTodo;                                        //*  newTodo= fonksiyonun parametresidir. Çubuğa yazılan değer gelir.   

    const a = document.createElement("a");
    a.href = "#";
    a.className = "delete-item";

    const i = document.createElement("i");
    i.className = "fa fa-remove";

    a.appendChild(i);                                                //*  "a"nın içine "i"
    li.appendChild(a);                                               //*  "li"nin içine "a"
    todoList.appendChild(li);                                        //*  "todolist"in içine "li"

    addInput.value = "";                                             //*  Bu fonksiyon değer eklediğimizde çalışır ve eklendikten sonra da çubuktaki değer boşalması için bu satır eklendi.



}

function addTodoToStorage(newTodo) {                                 //TODO  Storage Ekleme
    checkTodosFromStorage();                                         //*     Local storage'da todoları dizi olarak tutuyoruz. Eğer ki local storage'da değer varsa eskisi kaybolmasın diye onu dışarı array olarak çıkarıp, yeni değeri ekleyip, güncel halini tekrar local storage'a ekleyeceğiz.
    todos.push(newTodo);                                             //*     İçi dolu yada boş olan todos array'ine yeni girişi yapılan değeri ekledik.
    localStorage.setItem("todos", JSON.stringify(todos));            //*     Güncellenmiş yenisi eklenmiş diziyi json ile array formatında ekledik.
}

function checkTodosFromStorage() {                                   //TODO  todos anahtarında biriktirlen tüm todoları dışarıya array olarak çıkarmak için.
    if (localStorage.getItem("todos") === null) {                    //*     Eğer ki localstorage boş yani null ise;  
        todos = [];                                                  //*     Array'i boş başlat
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));           //*     Eğer herhangi bir todos kayıtlı ise Array'e çevrilmiş şekilde todos değişkenine yaz.
    }
}

function showAlert(type, message) {                                  //TODO  Ekleme işlemi başarılı veya boş değer olduğunda uyarı mesajı verecek.
    
    const hr = document.createElement("hr");                         //*     Uyarı mesajı butona bitişik diye boşluk bırakmak için hr etiketi oluşturuldu.
    /*
    <div class="alert alert-warning" role="alert">
    This is a warning alert—check it out!
    </div>*/
    const div = document.createElement("div");
    //   div.className="alert alert-"+type;                          //*     type ilk parametremizdir ve mesajın arkafon rengini değişken yaptık. Duruma göre değişecektir.
    div.className = `alert alert-${type}`; //literal template        //*     Yukarıdaki kodun alternatifidir.
    div.textContent = message;                                       //*     Mesajın çıktısı.
    firstCardBody.appendChild(hr);                                   //*     <hr> etiketini çalıştırır.
    firstCardBody.appendChild(div);                                  //*     firstCardBody = İlk çerçevenin tamamı. Bunun sonuna eklemiş oluyoruz.

    setTimeout(function(){                                           //*     setTimeOut = tetiklendiği andan itibaren tanımlanan süre sonrasında fonksiyonu çalıştırır. 
        hr.remove();                                                 //*     hr etiketi bir süre sonra kalksın, ekranda kalmasın diye.
        div.remove();                                                //*     Uyarı mesajı bir süre sonra kalksın, ekranda kalmasın diye.
    },2500);                                                         //*     2.5 sn sonra function çalışsın demek.
}

//!--------------------------------------------------------------------------------------------------------------------------------------
//! HER EKLEME BUTONUNA BASTIĞINDA ALERT VE HR ALT ALT SIRALANIYOR. HER DEFAASINDA EKRANDA 1 ADET OLMASI İÇİN ESKİSİNİ SİLMEK GEREKİYOR.
//!--------------------------------------------------------------------------------------------------------------------------------------

// function showAlert(type, message) {
//  /*
//*    <div class="alert alert-warning" role="alert">
//*    This is a warning alert—check it out!
//*    </div>
//?    Önce mevcut alert ve hr öğelerini kaldır
//     const existingAlerts = firstCardBody.querySelectorAll(".alert");                       role attribute'ü ile yakalıyor.
//     const existingHr = firstCardBody.querySelectorAll("hr");                               hr ile yakalıyor.

//     existingAlerts.forEach(alert => alert.remove()); // Mevcut alert öğelerini kaldır      alert = ".alert" -->  existingAlerts dönerken içindeki .alert'ü yakala ve .alert'ü sil.
//     existingHr.forEach(hr => hr.remove());           // Mevcut hr öğelerini kaldır

//?    Yeni alert ve hr oluştur
//     const hr = document.createElement("hr");
//     const div = document.createElement("div");
//     div.className = `alert alert-${type}`;
//     div.textContent = message;

//?    Yeni öğeleri DOM'a ekle
//     firstCardBody.appendChild(hr);
//     firstCardBody.appendChild(div);

//?    2500ms sonra öğeleri kaldır
//     setTimeout(function() {
//         hr.remove();
//         div.remove();
//     }, 2500);
// }
//!--------------------------------------------------------------------------------------------------------------------------------------