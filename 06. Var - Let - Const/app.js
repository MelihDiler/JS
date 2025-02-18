//                                     ---------- Var - Let - Const ----------


/* 
   C#'daki gibi değişken tanımlarken değişken tipleri yazmıyoruz. (int, string, float, double, vb.)
   var/let/const degiskenIsmi = degiskenDegeri;        şeklinde tanımlanır.
*/

//*                                          ---------- Var ----------

//* Var ile globalde tanımlarsan global, function veya block'da tanımlarsan function olur. Bu sebeple ram bellekte çok fazla yer kaplar.

function selamVer(){
    var selam = "Herkese Selam";   //* Function Scope
    if(true){
        var b = 10;                //* Normaldee Block Scope olması lazım fakat Var ile tanımlanan her şey Function Scope olur.
        console.log(b);            
    }
    console.log(selam);
    console.log(b);                //* Block Scope içinde yazılsa bile var ile tanımlandığı için block dışında da çalışır.
}

selamVer();

//?                                       ---------- Let & Const ----------

//? Yukarıdaki "b" değişkenini Let ya da Const ile tanımlamış olsaydık eğer hata alırdık. Çünkü Let ya da Const Block Scope'dur ve Block dışında 
//? satır 20'de erişmeye kalktığımız için hata verir. Fakat Block Scope içinde olan satır 17 hatasız çalışır.



//TODO                           ---------- Var ile Let & Const Diğer Farkı ----------

var a = 5;
var a = 10;

console.log(a);                    //TODO   Burada çıktı 10 olur. Aynı C#'daki gibi en son çıktı almadan önce nerede atama yaptıysan onu kabul eder.

//TODO  if(true){
//TODO      let c = 100;           //TODO   Burada zaten c adında bir değişken tanımladın bir daha tanımlayamazsın diyor. Hata verdiği için yorum satırı yapıldı.
//TODO      let c = 200;
//TODO      console.log(c);
//TODO  }

//!                                     ---------- Let ile Const Farkı ----------

//! Const (Constant = Sabit, Değişmez)

//! const d = 10;
//! d = 15;
//! console.log(d);         Sen zaten bir değer atadın sabitleri değiştiremezsin diye hata verir. Hata verdiği için yorum satırı yapıldı.


let e = 5;                  //! Çıktı olarak 10 verir. Var'dan farkı var ile 2 defa var yazıp değişken tanımlayabiliyorduk fakat let ile ilk satırda tanımladık. 
e = 10;                     //! 2. satırda ise değişkene yeni değer attık. let e = 10; yazsaydık hata verirdi.
console.log(e);             //! Ayrıca "a" ve "e" ikisi de globalde tanımlanmasına rağmen var ile tanımlanan a, window nesnesinin bir özelliği olurken, let ile 
                            //! tanımlanan e, window nesnesinde yer almaz.

                            //! var ile tanımlanan değişkenler, window nesnesinin bir özelliği olur, yani global scope'ta tanımladığınız bir değişken aslında global 
                            //! nesneye eklenir. Bu durum, istenmeyen global değişken çakışmalarına yol açabilir. Örneğin, 3. parti bir kütüphane ile çalışıyorsanız, 
                            //! kütüphane de window nesnesine yeni değişkenler ekleyebilir. Eğer sizin de aynı ismi kullanmanız gerekirse, bu bir ad çakışmasına yol 
                            //! açabilir ve beklenmedik hatalar oluşabilir. 
                            //! let ile tanımlanan değişkenler, global nesnede yer almadığı için daha güvenlidir. Çünkü bu değişkenler yalnızca global scope içinde 
                            //! geçerlidir ve dışarıdan (örneğin başka bir JavaScript dosyasından veya kütüphaneden) müdahale edilemez. Bu, özellikle büyük projelerde 
                            //! veya birden fazla geliştiriciyle çalışırken önemlidir. let ile tanımlanan değişkenlerin global nesneye eklenmemesi, kodun dışsal 
                            //! müdahalelere karşı daha güvenli olmasını sağlar.
                            

let user = {                //! Burada let yerine const ile tanımlasaydık eğer;
    username :"melih",
    password :"diler"
}

user={age : 23};            //! Burada bir atama, ekleme, silme gibi bir işlem yapamazdık çünkü sabittir. Sadece değer değiştirebilirdik.
//! user.username="John";       yapabilirdik. Çünkü {} ile yeni bir atama değil atanmış olanın içindeki değeri değiştiriyoruz.
console.log(user);