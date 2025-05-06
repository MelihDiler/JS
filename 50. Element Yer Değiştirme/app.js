//                                    ---------- ELEMENT YER DEGISTIRME ----------

const cardBody = document.querySelectorAll(".card-body")[1];                //*     Todo Listesi yazısına ulaşmak için card-body'e ulaşıyoruz. Bizim yazımızda 2. card-body'de oluğu için 1. indekstekini seçiyoruz. 

//*  <h5 class="card-title">Todo Listesi</h5>                               //*     Bu kodun yerine yenisini atayacağız. Yazdığımız kod ile buradaki eski kod değişecek.

const newTitle = document.createElement("h2");                              //*     h2 elementi oluşturduk.
newTitle.className = "card-title";                                          //*     örnek koda bakarak yenisini oluşturduk.
newTitle.innerHTML = "Todo Listesi - Yeni";                                 //*     örnek koda bakarak yenisini oluşturduk. 

console.log(cardBody.childNodes);                                           //*     cardBody = card-body class isimlilerin 1. indeksteki atanmıştı. O atananın çocukları node tipinde göster.
cardBody.replaceChild(newTitle, cardBody.childNodes[1]);                    //*     replaceChild ile değiştir komutu veriyorum. İlk parametre yenisi, ikinci parametre eskisidir. Node tipinde istediği için cardBody'nin çocuklarından nodelar arasından 1. indekstekiyle dedik. Bunu da bir önceki satırda console'da gösterip bulduk.

