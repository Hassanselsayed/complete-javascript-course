// Importing module
// import { addToCart, totalPrice as price, qt } from "./shoppingCart.js";
// console.log('Importing Module');
// addToCart('apples', 23);
// console.log(price, qt);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice, ShoppingCart.qt);

// Not desirable to mix default and named exports
// import add, { addToCart, totalPrice as price, qt }  from './shoppingCart.js'
// add('apples', 10);
// console.log(price);

import add, { cart } from './shoppingCart.js';
add('apples', 10);
add('pizza', 2);
add('bread', 5);
console.log(cart);

// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

// const getLastPost = async function() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await res.json();
//     console.log(data);
//     return {title: data.at(-1).title, text: data.at(-1).body}
// }

// const lastPost = getLastPost();
// console.log(lastPost);
// Not very clean
// lastPost.then(last => console.log(last));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// The module pattern
// This works because of closure (methods have access to variables that were present in their birthplace)
// const ShoppingCart2 = (function() {
//     const cart = [];
//     const shippingCost = 10;
//     const totalPrice = 237;
//     const totalQuantity = 23;
//     const addToCart = function(product, quanity) {
//       cart.push({product, quanity});
//       console.log(`${quanity} ${product} added to the cart`);
//       console.log(`shipping cost is: ${shippingCost}`);
//     };
//     const orderStock = function(product, quanity) {
//       console.log(`${quanity} ${product} ordered from supplier`);
//     };

//     return {
//       addToCart,
//       cart,
//       totalPrice,
//       totalQuantity
//     }
// })();

// ShoppingCart2.addToCart('apple', 4);
// ShoppingCart2.addToCart('pizza', 2);
// console.log(ShoppingCart2);
// console.log(ShoppingCart2.shippingCost); // undefined

// Without bundler
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
// With bundler
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    {product: 'bread', quantity: 5},
    {product: 'pizza', quantity: 5}
  ],
  user: {loggedIn: true}
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}
const hassan = new Person('Hassan');

console.log('Hassan' ?? null);


console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

import 'core-js/stable';
// import 'core-js/stable/array/find';

// polyfilling async functions
import 'regenerator-runtime/runtime.js';
