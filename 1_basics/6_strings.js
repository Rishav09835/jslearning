// '' or "" => strings
//string is an object 
let name = "rishav dobriyal"
let count = 23
const gamename = new String('Rvd-dob');//another way to declare string
// console.log(name + count + "repositrycount");outdated syntax

//use backticks 
// console.log(`Hello my name is ${name} and my count is ${count}`);

// console.log(gamename[1]);
// console.log(gamename.__proto__);

// console.log(name.length);
// console.log(gamename.toUpperCase()); 
/*yes, you are correct that strObject is a reference to the String object created using the new String() constructor. However, the reason why the toUpperCase() method doesn't directly affect the primitive String value is because String objects are immutable in JavaScript.

This means that once a String object is created, its value cannot be changed. If you try to modify a String object, a new String object with the modified value will be created instead. This is different from primitive String values, which can be modified directly.

When you call the toUpperCase() method on a String object, it returns a new String object with all the characters converted to uppercase, rather than modifying the original String object in place. This is why the primitive String value remains unchanged, even though you called the toUpperCase() method on a String object that has the same value.*/

// console.log(name.charAt(2));
// console.log(name.indexOf('r'));
// console.log(gamename.substring(0,2));
const newname = gamename.substring(3,4); //[3,4) 4 not included 3 is included
// console.log(newslice);

let anothername = name.slice(-3,-4);
// console.log(anothername);

const blankstring = "  rishav  ";
console.log(blankstring.trim());


const url = "https://rvd.com/rvd%30dob"
console.log(url.replace('dob','-gg'));
console.log(url.includes('rvd'));

//string to array
console.log(name.split(" "));