let user = {name:"Rıza Can",lastName:"Tire"}
localStorage.setItem("user1",JSON.stringify(user))
let storageUserString = localStorage.getItem("user1")
let storageUserJson = storageUserString.JSON
console.log(storageUserJson)