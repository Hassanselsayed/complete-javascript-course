'use strict';

// const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//   [weekDays[3]]: { // Enhanced object literals #3
//     open: 12,
//     close: 22,
//   },
//   [weekDays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekDays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   // ES6 enhanced object literals
//   openingHours, // 1
//   order(starterIndex, mainIndex) { // 2
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
//   },
  

//   orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
//     console.log(this.starterMenu[starterIndex]);
//     console.log(this.mainMenu[mainIndex]);
//     console.log(time);
//     console.log(address);
//   },

//   orderPasta(ing1, ing2, ing3) {
//     console.log(`Here is your pasta with ${ing1}, ${ing2}, & ${ing3}`);
//   },

//   orderPizza(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   } 
// };

// Looping objects
// Property names (keys)
// const properties = Object.keys(openingHours);
// console.log(properties);
// for (const day of Object.keys(openingHours)) console.log(day);
// Property values (values)
// const values = Object.values(openingHours);
// console.log(values);
// Property entries (entries)
// const entries = Object.entries(openingHours);
// for (const [key, {open, close}] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// Optional chaining (?.)
// Objects
// console.log(restaurant.openingHours?.mon?.open);
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for(const day of days) {
  // console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }
// Methods
// console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exist');
// Arrays
// const users = [
//   {
//     name: 'Jonas',
//     email: 'hello@jonas.io'
//   }
// ];
// console.log(users[0]?.name ?? 'User array empty');
// console.log(users[1]?.name ?? 'User array empty');

// for-of loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const item of menu.entries()) console.log(`${item[0] + 1}: ${item[1]}`);
// for (const [index, element] of menu.entries()) {
//   console.log(`${index + 1}: ${element}`);
// }

// console.log([...menu.entries()]);

// OR assignment operator
// const rest1 = {
//   name: 'Capri',
//   numGuests: 0
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni'
// };

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish assignment operator
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// Nullish coalescing operator (??)
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// Nullish values: null & undefined
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

// Logical operators can use (and return) any data type, not just booleans, and can be used for short circuiting
// console.log('-----OR-----');
// console.log(3 || 'Jonas'); // 3
// console.log('' || 'Jonas'); // Jonas
// console.log(true || 0); // true
// console.log(undefined || null); // null

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('-----AND-----');
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// console.log('Hello' && 23 && null && 'Jonas');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');


// REST Pattern with destructuring
// REST, becuase on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, otherFood);

// const {sat, ...weekDays} = restaurant.openingHours;
// console.log(sat, weekDays);

// REST Parameters with functions
// const add = function(...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8,2,5,4,3,2,2,6);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del sol, 21',
//   mainIndex: 2,
//   starterIndex: 2
// });

// Destructuring objects
// const {name: restaurantName, openingHours, categories} = restaurant;
// console.log(restaurantName);
// console.log(openingHours);
// console.log(categories);

// Default values
// const {menu = [], starterMenu: starters = []} = restaurant;
// console.log(menu);
// console.log(starters);

// Mutating variables
// let a = 111;
// let b = 999;
// const obj = {a: 23, b: 7, c: 14};

// ({a, b} = obj);
// console.log(a,b);

// Nested objects
// const { openingHours} = restaurant;
// const { fri: {open: o, close} } = openingHours;
// console.log(o, close);

// Destructuring arrays
// const [x, y, z] = arr;
// console.log(x,y,z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// Switching variables with destructuring
// [main, secondary] = [secondary, main]
// console.log(main, secondary);

// Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// Nested desctructuring
// const nested = [2, 4, [5, 6]];
// const [first, , third] = nested;
// console.log(first, third);
// const [i, , [x, y]] = nested;
// console.log(i, x, y);

// Default values
// const [p=1, q=1, r=1] = [8, 9];
// console.log(p,q,r);

// Spread operator
// const arr = [7,8,9];
// const arr2 = [9, 10, ...arr];
// console.log(arr2);

// console.log(...arr2);
// const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
// console.log(newMenu);

// Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// Join arrays together
// const joinedArray = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(joinedArray);

// const str = 'jonas';
// const arr = [...str, 'f'];
// console.log(arr);

// const ingredients = [prompt('Let\`s make pasta! Ingredient 1?'), prompt('Ingredient 2?'), prompt('Ingredient 3?')];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// Objects
// const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Del Piero'};
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'La Vecchia';
// console.log(restaurant);
// console.log(restaurantCopy);

// // Coding challenge #1
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//   [
//   'Neuer',
//   'Pavard',
//   'Martinez',
//   'Alaba',
//   'Davies',
//   'Kimmich',
//   'Goretzka',
//   'Coman',
//   'Muller',
//   'Gnarby',
//   'Lewandowski',
//   ],
//   [
//   'Burki',
//   'Schulz',
//   'Hummels',
//   'Akanji',
//   'Hakimi',
//   'Weigl',
//   'Witsel',
//   'Hazard',
//   'Brandt',
//   'Sancho',
//   'Gotze',
//   ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
//   'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// 1
// const [players1, players2] = game.players;
// console.log(players1);
// console.log(players2);

// 2
// const [gk, ...fieldPlayers] = players1;
// console.log(gk);
// console.log(fieldPlayers);

// 3
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// 4
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// 5
// const {team1, x: draw, team2} = game.odds;
// console.log(team1);
// console.log(draw);
// console.log(team2);

// 6
// const printGoals = function(...scorers) {
//   console.log(scorers);
//   console.log(scorers.length);
// };
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// 7
// console.log((team1 < team2 && 'Team 1 will win') || 'Team 2 will win');

// Coding challenge #2
// 1
// for (const [key, value] of game.scored.entries()) {
//   console.log(`Goal ${key + 1}: ${value}`);
// }

// 2
// let totalOdds = 0;
// const oddsArray = Object.values(game.odds);
// for (const value of oddsArray) {
//   totalOdds += value;
// }
// console.log(totalOdds / oddsArray.length);

// 3
// for (const value of Object.entries(game.odds)) {
//   const result = game[value[0]] ?? 'draw';
//   console.log(`Odd of ${result}: ${value[1]}`);
// }

//4
// const scorers = {}
// for (const value of Object.entries(game.scored)) {
//   if (scorers[value[1]]) {
//     scorers[value[1]] += 1
//   } else {
//     scorers[value[1]] = 1
//   }
// }
// console.log(scorers);

// Sets
// const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
// console.log(ordersSet);

// console.log(new Set('Jonas'));

// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto')
// // ordersSet.clear();
// console.log(ordersSet);

// for (const order of ordersSet) {
//   console.log(order);
// }

// // Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set(staff).size);

// Maps
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy')
// console.log(rest.set(2, 'Lisbon, Portugal'));
// rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open', 11).set('close', 23).set(true, 'We are open').set(false, 'We are closed');
// console.log(rest);

// console.log(rest.get('name'));
// console.log(rest.get(true));

// const time = 21;
// console.log(rest.get(time < rest.get('close') && time > rest.get('open')));

// console.log(rest.has('categories'));
// rest.delete(2);
// const keyArray = [1,2];
// rest.set(keyArray, 'Test');
// rest.set([1,3], 'Test');
// rest.set(document.querySelector('h1'), 'Heading')

// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(keyArray)); // will work
// console.log(rest.get([1,3])); // will not work

// const question = new Map([
//   ['question', 'what is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct!'],
//   [false, 'Try again']
// ]);

// console.log(question);

// // convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }
// // const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(answer);
// console.log(question.get(answer === question.get('correct')));

// // conver map to array
// console.log([...question]);

// console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

// Coding challenge #3
// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// // 1
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3
// console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);

// // 4
// for (const [min, event] of gameEvents) {
//   const half = min < 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${min}: ${event}`);
// }

// Strings
const airline = 'TAP Air Portugal';
// const plane = 'A320';
// console.log(plane[0]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));
// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function(seat) {
//   // B & E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log(seat, 'You got the middle seat');
//   } else {
//     console.log(seat, 'You got lucky!');
//   }
// }
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// // Fix capitalization in name
// const passenger = 'JOnAS'; // Jonas
// const lowerPassenger = passenger.toLowerCase();
// const passengerCorrect = lowerPassenger[0].toUpperCase() + lowerPassenger.slice(1);
// console.log(passengerCorrect);

// // Compare emails
// const email = 'hello@jonas.io';
// const loginEmail = '  Hello@Jonas.Io \n';

// const normalizeEmail = loginEmail.toLowerCase().trim();
// console.log(normalizeEmail);
// console.log(email === normalizeEmail);

// // Replacing
// const priceGB = '288,97e';
// const priceUS = priceGB.replace('e', '$').replace(',', '.');
// console.log(priceUS);

// const announcment = 'All passengers come to boarding door 23. Boarding door 23!';
// console.log(announcment.replace('door', 'gate'));
// console.log(announcment.replaceAll('door', 'gate'));
// console.log(announcment.replace(/door/g, 'gate'));

// // Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Air'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the new Airbus family');
// }

// // Practice exercise
// const checkBaggage = function(items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are not allowed to board the plane');
//   } else {
//     console.log('Welcome aboard');
//   }
// };
// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks & camera');
// checkBaggage('Snacks & gun for protection');

// split & join
// console.log('a+very+nice+string'.split('+'));
// console.log('Hassan Elsayed'.split(' '));

// const [firstName, lastName] = 'Hassan Elsayed'.split(' ');
// console.log(firstName);
// console.log(lastName);

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function(name) {
//   const namesArray = name.split(' ');
//   const namesUpper = [];
//   for (const n of namesArray) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
//   }
//   console.log(namesUpper.join(' '));
//   console.log(namesUpper);
// }

// const passeneger = 'jessica ann smith davis';
// capitalizeName(passeneger);
// capitalizeName('hassan mohd elsayed');

// // Padding a string
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+').padEnd(35, '+'));
// console.log('Jonas'.padStart(25, '+'));

// const maskCreditCard = function(number) {
//   const str = number + '';
//   console.log(str.slice(-4).padStart(str.length, '*'));
// }

// maskCreditCard(1234567891);
// maskCreditCard('1223856451');

// // Repeat method
// const message2 = 'Bad weather... All departures delayed... ';
// console.log(message2.repeat(5));

// const planesInLine = function(n) {
//   console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
// }

// planesInLine(5);
// planesInLine(3);
// planesInLine(12);

// // Concat method
// const str1 = 'Hello';
// const str2 = 'World';

// console.log(str1.concat(' ', str2));
// // Expected output: "Hello World"

// console.log(str2.concat(', ', str1));
// // Expected output: "World, Hello"

// // Coding Challenge #4
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
// const button = document.querySelector('button');
// button.addEventListener('click', function(){
//   const text = document.querySelector('textarea').value;
//   const textArray = text.split('\n');
//   for (const [i, variable] of textArray.entries()) {
//     const [variable1, variable2] = variable.toLowerCase().trim().split('_');
//     const camelCaseVariable = variable1.concat('', variable2.replace(variable2[0], variable2[0].toUpperCase()));
//     console.log(camelCaseVariable.padEnd(20, ' '), '✅'.repeat(i+1));
//   }
// });

// // String methods practice
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const flightsArray = flights.split('+');
// for (const flight of flightsArray) {
//   let [variable, from, to, time] = flight.split(';');
//   variable = variable.replaceAll('_', ' ').trim();
//   variable = variable.toLowerCase().startsWith('delayed') ? `🔴 ${variable}` : variable;
//   from = `from ${from.slice(0, 3).toUpperCase()}`;
//   to = `to ${to.slice(0, 3).toUpperCase()}`;
//   time = `(${time.replace(':', 'h')})`;
//   console.log(`${variable} ${from} ${to} ${time}`.padStart(50));
// }
