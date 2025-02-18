//                     ---------- ÇARPIM TABLOSU ----------

/*

1x1=1
1x2=2
1x3=3
.
.
.
1x10=10

*/


for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        let carpim = i*j
        console.log(i + "x" + j + "=" + carpim);
    }
    console.log("---------------------------------------");
}