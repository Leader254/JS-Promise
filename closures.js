// // Closures in javascript allow a function to access variables from its own scope, the scope of the outer function and the global scope.
// Closures provide access to the outer scope of a function from inside the inner function, even after the outer function has closed.
// function createClosure(){
//     var localVar = "I am local!";

//     // Inner function to access the outer function's variables(closure)
//     function innerFunction(){
//         console.log(localVar);
//     }

//     return innerFunction;
// }

// var closureFunc = createClosure();
// closureFunc();

// function greet(name) {
//     function displayName(){
//         console.log(`Hi ${name}`);
//     }

//     return displayName;
// }
// const g1 = greet("Samuel");
// g1();

// function greet(){
//     let name = "Samuel";

//     function displayName(){
//         console.log(`Name is ${name}`);
//     }

//     return displayName
// }
// const g1 = greet("Samuel");
// g1()

// Sample closure
// function greet(){
//     let name = "Samuel";

//     function displayName(){
//         console.log(`Name is ${name}`);
//     }

//     displayName();
// }
// greet();

// rest operator - when spread operator as a parameter
// function show(a,b, ...args){
//     console.log(a);
//     console.log(b);
//     console.log(args);
// }

// show("one","two","three","four","five","six","seven")

// ==== spread operator =====
// let arr1 = ["one","two"];
// let arr2 = [...arr1,"three","four","five","six"];

// console.log(arr2);

// function displayText(){
//     let date = new Date();

//     let time = date.toLocaleTimeString();

//     console.log(time);

//     setTimeout(displayText, 1000)
// }
// displayText()

function greet(name, callback){
    console.log(`Hi and my name is ${name}`);
    callback();
}

function callFunc(){
    console.log("I'm a callback function!!");
}

greet("Samuel", callFunc);