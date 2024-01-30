// Var has a function scope not block scope - the setTimeout() callbacks captures the same i variable and when they execute after the loop, they all refer to the final value of i which is 3
for(var i = 0; i < 3; i++){
    setTimeout(() => console.log(i),1)
    // 3,3,3
}

// Let is block scoped and each iteration of the loop creates a new lexical scope for the callback function inside setTimeout. Each callback captures the value of i 
for(let i = 0; i < 3; i++){
    setTimeout(() => console.log(i),1)
    // 0,1,2
}