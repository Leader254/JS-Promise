// function Person(firstname, lastname){
//     this.firstname = firstname;
//     this.lastname = lastname;
// }

// var person1 = new Person();
// person1.firstname = "Steve";
// person1.lastname = "Jobs";

// console.log(person1.firstname + " " + person1.lastname);

// var person2 = new Person();
// person2.firstname = "Mel";
// person2.lastname = "Samuel";

// console.log(`${person2.firstname} ${person2.lastname}`);

// console.log(this);

// function Person(){
//     this.firstname = "Mel";
//     this.lastname = "Samuel";
//     this.getFullName = function(){
//         return this.firstname + " " + this.lastname;
//     }
// };

// var person1 = new Person();
// person1.firstname = "Samuel";
// person1.lastname = "Wachira";

// function Person(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.getFullName = function() {
//         return this.firstname + " " + this.lastname;
//     }
// }

// var person1 = new Person("Samuel", "Wachira");
// console.log(person1.getFullName());
// console.log(person1.firstname);

// A function with one or more params can be used like a constructor where you pass the param values at the time or creating an object with the new keyword
// function Person(FirstName, LastName, Age) {
//     this.firstName = FirstName || "unknown";
//     this.lastName = LastName || "unknown";
//     this.age = Age || 25;
//     this.getFullName = function () {
//         return this.firstName + " " + this.lastName;
//     }
// };

// var person1 = new Person("James","Bond",50);
// console.log(person1.getFullName());

// function Person(firstName, lastName){
//     var _firstname = firstName || "unknown";
//     var _lastname = lastName || "unknown";

//     Object.defineProperties(this, {
//         "FirstName": {
//             get: function (){
//                 return _firstname;
//             }
//             // set: function(value){
//             //     _firstname = value;
//             // }
//         },
//         "LastName": {
//             get: function(){
//                 return _lastname;
//             }
//             // set: function(value){
//             //     _lastname = value;
//             // }
//         }
//     });
// };

// var person1 = new Person("Samuel", "Mel");
// // person1.FirstName = "Samuel";
// // person1.LastName = "Mel";

// console.log(person1.FirstName + " " + person1.LastName);

