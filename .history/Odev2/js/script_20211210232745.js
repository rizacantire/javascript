let listDom = document.querySelector("#list")
let toDoList = ["3 Litre Su İç","Ödevleri Yap",
"En Az 3 Saat Kodlama Yap","Yemek Yap","50 Sayfa Kitap Oku"]

let closeSpan = `<button type="button"  onclick={deleteListItem(event)} class="close mt-3 mr-3">
<span aria-hidden="true">&times;</span>
</button>`
let listElement

for(let i in toDoList){
    listElement = document.createElement("li")
    listElement.innerHTML = toDoList[i]+closeSpan,
    listDom.appendChild(listElement)
}

function deleteListItem(e){
    console.log(e.path[2].innerHTML," : tik")
}
