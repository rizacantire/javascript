let listDom = document.querySelector("#list");
// let toDoList = ["3 Litre Su İç","Ödevleri Yap",
// "En Az 3 Saat Kodlama Yap","Yemek Yap","50 Sayfa Kitap Oku"]

let listElement;
let deleteButton;

function deleteListItem(e) {
  e.target.parentNode.remove();
}

// function createToDoList(list){
//     for(let i in list){
//         newItem()
//         listElement.innerHTML = list[i]
//         listElement.appendChild(deleteButton)
//         listDom.appendChild(listElement)
//     }
// }
// createToDoList(toDoList)

function newItem(item) {
  listElement = document.createElement("li");
  deleteButton = document.createElement("button");
  deleteButton.classList.add("close", "mt-3", "mr-3", "delete");
  deleteButton.innerHTML = "x";
  deleteButton.addEventListener("click", deleteListItem);
  listElement.innerHTML = item;
  listElement.appendChild(deleteButton);
  listDom.appendChild(listElement);
}

let inputText = document.querySelector("#task");
function showTostr() {
  var toastElList = [].slice.call(document.querySelectorAll(".toast .success .hide"));
  var toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl);
  });
  toastList.forEach((toast) => toast.show());
}
function newElement() {
  let text = inputText.value;
  inputText.value = "";
  text.length > 0 ? (newItem(text),showTostr()) : console.log("error");
}
