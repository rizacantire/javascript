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
        newItem()
        deleteButton.classList.add("close","mt-3","mr-3","delete")
        deleteButton.innerHTML = "x"
        deleteButton.addEventListener("click",deleteListItem)
        listElement.innerHTML = list[i]
        listElement.appendChild(deleteButton)
        listDom.appendChild(listElement)
    }
}
createToDoList(toDoList)

function newItem(){
    listElement = document.createElement("li")
    deleteButton = document.createElement("button")
}

let inputText = document.querySelector("#task")

function newElement(){
    let text = inputText.value
    toDoList.push(text)
    text.length>0?createToDoList(toDoList):console.log("error")
    
}
 