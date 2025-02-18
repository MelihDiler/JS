/*                              ---------- DOM (DOCUMENT OOBJECT MODEL) ----------

Document nesnesi ile html kodlarına ulaşıp ayrıca değiştirebiliriz. Ekrandaki bir butona ulaşmak için document nesnesini kullanacağız.
Ekranda gördüğümüz her şeye document nesnesinden erişebiliriz. 

WİNDOW ➝ DOCUMENT ➝ HTML ⮫   HEAD ➝  TITLE ➝ MYTITLE
                           ⮩   BODY ➝  <a> ➝ mylink
                                    |        ⮩ href
                                    |
                                    ⮩   <h1> ➝myhead

Ulaşım sıralaması bu şekilde anne çocuk ve kardeş şeklinde bağlantılarla gerçkleşir.

*/ 


let value;

console.log(document.location);      //?  Çıktı = Location {ancestorOrigins: DOMStringList, href: 'http://127.0.0.1:5500/44.%20DOM%20(Document%20Object%20Model)/index.html', origin: 'http://127.0.0.1:5500', protocol: 'http:', host: '127.0.0.1:5500', …}

value = document.location.href;      //?  Çıktı = http://127.0.0.1:5500/44.%20DOM%20(Document%20Object%20Model)/index.html
value = document.characterSet;       //?  Çıktı = UTF-8     --> Bu bizim index.html'deki charset'ten geliyor.
value = document.title;              //?  Çıktı = DOM Document Object Model    --> Bu bizim index.html'deki title'dan geliyor.
value = document.location.protocol;  //?  Çıktı = http:
value = document.location.host;      //?  Çıktı = 127.0.0.1:5500
value = document.links;              //?  Çıktı = Ön yüz yazılmış olsaydı sıra sıra linkler gelecekti. <a> içine yazılanlar. Eğer belirli bir butonu getirmek istiyorsan yanına .item[4] yazarak 4. indeksteki butonun kodunu getirtebilisin.
//value = document.forms.item(1).id; //?  Çıktı = Ön yüz yazılmış olsaydı 1. indeksteki formun id'sini getirecektir. Form olmadığı için yorum satırı yapıldı.


console.log(value);                  //?  Çıktı = http://127.0.0.1:5500/44.%20DOM%20(Document%20Object%20Model)/index.html