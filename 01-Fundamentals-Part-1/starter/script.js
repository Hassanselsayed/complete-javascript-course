/*
let js = 'amazing';

console.log(40+8+23-10);

console.log('Jonas');
console.log(23);

let name = 3;
const PI = 3.14;
*/

/*
let jsIsFun = true;
console.log(typeof jsIsFun);
jsIsFun = 23;
console.log(typeof jsIsFun);
jsIsFun = 'hi';
console.log(typeof jsIsFun);
*/

// Coding challenge #1
/*
const markMassOne = 78;
const markHeightOne = 1.69;
const markBMIOne = markMassOne / markHeightOne ** 2;
console.log('Mark BMI One: ', markBMIOne);
const johnMassOne = 92;
const johnHeightOne = 1.95;
const johnBMIOne = johnMassOne / johnHeightOne ** 2;
console.log('John BMI One: ', johnBMIOne);
let markHigherBMI = markBMIOne > johnBMIOne
console.log('Is Mark BMI One higher than John\'s? ', markHigherBMI);

const markMassTwo = 95;
const markHeightTwo = 1.88;
const markBMITwo = markMassTwo / markHeightTwo ** 2;
console.log('Mark BMI Two: ', markBMITwo);
const johnMassTwo = 85;
const johnHeightTwo = 1.76;
const johnBMITwo = johnMassTwo / johnHeightTwo ** 2;
console.log('John BMI Two: ', johnBMITwo);
markHigherBMI = markBMITwo > johnBMITwo
console.log('Is Mark BMI Two higher than John\'s? ', markHigherBMI);
*/

// Coding challenge #2
/*
if (markBMIOne > johnBMIOne) {
  console.log(`Mark's BMI One (${markBMIOne}) is higher than John's (${johnBMIOne})!`)
} else {
  console.log(`John's BMI One (${johnBMIOne}) is higher than Mark's (${markBMIOne})!`)
}
if (markBMITwo > johnBMITwo) {
  console.log(`Mark's BMI Two (${markBMITwo}) is higher than John's (${johnBMITwo})!`)
} else {
  console.log(`John's BMI Two (${johnBMITwo}) is higher than Mark's (${markBMITwo})!`)
}
*/

/* type conversion */
/*** NaN is an invalid number, but it is still a type "number" ***/
// const inputYear = '1991';
// console.log(Number(inputYear)); // 1991
// console.log(inputYear + 18); // "199118"
// console.log(Number(inputYear) + 18); // 2009

/* type coercion (JavaScript converts types when there's an operation with 2 different types) */
// console.log('I am ' + 28 + ' years old.'); // "I am 28 years old." --> JS converts number to strings when there's a + operator
// console.log('23' - 3 - '10'); // 10 --> JS converts strings to numbers when there's a - operator
// console.log('23' - 3 + '10'); // "2010"
// console.log('23' * '2'); // 46 --> "*" & "/" operators are the same as "-" oeprator

/* truthy & falsy values */
// 5 falsey values: 0, '', undefined, null, NaN
// console.log(Boolean(0)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean('Hassan')); // true
// console.log(Boolean({})); // true

// Coding challenge #3
// const dolphinsScoreOne = 97;
// const dolphinsScoreTwo = 112;
// const dolphinsScoreThree = 101;

// const koalasScoreOne = 109;
// const koalasScoreTwo = 95;
// const koalasScoreThree = 106;

// // Task #1
// const dolphinsAverageScore = (dolphinsScoreOne + dolphinsScoreTwo + dolphinsScoreThree) / 3;
// const koalasAverageScore = (koalasScoreOne + koalasScoreTwo + koalasScoreThree) / 3;
// console.log(dolphinsAverageScore);
// console.log(koalasAverageScore);

// // Task #2
// if (dolphinsAverageScore > koalasAverageScore) {
//   console.log('Dolphins are the winners!!!')
// } else if (dolphinsAverageScore < koalasAverageScore) {
//   console.log('Koalas are the winners!!!')
// } else {
//   console.log('Both teams have won!!!!!!');
// }

// // Task #3&4 (Bonus #1&2)
// if ((dolphinsAverageScore || koalasAverageScore) >= 100) {
//   if (dolphinsAverageScore > koalasAverageScore) {
//     console.log('Dolphins are the winners!!!');
//   } else if (dolphinsAverageScore < koalasAverageScore) {
//     console.log('Koalas are the winners!!!');
//   } else {
//     console.log('Both teams have won!!!!!!');
//   }
// } else {
//   console.log('No one won...');
// }

// The Switch Statement
// const day = 'tuesday';
// switch(day) {
//   case 'monday': 
//     console.log('edeeha monday');
//     console.log('edeeny monday');
//     break;
//   case 'tuesday':
//     console.log('edeeha tuesday');
//     console.log('edeeny tuesday');
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log('edeeny wednesday/thursday');
//     console.log('edeeny wednesday/thursday');
//     break;
//   case 'friday':
//     console.log('edeeny friday');
//     console.log('edeeny friday');
//     break;
//   case 'saturday':
//     console.log('edeeny saturday');
//     console.log('edeeny saturday');
//     break;
//   case 'sunday':
//     console.log('edeeny sunday');
//     console.log('edeeny sunday');
//     break;
//   default:
//     console.log('Not a valid day!');
// }

// Statements & Expressions
// Expressions produce values (3 + 4)
// Statements are made of actions & expressions

// Ternary Operator
// They are expressions that produce values & can be assigned to variables

// Coding challenge #4
// const bill = 430;
// const tip = bill >= 50 && bill <= 300 ? bill*0.15 : bill*0.2

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${bill+tip}`);
