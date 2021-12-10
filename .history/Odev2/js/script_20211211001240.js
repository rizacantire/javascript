let listDom = document.querySelector("#list")
let toDoList = ["3 Litre Su İç","Ödevleri Yap",
"En Az 3 Saat Kodlama Yap","Yemek Yap","50 Sayfa Kitap Oku"]

let listElement
let deleteButton

function deleteListItem(e){
    e.target.parentNode.remove()
}

function createToDoList(list){
    for(let i in list){
        listElement = document.createElement("li")
        deleteButton = document.createElement("button")
        deleteButton.classList.add("close","mt-3","mr-3","delete")
        deleteButton.innerHTML = "x"
        deleteButton.addEventListener("click",deleteListItem)
        listElement.innerHTML = list[i]
        listElement.appendChild(deleteButton)
        listDom.appendChild(listElement)
    }
    
}
createToDoList(toDoList)
let inputText = document.querySelector("#task")
function newElement(){

        console.log(inputText.value.length)
        console.log(inputText.value)

    
}
 
