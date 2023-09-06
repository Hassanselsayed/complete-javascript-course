'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio';

// // Function Declaration
// function logger() {
//   console.log('My name is Hassan');
// }

// // calling / running / invoking the function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice
// }

// const appleJuice = fruitProcessor(5, 0);
// conssole.log(appleJuice);

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1993);
// console.log(age1);

// // Function Expression (using anonymos functions)
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);
// console.log(age1, age2);

// Arrow Functions
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1992);
// console.log(age3);

// const yearsUntilRetire = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retire = 65 - age;
//   // return retire;
//   return `${firstName} retires in ${retire} years!`
// }

// console.log(yearsUntilRetire(1991, 'Hassan'));

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function(birthYear) {
//   return 2037 - birthYear
// }

// const yearsUntilRetire = function(birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retire = 65 - age;
  
//   return retire > 0 ? retire : -1

//   // return `${firstName} retires in ${retire} years!`
// }

// console.log(yearsUntilRetire(1991, 'Hassan'));
// console.log(yearsUntilRetire(1970, 'Hassan'));

// Coding Challenge #1
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3

// const dolphinsAverage = calcAverage(44, 23, 71);
// const dolphinsAverage2 = calcAverage(85, 54, 41);
// const dolphinsAverage3 = calcAverage(85, 54, 41);

// const koalasAverage = calcAverage(65, 54, 49);
// const koalasAverage2 = calcAverage(23, 34, 27);
// const koalasAverage3 = calcAverage(100, 134, 127);

// const checkWinner = (avgDolphins, avgKoalas) => {
//   if (avgDolphins >= 2*avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//   } else if (avgDolphins*2 <= avgKoalas) {
//     console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//   } else {
//     console.log('No one wins :(');
//   }
// }

// checkWinner(dolphinsAverage, koalasAverage);
// checkWinner(dolphinsAverage2, koalasAverage2);
// checkWinner(dolphinsAverage3, koalasAverage3);

// Arrays
// const friend1 = 'Haitham';
// const friend2 = 'Ali';
// const friend3 = 'Omar';

// const friends = ['Haitham', 'Ali', 'Omar'];
// console.log(friends);

// // const years = new Array(1991, 1992, 1993, 1994);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Ahmed';
// console.log(friends);

// const Hassan = ['Hassan', 'Elsayed', 2037-1993, 'Developer', friends];
// console.log(Hassan);

// // Exercise
// function calcAge(birthYear) {
//   return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [age1, age2, age3];
// console.log(ages);

// const friends = ['Haitham', 'Ali', 'Omar'];

// // Add elements
// const newLength = friends.push('Zak');
// console.log(friends);
// console.log(newLength);

// friends.unshift('Essam');
// console.log(friends);

// // Remove elements
// friends.pop();
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Ali'));
// console.log(friends.includes('Ali'));

// if (friends.includes('Haitham')) {
//   console.log('You have a friends called Haitham');
// }

// Coding Challenge #2

// const calcTip = bill => {
//   if (bill >= 50 && bill <=300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// }

// const bills = [125, 555, 44];
// console.log(bills);

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// console.log(tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

// Objects
// object literal syntax
// const hassan = {
//   firstName: 'Hassan',
//   lastName: 'Elsayed',
//   age: 2022 - 1993,
//   job: 'Developer',
//   friends: ['Haitham', 'Omar', 'Mohamed']
// };

// console.log(hassan);
// console.log(hassan.lastName);
// console.log(hassan['lastName']);

// const nameKey = 'Name';
// console.log(hassan['first' + nameKey]);
// console.log(hassan['last' + nameKey]);

// const interestedIn = prompt('hello');
// console.log(hassan[interestedIn] ? hassan[interestedIn] : 'This property doesn\'t exist');

// hassan.location = 'Canada';
// hassan['twitter'] = '@hassanselsayed';

// // 'Hassan has 3 friends, and his best friend is called Haitham'
// console.log(`${hassan.firstName} has ${hassan.friends.length} friends, and his best friend is called ${hassan.friends[0]}`);

// const hassan = {
//   firstName: 'Hassan',
//   lastName: 'Elsayed',
//   birthYear: 1993,
//   job: 'Developer',
//   friends: ['Haitham', 'Omar', 'Mohamed'],
//   hasDriversLicense: true,
//   calcAge: function() {
//     this.age = 2022 - this.birthYear;
//     return this.age;
//   },
//   summary: function() {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? `a` : `no`} driver's license`;
//   }
//   // calcAge: function() {
//   //   console.log(this);
//   //   return 2022 - this.birthYear;
//   // }
//   // calcAge: function(birthYear) {
//   //   return 2022 - birthYear;
//   // }
// };

// // console.log(hassan['calcAge']()); 
// console.log(hassan.summary()); 

// Coding Challenge #3
// const markBMI = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function() {
//     this.bmi = this.mass / (this.height ** 2);
//     return this.bmi;
//   }
// };

// const johnBMI = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function() {
//     this.bmi = this.mass / (this.height ** 2);
//     return this.bmi;
//   }
// };

// if (markBMI.calcBMI() < johnBMI.calcBMI()) {
//   console.log(`${johnBMI.fullName}'s BMI (${johnBMI.bmi}) is higher than ${markBMI.fullName}'s (${markBMI.bmi})`);
// } else {
//   console.log(`${markBMI.fullName}'s BMI (${markBMI.bmi}) is higher than ${johnBMI.fullName}'s (${johnBMI.bmi})`);
// }

// The For loop
// for(let i = 1; i <=10; i++) {
//   console.log('Lifting weights rep ', i);
// }

// const hassanArray = ['Hassan', 'Elsayed', 2037-1993, 'Developer', ['Haitham', 'Essam', 'Ali']];
// const typesArray =[]

// for(let i = 0; i < hassanArray.length; i++) {
//   console.log(hassanArray[i]);
//   typesArray.push(typeof hassanArray[i])
// }
// console.log(typesArray);

// const birthYears = [1991, 2007, 1969, 2020];
// const ages = []
// for(let i = 0; i < birthYears.length; i++) {
//   ages.push(2022 - birthYears[i]);
// }
// console.log(ages);

// continue & break
// const hassanArray = ['Hassan', 'Elsayed', 2037-1993, 'Developer', ['Haitham', 'Essam', 'Ali']];
// console.log('--- Only strings ---');
// for(let i = 0; i < hassanArray.length; i++) {
//   if (typeof hassanArray[i] !== 'string' ) continue;
//   console.log(hassanArray[i]);
// }

// console.log('--- Break after 1st non-string ---');
// for(let i = 0; i < hassanArray.length; i++) {
//   if (typeof hassanArray[i] !== 'string' ) break;
//   console.log(hassanArray[i]);
// }

// Looping backwards
// const hassanArray = ['Hassan', 'Elsayed', 2037-1993, 'Developer', ['Haitham', 'Essam', 'Ali']];
// for(let i = hassanArray.length - 1; i >= 0; i--) {
//   console.log(i, hassanArray[i]);
// }

// Loops in Loops
// for(let exercise = 1; exercise < 4; exercise++) {
//   console.log(`---Starting exercise ${exercise}---`);
//   for(let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise} ==> Lifting weights rep ${rep}`);
//   }
// }

// The While loop
  // for(let rep = 1; rep <= 10; rep++) {
  //   console.log(`FOR: Lifting weights rep ${rep}`);
  // }
  
  // let rep = 1;
  // while (rep <= 10) {
  //   console.log(`WHILE: Lifting weights rep ${rep}`);
  //   rep++
  // }

  // let dice = Math.trunc(Math.random() * 6) + 1;

  // while(dice !== 6) {
  //   console.log('You rolled a ', dice);
  //   dice = Math.trunc(Math.random() * 6) + 1;
  // }


  // Coding Challenge #4
  // const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
  // const tips = [];
  // const totals = [];

  // const calcTip = bill => {
  //   if (bill >= 50 && bill <=300) {
  //     return bill * 0.15;
  //   } else {
  //     return bill * 0.2;
  //   }
  // }

  // for (let i=0; i < bills.length; i++) {
  //   const tip = calcTip(bills[i])
  //   tips.push(tip);
  //   totals.push(tip + bills[i]);
  // }

  // console.log('bills', bills);
  // console.log('tips', tips);
  // console.log('totals', totals);

  // const calcAverage = arr => {
  //   let sum = 0;
  //   for (let i=0; i < arr.length; i++) {
  //     sum += arr[i];
  //   }
  //   const average = sum / arr.length;
  //   return average;
  // }

  // console.log(calcAverage(totals));