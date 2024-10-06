const rollNo = 2895
let cname = "Rishav"
var age = 35
city = "Delhi" //not recommended to use var like this
 
// rollNo = 5467 //not allowed
/*
prefer not to use var (block scope and functional scope issue in this)
*/
age = 89
cname = "Rajendra"
city = "Dehradun"
console.log(rollNo);
console.table([age,cname,city])