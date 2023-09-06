'use strict';

// Scoping in Practice
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
  
//   function printAge() {
//     let output = `${firstName}, you are ${age} years old, born in ${birthYear}.`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = 'Steven'
//       const str = `Oh, and you're a millenial, ${firstName}.`; // Steven in this case, bcz no variable lookup is needed
//       console.log(str);

//       function add(a,b) {
//         return a + b;
//       }

//       output = 'NEW OUTPUT!';
//     }
//     console.log(millenial);
//     console.log(output);
//     // console.log(add(2, 3)); Will only work outside of strict mode
//   }

//   printAge();
  
//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

// Hoisting & TDZ in Practice
// console.log(me);
// console.log(job);
// console.log(year);


// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// console.log(addDecl(2,3));
// // console.log(addExpr(2,3));
// // console.log(addArrow(2,3));

// function addDecl(a,b) {
//   return a+b
// }

// const addExpr = function(a,b) {
//   return a+b
// };

// var addArrow = (a,b) => a + b;

// // Example of mistake
// // numItems is falsey (due to hoisting of var to undefined) so deleteShoppingCart will be called
// if (!numItems) deleteShoppingCart();

// var numItems = 10;

// function deleteShoppingCart() {
//   console.log('All items deleted');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// the `this` keyword
// console.log(this);

// const calcAge = function(birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1980);

// const jonas = {
//   year: 1991,
//   calcAge: function() {
//     console.log(this);
//     console.log(2037 - this.year);
//   }
// };
// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };
// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// f();

// var firstName = 'Matilda'

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function() {
//     console.log(this);
//     console.log(2037 - this.year);

//     // Solution 1 to this being undefined for simple function calls
//     const self = this; // self or that
//     const isMillenial = function() {
//       console.log(self);
//       console.log(self.year >= 1981 && self.year <= 1996);
//       // console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     // Solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     isMillenial();
//   },
//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   }
// };

// jonas.greet();
// jonas.calcAge();

// arguments keyword
// const addExpr = function(a,b) {
//   console.log(arguments);
//   return a+b
// };
// addExpr(1,2);
// addExpr(2, 5, 8, 12)

// var addArrow = (a,b) => {
//   console.log(arguments);
//   return a + b
// };

// addArrow(2,5,8);

// Primitives vs Objects
// let age = 30;
// let oldAge = age;
// age = 31;
// console.log('age', age);
// console.log('old age', oldAge);

// const me = {
//   name: 'Jonas',
//   age: 30
// };

// const friend = me;
// friend.age = 27;
// console.log('friend', friend);
// console.log('me', me);

// let lastName = 'Williams';
// let  oldLastName = lastName;
// lastName = 'Davis';
// console.log('last name', lastName);
// console.log('old last name', oldLastName);

// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27
// };

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log('before marriage', jessica);
// console.log('after marriage', marriedJessica);

// // only works with let not const, because that would change the memory value in the stack, which isn't allowed with const
// // marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob']
};

// shallow clone
const jessicaCopy = Object.assign({}, jessica2);
// deep clone
// const jessicaCopy = JSON.parse(JSON.stringify(jessica2));

jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('John');
console.log(jessica2);
console.log(jessicaCopy);
