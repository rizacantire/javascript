let name = prompt("Lütfen adınızı giriniz")
document.querySelector("#myName").innerHTML=name
function date(){
    const date = new Date();
    let currentDate = date.toLocaleTimeString()
    let curretDay;
    switch(date.getDay()){
        case 1:curretDay = "Pazartesi"
        break;
        case 2:curretDay = "Salı"
        break;
        case 3:curretDay = "Çarşamba"
        break;
        case 4:curretDay = "Pazartesi"
        break;
        case 5:curretDay = "Cuma"
        break;
        case 6:curretDay = "Cumartesi"
        break;
        case 7:curretDay = "Pazar"
        break;
    }
    
    document.querySelector("#myClock").innerHTML = currentDate + " " +curretDay
}
date()
setInterval(date,1000)
