console.log(window);

// window nesnesi içerisindekileri "window.alert" değil de direkt "alert" olarak yazabilirsin.
// Fakat içerisinde yeni bir dallanma varsa onu direkt yazamazsın. Window içerisindeki location'ı direkt yazabilirsin ama location
// içerisindeki port'u direkt yazamazsın. Onu da location.port olarak yazmalısın. Document, window'un içinde olduğu için de document
// içerisindeki herhangi bir şeye erişmek için tekrar document.erişmekistediğinşey şeklinde yazılmalıdır.

console.error("Hata oluştu"); // Bu şekilde kırmızı olarak yazımızı verir ve başına kırmızı çarpı uyarı işareti koyar.