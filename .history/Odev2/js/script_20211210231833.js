let listDom = document.querySelector("#list")
let toDoList = ["3 Litre Su İç","Ödevleri Yap",
"En Az 3 Saat Kodlama Yap","Yemek Yap","50 Sayfa Kitap Oku"]

let closeSpan = `<button type="button" class="btn btn-close btn-close-white" aria-label="Close">x</button>
`
let listElement

for(let i in toDoList){
    listElement = document.createElement("li")
    listElement.innerHTML = toDoList[i]+closeSpan,
    listDom.appendChild(listElement)
}

function deleteListItem(event){
    console.log(event," : tik")
}