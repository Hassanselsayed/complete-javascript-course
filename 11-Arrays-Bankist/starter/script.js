'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const displayMovements = function(movements, sort = false) {
  containerMovements.innerHTML = ''

  const movs = sort ? movements.slice().sort((a,b) => a-b) : movements

  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function(acc) {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function(acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * (acc.interestRate / 100))
    .filter(interest => interest >= 1)
    .reduce((acc, interest) => acc + interest, 0);
  labelSumInterest.textContent = `${interest}€`
};

const createUserNames = function(accs) {
  accs.forEach(acc => {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map( name => name[0])
      .join('');
  });
};
createUserNames(accounts);

const updateUi = function(acc) {
  displayMovements(acc.movements);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
}

// Event handlers
let currentAccount;
btnLogin.addEventListener('click', function(e) {
  e.preventDefault();

  currentAccount = accounts.find(acc => acc.userName === inputLoginUsername.value);
  // console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}!`;
    containerApp.style.opacity = 1;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Display movements, balance && summary
    updateUi(currentAccount);
  } else {
    containerApp.style.opacity = 0;
    inputLoginUsername.value = inputLoginPin.value = '';
    labelWelcome.textContent = `Wrong username/password, bitch! Log in to get started`;
    inputLoginPin.blur();
  }
});

btnTransfer.addEventListener('click', function(e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(acc => acc.userName === inputTransferTo.value);

  if (
    amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= amount &&
    receiverAccount?.userName !== currentAccount.userName
    ) {
      currentAccount.movements.push(-amount);
      receiverAccount.movements.push(amount);
      updateUi(currentAccount);
  }

  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferAmount.blur();
});

btnLoan.addEventListener('click', function(e) {
  e.preventDefault();

  const loanAmount = Number(inputLoanAmount.value);
  if (loanAmount > 0 && currentAccount.movements.some(mov => mov >= loanAmount*0.1)) {
    // Add movement
    currentAccount.movements.push(loanAmount);

    // Update UI
    updateUi(currentAccount);
  }

  inputLoanAmount.value = '';
  inputLoanAmount.blur();
})

btnClose.addEventListener('click', function(e) {
  e.preventDefault();
  if (currentAccount.userName === inputCloseUsername.value && currentAccount.pin === Number(inputClosePin.value)) {
    const accIndex = accounts.findIndex((acc) => {
      return currentAccount.userName === acc.userName;
    });

    // Delete account
    accounts.splice(accIndex, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function(e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// // Slice
// console.log(arr.slice(2));
// console.log(arr.slice(1, 3));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));

// // create a shallow copy of the array
// console.log(arr.slice());
// console.log([...arr]);

// // Splice
// console.log(arr.splice(2));
// arr.splice(-1);
// arr.splice(1, 2);
// console.log(arr);

// // Reverse
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);


// // Concat
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // Join
// console.log(letters.join(' - '));

// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// // getting the last element of the array
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// // forEach method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for(const [i, movemenet] of movements.entries()) {
//   if (movemenet > 0) {
//     console.log(`Movemenet ${i + 1}: You deposited ${movemenet}`);
//   } else {
//     console.log(`Movemenet ${i + 1}: You withdrew ${Math.abs(movemenet)}`);
//   }
// }

// console.log(`--------forEach-------`);

// movements.forEach(function(mov, i, arr) {
//   if (mov > 0) {
//     console.log(`You deposited ${mov}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(mov)}`);
//   }
// });

// // Map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
// currencies.forEach(function(value, key, map) {
//   console.log(value, key, map);
// });

// // Set
// const currenciesUnique = new Set(['USD', ' GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function(value, key, set) {
//   console.log(value, key, set);
// })

// // Coding challenge 1
// function checkDogs(dogsJulia, dogsKate) {
//   // const dogsJuliaShallowCopy = [...dogsJulia];
//   const dogsJuliaShallowCopy = dogsJulia.slice();
//   dogsJuliaShallowCopy.shift();
//   dogsJuliaShallowCopy.splice(-2);

//   const combinedDogs = [...dogsJuliaShallowCopy, ...dogsKate];
//   combinedDogs.forEach((dogAge, index) => {
//     const stringBegin = `Dog Number ${index+1} is`
//     if(dogAge >= 3) {
//       console.log(`${stringBegin} an adult, and is ${dogAge} years old!`);
//     } else {
//       console.log(`${stringBegin} still a puppy!`);
//     }
//   })
// }

// const dogsJulia1 = [3, 5, 2,12, 7];
// const dogsKate1 = [4, 1, 15, 8, 3];

// const dogsJulia2 = [9, 16, 6, 8, 3];
// const dogsKate2 = [10, 5, 6, 1, 4];
// console.log('------Test Data 1------');
// checkDogs(dogsJulia1, dogsKate1);
// console.log('------Test Data 2------');
// checkDogs(dogsJulia2, dogsKate2);

// // map method
// const eruToUsd = 1.1;
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // const movementsUsd = movements.map(function(mov) {
// //   return mov * eruToUsd
// // });
// const movementsUsd = movements.map(mov => mov * eruToUsd);
// console.log(movements);
// console.log(movementsUsd);

// // same thing using a for-of loop
// const movementsUsdFor = [];
// for (const mov of movements) {
//   movementsUsdFor.push(mov * eruToUsd)
// }
// console.log(movements);
// console.log(movementsUsdFor);

// const movemenetsDescriptions = movements.map((mov, i) =>
//   `Movemenet ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
// );

// console.log(movemenetsDescriptions);

// // filter method
// const deposits = movements.filter(function(mov) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);

// const depositsFor = [];
// for (const mov of movements) {
//   if (mov > 0) depositsFor.push(mov)
// }
// console.log(depositsFor);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// // reduce method
// // accumulator => SNOWBALL
// const balance = movements.reduce(function(acc, cur, i, arr) {
//   return acc + cur
// }, 0);
// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

// // MAX value of movements
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) 
//     return acc;
//   else
//     return mov;
// }, movements[0]);
// console.log(max); 

// // Coding challenge 2
// const calcAvgHumanAge = function(ages) {
//   const humanAges = ages.map(age => {
//     if (age <= 2)
//       return 2 * age;
//     else 
//       return 16 + age * 4;
//   })

//   const adultDogs = humanAges.filter(age => age >= 18);

//   // const avgHumanAge = adultDogs.reduce((acc, cur) => {
//   //   return acc + cur;
//   // }, 0) / adultDogs.length;

//   const avgHumanAge = adultDogs.reduce((acc, cur, i, arr) => acc + (cur / arr.length), 0)
//   console.log(avgHumanAge);
// }

// const data1 = [5, 2, 4, 1, 15, 8, 3];
// const data2 = [16, 6, 10, 5, 6, 1, 4];
// calcAvgHumanAge(data1); 
// calcAvgHumanAge(data2);

// const euroToUsd = 1.1;
// // PIPELINE (Method chaining)
// const totalUsdDeposits = movements
//   .filter(mov => mov > 0)
//   // .map(mov => mov * euroToUsd)
//   .map((mov, i, arr) => {
//     // console.log(arr);
//     return mov * euroToUsd;
//   })
//   // .reduce((acc, mov) => acc + mov, 0);
//   .reduce((acc, mov, i, arr) => {
//     console.log(arr);
//     return acc + mov;
//   }, 0);
// console.log(totalUsdDeposits);

// // Coding challenge 3
// const calcAvgHumanAge = ages => ages
//   .map(age => age <=2 ? 2 * age : 16 + age * 4)
//   .filter(age => age >= 18)
//   .reduce((acc, cur, i, arr) => acc + (cur / arr.length), 0);
// const avg1 = calcAvgHumanAge([5, 2, 4, 1, 15, 8, 3]); 
// const avg2 = calcAvgHumanAge([16, 6, 10, 5, 6, 1, 4]); 
// console.log(avg1);
// console.log(avg2);

// // find method
// const firstWithdrawal = movements.find(mov => mov < 0);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// const accountForOf = {};
// for (const account of accounts) {
//   if (account.owner === 'Jessica Davis') {
//     Object.assign(accountForOf, account);
//   }
// }
// console.log(accountForOf);

// // some method
// console.log(movements);
// console.log(movements.includes(-130));

// const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits);

// // every method
// console.log(movements.every(mov => mov > 0)); // false
// console.log(account4.movements.every(mov => mov > 0)); // true

// // Separate callback
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// // flat && flatMap methods
// const arr = [[1,2,3], [4,5,6], 7,8];
// console.log(arr.flat());

// const arrDeep = [[[1,2],3], [4,[5,6]], 7,8];
// console.log(arrDeep.flat());
// console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);

// const overallBalance = allMovements.reduce((acc, mov) => acc +mov, 0);
// console.log(overallBalance);

// // flat
// const overallBalanceChained = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc +mov, 0);
// console.log(overallBalanceChained);

// // flatMap
// const overallBalanceChained2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc +mov, 0);
// console.log(overallBalanceChained2);

// // sort method
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());
// console.log(owners);

// console.log(movements);
// // a < b (keep order), return < 0 (-ve)
// // a > b (switch order), return > 0 (+ve)
// // movements.sort((a, b) => a > b ? 1 : -1); // ascending
// movements.sort((a, b) => a-b); // ascending
// console.log('ascending', movements);
// // movements.sort((a, b) => a > b ? -1 : 1); // descending
// movements.sort((a, b) => b-a); // descending
// console.log('descending', movements);

// // more ways to fill arrays
// console.log([1,2,3,4,5,6,7]);
// console.log(new Array(1,2,3,4,5,6,7));

// // empty arrays + fill method
// const x = new Array(7);
// console.log(x);
// // x.fill(1);
// // x.fill(1, 3);
// x.fill(1, 3, 5);
// console.log(x);

// // Array.from method
// Array.from(arr);
// console.log(arr);
// const arr = [1,2,3,4,5,6,7];
// const y = Array.from({length: 7}, () => 1);
// console.log(y);

// const z = Array.from({length: 7}, (_, i) => i+1);
// console.log(z);

// const dice = Array.from({length: 100}, () => Math.ceil(Math.random()*6));
// console.log(dice);

// labelBalance.addEventListener('click', () => {
//   const movementsUi = Array.from(
//     document.querySelectorAll('.movements__value'),
//     element => Number(element.textContent.replace('€', ''))
//   );
//   console.log(movementsUi);

//   const movementsUi2 = [...document.querySelectorAll('.movements__value')];
//   console.log(movementsUi2);
// });

// Array methods practice
// // 1.
// const bankDepositsSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((sum, cur) => sum + cur, 0);
// console.log(bankDepositsSum);

// // 2.
// // const numDeposits1000 = accounts
//   // .flatMap(acc => acc.movements)
//   // .filter(mov => mov >= 1000)
//   // .length;
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   // .reduce((count, cur) => (cur >= 1000 ? count++ : count), 0); ++ doesn't work here
//   .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
// console.log(numDeposits1000);

// // Post- vs pre-fix operators
// let a = 10;
// console.log(a++); // 10, returns the 10, then adds 1
// console.log(a); // 11
// console.log(++a); // 12

// // 3.
// const {deposits, withdrawals} = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((sums, cur) => {
//     // cur > 0  ? sums.deposits += cur : sums.withdrawals += cur;
//     sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//     return sums;
//   }, {deposits: 0, withdrawals: 0});
// console.log(deposits, withdrawals);

// // 4.
// // this is a nice title --> This Is a Nice Title
// const convertTitleCase = function(title) {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1);
//   const exceptions = ['a', 'an', 'the', 'but', 'or', 'and', 'is', 'on', 'in', 'with'];

//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word => exceptions.includes(word) ? word : capitalize(word)).join(' ');
//   return capitalize(titleCase);
// };

// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but not too long'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));

// Coding challenge #4
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1
dogs.forEach(dog => {
  dog.recommendedFood = Math.trunc(dog.weight**0.75 * 28);
});
console.log(dogs);

// 2
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
const foodDifference = ((sarahDog.curFood - sarahDog.recommendedFood) / sarahDog.curFood) * 100;
console.log(`${foodDifference}%`);
if (Math.abs(foodDifference) <= 10) console.log('Sarah dog is eating ok');
else if (foodDifference > 0) console.log('Sarah dog is eating too much');
else console.log('Sarah dog eating too little');

// 3
const ownersEatTooMuch = dogs
  .filter(dog => {
    const foodDifference = ((dog.curFood - dog.recommendedFood) / dog.curFood) * 100;
    return foodDifference > 10;
  })
  .flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs
  .filter(dog => {
    const foodDifference = ((dog.curFood - dog.recommendedFood) / dog.curFood) * 100;
    return foodDifference < -10;
  })
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

// 4
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eats too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eats too little!`);

// 5
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// 6
const foodDifferenceFn = function(dog) {
  return Math.abs(((dog.curFood - dog.recommendedFood) / dog.curFood) * 100) <= 10;
}
console.log(dogs.some(dog => foodDifferenceFn(dog)));

// 7
const okayDogs = dogs.filter(dog => foodDifferenceFn(dog));
console.log(okayDogs);

// 8
const dogsCopy = [...dogs];
dogsCopy.sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsCopy);
