// const getUsers = (callback) => {
//   setTimeout(() => {
//     callback([
//       {
//         username: "Daniel",
//         career: "UX/UI Designer",
//         email: "daniel@example.com",
//       },
//       {
//         username: "Olivia",
//         career: "Financial Analyst",
//         email: "olivia@example.com",
//       },
//       {
//         username: "William",
//         career: "Software Architect",
//         email: "william@example.com",
//       },
//       {
//         username: "Emma",
//         career: "Social Media Manager",
//         email: "emma@example.com",
//       },
//     ]);
//   }, 1000);
// };

// const findUser = (username, callback) => {
//   getUsers((users) => {
//     const user = users.find((user) => user.username === username);
//     callback(user);
//   });
// };
// findUser("Emma", console.log);

// // Promise - an object that encapsulates the result of asynchronous operation - can have states Pending, FulFilled with a value and Rejected for a reason.
// // to create a promise, you use the Promise() constructor
// const promise = new Promise((resolve, reject) => {
//     // contain an operation
//     // ...

//     // return the state
//     if(success) {
//         resolve(value);
//     } else{
//         reject(console.error);
//     }
// });
// // //  once a promise reaches either a fullfilled or rejected state, it stays in that state and can't go to another state. - a promise cannot go from fulfilled to rejected and vice versa
// // // if a promise reaches fulfilled or rejected state, its resolved

// // let success = true;
// // const getUsers = () => {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       if(success){
// //         resolve([
// //             { username: "john", email: "john@test.com" },
// //             { username: "jane", email: "jane@test.com" },
// //           ]);
// //       }
// //       else{
// //         reject("Failed to get the user list");
// //       }
// //     }, 1000);
// //   });
// // };

// // const onFulFilled = users =>{
// //     console.log(users);
// // }

// // const onRejected = error => {
// //     console.log(error);
// // }

// // getUsers().then(onFulFilled, onRejected)

// let isSuccess = true;
// function fetchData() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const data = { message: 'Data fetched successfully' };
//         if(isSuccess){
//             resolve(data);
//         }
//         reject(new Error('Failed to fetch data'));
//       }, 2000);
//     });
//   }
  
//   function processData(data) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const processedData = { message: 'Data processed successfully', originalData: data };
//         if(isSuccess){
//         resolve(processedData);
//         }
//         reject(new Error('Failed to process data'));
//       }, 1500);
//     });
//   }
  
//   function displayData(processedData) {
//     console.log('Displaying data:', processedData);
//   }
  
//   function handleError(error) {
//     console.error('Error:', error.message);
//   }
  
//   fetchData()
//     .then((data) => {
//       console.log('Data fetched:', data);
//       return processData(data);
//     })
//     .then((processedData) => {
//       console.log('Data processed:', processedData);
//       displayData(processedData);
//     })
//     .catch((error) => {
//       handleError(error);
//     });
//     // The processData function simulates processing the fetched data and returns a promise that resolves with the processed data after another delay.
//     // The displayData function logs the processed data to the console.
//     // The handleError function logs any errors that may occur during the process.
//     // The promises are chained using .then() to represent the sequence of operations: fetch data, process data, and then display it.
//     // The .catch() is used to handle any errors that may occur during the promise chain.


const count = true;

let countValue = new Promise(function(resolve, reject) {
  if(count){
    resolve("There is a count value");
  }
  else{
    reject("An error occured");
  }
})

console.log(countValue);