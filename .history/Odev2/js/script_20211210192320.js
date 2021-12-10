let listDom = document.querySelector("#list")
let toDoList = ["3 Litre Su İç","Ödevleri Yap",
"En Az 3 Saat Kodlama Yap","Yemek Yap","50 Sayfa Kitap Oku"]

let closeSpan = `<span onclick={deleteListItem()} class="float-right mr-2">x</span>`
let listElement

for(let i in toDoList){
    listElement = document.createElement("li")
    listElement.innerHTML = toDoList[i]+closeSpan,
    listDom.appendChild(listElement)
}
console.log(listElement)


function deleteListItem(){
    console.log("tik")
}