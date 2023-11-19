// Exporting module
console.log('Exporting Module');

// Blocking code
// console.log('Start fetching users');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finish fetching');

const shippingCost = 10;
export const cart = [];

export const addToCart = function(product, quanity) {
    cart.push({product, quanity});
    console.log(`${quanity} ${product} added to the cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as qt };

export default function(product, quanity) {
    cart.push({product, quanity});
    console.log(`${quanity} ${product} added to the cart`);
};