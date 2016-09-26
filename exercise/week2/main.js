// function move(speed){
    
//     //tpeof is an operator that will return the type that a variable is
//     console.log(typeof speed);
    
//     if (typeof speed === 'string') {
//         console.log("We move at a " + speed + " pace!");
//     } else {
//         console.log("We couldn't move!");
//     }
// }


// move('fast');
// move(5);

// function doThing(porkyman, digiman) {
    
//     // ES6 - Template literals
//     console.log(`The ${porkyman} fights the ${digiman}`);

//     console.log(arguments);
    
//     for (var i = 0; i < arguments.length; i++) {
//         console.log(arguments[i]);
//     }
    
// }

// //doThing('Pikachewed', 'Augerman');
// //console.log(1, 2, 3, 4, 5, 6, 7);

// // Scoping
// // Lexical scoping - variables declared inside of a scope are inaccessible outside of that scope

// // Dynamic scoping - Every time a function is executed (called or invoked) it creates a scope.
// // This scope only exist while the function is running.

// function myFunc() {
//     var potato = 'spudtacular';
//     console.log(potato);
//     return potato;
// }

// console.log(myFunc());

// // Garbage collection
//     // Process of destroying unused variables to free up memory
//     // If a value/object has no referecne, it will be gargabe collected
    
// var Pikachewed = {
//     name: 'Pikachewed',
//     move: 'Thunderstuff'
// }

// Pikachewed = null; // the object that the variable Pikachewed USED to be assigned 
//                     // to is garbage collected
                    
// var Charmangler = {
//     name: 'Charmangler',
//     trainer: {
//         name: 'Ash',
//         age: 10
//     }
// }

// // var ash = Charmangler.trainer;
// // Charmangler = null;

// // console.log(Charmangler, ash); // null and the 'trainer' object inside Charmangler

// // All non-primitive types (objects, arrays, functions) are passed by reference
// // All primitive types are passed by value

// // Callback functions

// // var delayInMilliseconds = 3000; // 3 seconds

// // var timeoutId = setTimeout(function() {
// //     console.log("Testing");
// // }, delayInMilliseconds);

// // setInterval(function(){
// //     console.log("Test2");
// // }, 1000);

// // Closure - Functions defined inside functions retain access to the scope they were created in

function playerMaker() {
    var health = 100;
    
    return function(damage) {
        health -= damage;
        
        if (health <= 0) {
            console.log("Bleeehh");
        }
        else {
            console.log(health);
        }
    }
}

var bill = playerMaker();

bill(10);