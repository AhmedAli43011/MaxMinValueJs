
let arr = [11, 7, 3, 2, 10, 50]
function maxMin(myarr) {
    let minimum = myarr[0];
    for (let i = 0; i <= myarr.length; i++) {
        if (myarr[i] < minimum) {
            minimum = myarr[i]
        }

    }
    return minimum;
}

console.log("here", maxMin(arr));

// const populationLimit = 10

// // Start off with 0 fish
// let fish = 0

// // Initiate while loop to run until fish reaches population limit
// while (fish < populationLimit) {
//   // add one fish for each iteration
//   fish++
//   console.log(
//     'The aquarium has room for ' + (populationLimit - fish) + ' more fish.'
//   )
// }



// function sum(a, b) {
//   return a + b;
 
// }
// console.log(sum(1,2))

// sum(1,2)
// const sum = function (a, b) {
//     return a + b
//   }
// console.log(sum)

// error in this code //

// const printNumbers = {
//     phrase: 'The current value is:',
//     numbers: [1, 2, 3, 4],
  
//     loop() {
//       this.numbers.forEach(function (number) {
//         console.log(this.phrase, number)
//       })
//     },
//   }
//   printNumbers.loop()
  
// solve through bind //

// const printNumbers = {
//     phrase: 'The current value is:',
//     numbers: [1, 2, 3, 4],
  
//     loop() {
//       this.numbers.forEach(function (number) {
//         console.log(this.phrase, number)
//       }.bind(this),)
//     },
//   }
//   printNumbers.loop()

// arrow function

// const printNumbers = {
//     phrase: 'The current value is:',
//     numbers: [1, 2, 3, 4],
  
//     loop() {
//       this.numbers.forEach((number) => {
//         console.log(this.phrase, number)
//       })
//     },
//   }
  
//   printNumbers.loop()


// function myFunction() {
//     this.value = 5
//   }
//   const instance = new myFunction()
//   console.log(instance.value)

//// Global Context ////

// => with console console.log(this) // window

/// with function /// => window

// function ab(){
// console.log(this)
// }
// ab()

"use strict"
// output undefine

// function ab(){
// console.log(this)
// }
// ab()

///// Object Method /////
// const america = {
//     name: 'The United States of America',
//     yearFounded: 1776,
//     details: {
//       symbol: 'eagle',
//       currency: 'USD',
//       printDetails() {
//         console.log(
//           `The symbol is the ${this.name} and the currency is ${this.currency}.`
//         )
//       },
//     },
//   }
//   america.details.printDetails()

//// function constructor ////
//   function Country(name, yearFounded) {
//     this.name = name
//     this.yearFounded = yearFounded
  
//     this.describe = function () {
//       console.log(`${this.name} was founded in ${this.yearFounded}.`)
//     }
//   }
  
//   const america = new Country('The United States of America', 1776)
  
//   america.describe()


  ////  Class Constructor ////

//   class Country {
//     constructor(name, yearFounded) {
//       this.name = name
//       this.yearFounded = yearFounded
//     }
  
//     describe() {
//       console.log(`${this.name} was founded in ${this.yearFounded}.`)
//     }
//   }
  
//   const america = new Country('The United States of America', 1776)
  
//   america.describe()


// const book = {
//     title: 'Brave New World',
//     author: 'Aldous Huxley',
//   }
  
//   function summary() {
//     console.log(`${this.title} was written by ${this.author}.`)
//   }
//   summary.call(book)

// const book = {
//     title: 'Brave New World',
//     author: 'Aldous Huxley',
//   }
//   function summary() {
//         console.log(`${this.title} was written by ${this.author}.`)
//       }
// //   function printThis() {
// //     console.log(this)
// //   }
// //   printThis.call(book)
// // function longerSummary(genre, year) {
// //     console.log(
// //       `${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}.`
// //     )
// //   }
// //   longerSummary.call(book, 'dystopian', 1932)
// const braveNewWorldSummary = summary.bind(book)

// braveNewWorldSummary()
// const book2 = {
//     title: '1984',
//     author: 'George Orwell',
//   }
  
//   braveNewWorldSummary.bind(book2)
  
//   braveNewWorldSummary()