//                             ---------- KLAVYE EVENTLERİ ----------



//?--------------------------------------------------------------------------------------------------------------------------------------------
//?                                            focus                 
//?--------------------------------------------------------------------------------------------------------------------------------------------
 
//?     Bir inputun içerisine girdiğizde odaklandığınızda çalışır. Search kısmına tıkladığınızda, form doldurmak için isim bölümüne 
//?     tıkladığınızda vb.


const todo = document.querySelector("#todoName");                                   //?     Todo Giriniz yazan input alanı

todo.addEventListener("focus", run);

function run(e){
    console.log(e.type);                                                            //?     Çıktı = focus
}

//?--------------------------------------------------------------------------------------------------------------------------------------------
//*--------------------------------------------------------------------------------------------------------------------------------------------
//*                                            blur
//*--------------------------------------------------------------------------------------------------------------------------------------------

//*     Bir inputun içerisinden çıktığınızda çalışır.

todo.addEventListener("blur", run2);                                                //?     todo =  Todo Giriniz yazan input alanı

function run2(e){
    console.log(e.type);                                                            //?     Çıktı = blur
}



//*--------------------------------------------------------------------------------------------------------------------------------------------
//TODO-----------------------------------------------------------------------------------------------------------------------------------------
//TODO                                         copy
//TODO-----------------------------------------------------------------------------------------------------------------------------------------

//TODO  Bir inputun içerisindeki bir değeri kopyaladığında o an alanda ne yazılıysa hepsini yakalar.

todo.addEventListener("copy", run3);

function run3(e){
    console.log(e.target.value);                                                    //?     Çıktı = input içinde ne yazıyorsa.
}

//TODO-----------------------------------------------------------------------------------------------------------------------------------------
//!--------------------------------------------------------------------------------------------------------------------------------------------
//!                                            paste     
//!--------------------------------------------------------------------------------------------------------------------------------------------

//!     Bir inputun içerisine bir değeri yapıştırdığında o an o alanda ne yazılıysa hepsini yakalar.

todo.addEventListener("paste", run4);

function run4(e){
    setTimeout(() => {                                                              //!     paste olayının tetiklendiği anda, yapıştırılan içeriğin henüz input alanına aktarılmamış olmasından dolayı, ilk yapıştırma işleminde içerik boş görünür. Bu sebeple setTimeout fonksiyonu çağırıldı.
        console.log(e.target.value);                                                //!     Yapıştırma işleminden sonra güncellenmiş değeri alır
    }, 0);                                                                          //!     Tarayıcının yapıştırmayı tamamlaması için sıfır zamanlı bir gecikme
}

//!--------------------------------------------------------------------------------------------------------------------------------------------
//?--------------------------------------------------------------------------------------------------------------------------------------------
//?                                             cut               
//?--------------------------------------------------------------------------------------------------------------------------------------------

//?     Bir inputun içerisindeki bir değeri kestiğinde o an alanda ne yazılıysa hepsini yakalar.

todo.addEventListener("cut", run5);

function run5(e){                                                                   //?     abcdefgh yazılıydı "gh" kesildiÇıktı = abcdef
    console.log(e.target.value);
}


//?--------------------------------------------------------------------------------------------------------------------------------------------
//*--------------------------------------------------------------------------------------------------------------------------------------------
//*                                           select
//*--------------------------------------------------------------------------------------------------------------------------------------------

//*     Mouse ile inputta bir yer seçip bıraktığında çalışır.
todo.addEventListener("select", run6);

function run6(e){                                                                   //?     abcdefgh yazılıyda biz de üzerinde "cde" harflerini seçtik ve bıraktığımızda o alanda hala abcdefgh olduğu için onlar console'a yazıldı.     
    console.log(e.target.value);
}


//*--------------------------------------------------------------------------------------------------------------------------------------------
