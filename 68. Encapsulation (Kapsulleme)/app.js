//                                 ---------- ENCAPSULATION (KAPSULLEME) ----------

class Kisi {
    #isim; // özel alan
    constructor(isim) {
        this.#isim = isim;
    }

    getIsim() {
        return this.#isim;
    }
}

const ali = new Kisi("Ali");

console.log(ali.getIsim());  // ✅ Ali
//*  console.log(ali.#isim);      // ❌ SyntaxError: Private field
