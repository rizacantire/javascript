let listDom = document.querySelector("#list")
let toDoList = ["3 Litre Su İç","Ödevleri Yap",
"En Az 3 Saat Kodlama Yap","Yemek Yap","50 Sayfa Kitap Oku"]

let listElement
let deleteButton


function deleteListItem(e){
    e.target.parentNode.remove()
}

function createToDoList(i){
    listElement = document.createElement("li")
    deleteButton = document.createElement("button")
    deleteButton.classList.add("close","mt-3","mr-3","delete")
    deleteButton.innerHTML = "x"
    deleteButton.addEventListener("click",deleteListItem)
    listElement.innerHTML = i
    listElement.appendChild(deleteButton)
    listDom.appendChild(listElement)
}
for(let i in toDoList){
    // listElement = document.createElement("li")
    // deleteButton = document.createElement("button")
    // deleteButton.classList.add("close","mt-3","mr-3","delete")
    // deleteButton.innerHTML = "x"
    // deleteButton.addEventListener("click",deleteListItem)
    // listElement.innerHTML = toDoList[i]
    // listElement.appendChild(deleteButton)
    // listDom.appendChild(listElement)
    createToDoList(i)
    
}