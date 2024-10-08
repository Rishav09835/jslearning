//dataypes 2types :primitive and non primitive. 
    //on the basis of how a dataype is stored in a memory and is accessed.

// ---------------------------------------------------------------
// javascript is dynamically typed.
// const x = 342435385745849n; //bigint
// ----------------------------------------------------------------

// Primitive : call by value.
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
// --------------------------------------------------------------

// Reference(Non-premitive)-call by reference 
// types : Array, objects, Functions

const heroes =["ironman", "shaktiman","doga"];

let object= {
    name: "rvd",
    age: 22,
    class: 304,
}

const myfunasvar = function()
{
console.log("hello world");

}

// ------------------------------------------------
// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function object
//        Object  =>  object