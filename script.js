var today= moment();
console.log(today.format("MM Do YYYY"))
document.getElementById("currentDay").textContent= moment().format("MM Do YYYY")
var present= moment().format("H")
today.format("H")



// if (present < 9){
//   document.getElementByID () time-block, add future 
// } else if (9==present){
//   9=present; time-block; add present
// } else if(9 < present){
//   9= past; time-block; add past
// } 



