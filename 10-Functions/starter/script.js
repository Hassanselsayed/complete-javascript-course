'use strict';

// // default parameters
// const bookings = [];
// const createBooking = function(flightNum, numPassengers = 1, price = 199) {
//   // ES5
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price
//   }
//   console.log(booking);
//   bookings.push(booking);
// }

// createBooking('LH123');
// createBooking('LH123', 50);
// createBooking('LH123', undefined, 200);

// // passing arguments: value vs reference
// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Sch',
//   passport: 223563457
// }

// const checkIn = function(flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 223563457) {
//     alert('Check in complete');
//   } else {
//     alert('Wrong passport');
//   }
// }

// checkIn(flight, jonas);
// console.log(flight, jonas);

// const newPassport = function(person) {
//   person.passport = Math.trunc(Math.random() * 100000000);
// }

// newPassport(jonas);
// checkIn(flight, jonas);

// // Higher Order Functions
// const oneWord = function(str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function(str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = function(str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// const highFive = function() {
//   console.log('Hi');
// };

// document.body.addEventListener('click', highFive);

// ['Jonas', 'Marth', 'Adam'].forEach(highFive);

// const design = function(num) {
//   return num * 1000
// };

// const development = function(num) {
//   return num * 2000
// };

// const rentsyncServices = function(num, fn) {
//   console.log('Hi there! We are RS. We offer many services.');
//   console.log(`Thank you for choosing to do your ${fn.name} with us!`);

//   console.log(`Your ${fn.name} will cost you ${fn(num)} dollars.`);
// };

// rentsyncServices(3, design);
// rentsyncServices(2, development);


// Functions returning functions
// const greet = function(greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   }
// };

// // const greet = (greeting) => {
// //   return (name) => {
// //     console.log(`${greeting} ${name}`);
// //   }
// // }
// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Hassan');

// greet('Hello')('Steven');

// // Call, Apply & Bind
// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   // book: function(), same as below
//   book(flightNum, name) {
//     console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}-${flightNum}`);
//     this.bookings.push({flight: `${this.iataCode}-${flightNum}`, name})
//   }
// };

// lufthansa.book(995, 'Hassan Elsayed');
// lufthansa.book(239, 'Jonas Schmedtmann');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// // the following does not work
// // book(23, 'John Smith');

// // Call method
// book.call(eurowings, 23, 'John smith')
// console.log(eurowings);

// book.call(lufthansa, 239, 'Sarah Cooper');
// console.log(lufthansa);

// // Apply method
// const flightData = [583, 'George Cooper'];
// book.apply(eurowings, flightData);
// // book.call(eurowings, ...flightData);
// console.log(eurowings);

// // Bind method
// // book.call(eurowings, 23, 'John smith')
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// bookEW(123, 'Serena Williams');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Hassan Elsayed');
// bookEW23('Sheldon Cooper');

// // Bind with event listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function() {
//   console.log(this);

//   this.planes++
//   console.log(this.planes)
// };

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial application
// // const addTax = (rate, value) => console.log(value + value * rate);
// // addTax(0.1, 200);

// // const addVAT = addTax.bind(null, 0.23);

// // addVAT(1000);
// // addVAT(2300);

// const addTax = function(rate) {
//   return function(value) {
//     console.log(value + value * rate);
//   };
// };

// addTax(0.23)(1000);
// addTax(0.23)(23);

// // Coding Challenge #1
// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     if (typeof answer === 'number' && answer >= 0 && answer <= 3) {
//       console.log(answer);
//       this.answers[answer]++;
//       this.displayResults()
//     }
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   }
// };

// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

// const data1 = {
//   answers: [5, 2, 3]
// };
// const data2 = {
//   answers: [1, 5, 3, 9, 6, 1]
// };

// poll.displayResults.call(data1);
// poll.displayResults.call(data1, 'string');
// poll.displayResults.call(data2);
// poll.displayResults.call(data2, 'string');


// // Immediately Invoked Function Expressions (IIFE)
// (function() {
//   console.log('This will never run again');
// })();

// (() => console.log('This will ALSO never run again'))();

// // Closures
// const secureBooking = function() {
//   let passengerCount = 0;

//   return function() {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   }
// }

// const booker = secureBooking();
// booker();
// booker();
// booker();

// console.dir(booker);

// // Example 1
// let f;

// const g = function() {
//   const a = 23;
//   f = function() {
//     console.log(a * 2);
//   };
// };

// const h = function() {
//   const b = 777;
//   f = function() {
//     console.log(b * 2);
//   };
// }

// g();
// f();
// console.dir(f);

// // re-assigning f function
// h();
// f();
// console.dir(f);

// // Example 2
// const boardPassengers = function(n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function() {
//     console.log(`We are now boarding all ${n} passengers.`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000)

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// const perGroup = 1000;
// boardPassengers(180, 3);

// Coding Challenge #2
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function() {
    header.style.color = header.style.color === 'red'
      ? 'blue'
      : 'red'
  })
})();
