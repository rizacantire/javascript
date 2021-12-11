let listDom = document.querySelector("#list");
let toDoList = ["3 Litre Su İç","Ödevleri Yap",
"En Az 3 Saat Kodlama Yap","Yemek Yap","50 Sayfa Kitap Oku"]

let listElement = document.createElement("li","span");
function changeCss(e) {
    let line = e.target.style;
    let targetClassList = e.target.classList;
    let isActive = targetClassList.value.search("active");
    isActive == -1
        ? (e.target.classList.add("active"), (line.textDecoration = "line-through"))
        : (e.target.classList.remove("active"), (line.textDecoration = ""));
}
listDom.addEventListener("click", changeCss);
let deleteButton;

function deleteListItem(e) {
    let toDO = e.target.parentNode.querySelector("span").innerHTML
    toDoList.splice(toDoList.indexOf(toDO),1)
    e.target.parentNode.remove();

}

function createToDoList(list){
    for(let i in list){
        newItem()
        listElement.innerHTML ="<span>"+ list[i] +"</span>"
        listElement.appendChild(deleteButton)
        listDom.appendChild(listElement)
    }
}
createToDoList(toDoList)

function newItem(item) {
    listElement = document.createElement("li");
    listElement.classList.add("list-group-item");
    deleteButton = document.createElement("button");
    deleteButton.classList.add("close", "mt-3", "mr-3", "delete");
    deleteButton.innerHTML = "x";
    deleteButton.addEventListener("click", deleteListItem);
    listElement.innerHTML = item;
    listElement.appendChild(deleteButton);
    listDom.appendChild(listElement);
}

let inputText = document.querySelector("#task");
function showTostr(status) {
    let toast = document.querySelector(status);
    let showToast = new bootstrap.Toast(toast);
    showToast.show();
}

function newElement() {
    let text = inputText.value.trim();
    inputText.value = "";
    text.length > 0 ? success(text) : showTostr(".error");

}
function success(text) {
    newItem(text)
    toDoList.push(text)
    showTostr(".success");
    for(let i in toDoList){
        localStorage.setItem(`item${i}`,toDoList[i])
    }

}

localStorage.clear()
