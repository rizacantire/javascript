let user = {name:"Rıza Can",lastName:"Tire"}
localStorage.setItem("user1",JSON.stringify(user))
let storageUser = localStorage.getItem("user1")
console.log(storageUser)