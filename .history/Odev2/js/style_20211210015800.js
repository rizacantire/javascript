var araba = function (renk,marka) {
    this.renk = renk;  //this, nesne oluşturduktan sonra bağlanır
    this.marka = marka;
    this.getRenk = function () {
        return this.renk;
    }
}
//yeni bir constructor fonksiyon nesnesi oluşturduktan sonra bu iki özellik ve metot aslında oluşturduğumuz nesne için deklare olmuş olacak.
var kirmiziHonda = new araba("Kırmızı", "Honda");
console.log(kirmiziHonda.renk);
console.log(kirmiziHonda.marka);
console.log(kirmiziHonda.getRenk());