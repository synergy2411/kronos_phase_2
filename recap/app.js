// let items = [];

// // Impure Change
// //  - Impure changes will NOT trigger the Pure pipes
// items.push("new item");

// // Pure Changes
// items = ["new item"]

// let user = {
//     firstName :"Foo"
// }
// // Impure Changes
// user.firstName = "Bar";

// // Pure Change
// user ={
//     firstName : "Baz"
// }












// Eagerly Executed
// function display() {
//   return new Promise((resolve, reject) => {
//     console.log("Promise - Started")
//     resolve({ message: "SUCCESS" });
//   });
// }

// display()

// Common Module Import
// const { Observable } = require("rxjs")
import { Observable } from 'rxjs';

function displayObs(){
  return new Observable(observer => {
    console.log("Observable - Started")
    observer.next({message : "SUCCESS"})
  })
}

displayObs().subscribe(console.log)












// Lazily Executed
// const { Observable } = require('rxjs')

// function displayObs() {
//   return new Observable((observer) => {
//     observer.next({ message: "SUCCES" });
//   });
// }

// displayObs()