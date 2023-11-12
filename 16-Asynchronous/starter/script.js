'use strict';

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// const renderCountry = function(data, className = '') {
//   const html = `
//     <article class="country ${className}">
//       <img class="country__img" src="${data.flags.png}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name.common}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} Million</p>
//         <p class="country__row"><span>🗣️</span>${Object.values(data.languages)}</p>
//         <p class="country__row"><span>💰</span>${Object.values(Object.keys(data.currencies))}</p>
//       </div>
//     </article>
//   `
//   countriesContainer.insertAdjacentHTML('beforeend', html);
// };

// const renderError = function(msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
// };

///////////////////////////////////////
// const getCountryData = function(country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
  
//   request.addEventListener('load', function() {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
  
//     const html = `
//       <article class="country">
//         <img class="country__img" src="${data.flags.png}" />
//         <div class="country__data">
//           <h3 class="country__name">${data.name.common}</h3>
//           <h4 class="country__region">${data.region}</h4>
//           <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} Million</p>
//           <p class="country__row"><span>🗣️</span>${Object.values(data.languages)}</p>
//           <p class="country__row"><span>💰</span>${Object.values(Object.keys(data.currencies))}</p>
//         </div>
//       </article>
//     `
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('egypt');
// getCountryData('libya');
// getCountryData('iraq');

// const getCountryAndNeighbour = function(country) {
//   // AJAX acall country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
  
//   request.addEventListener('load', function() {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render country 1
//     renderCountry(data);

//     // Get neighbour country (2)
//     const neighbour = data.borders[0] === 'ISR' ? data.borders[1] : data.borders[0];
    
//     if (!neighbour) return;

//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();
    
//     request2.addEventListener('load', function() {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2, 'neighbour');

//       renderCountry(data2, 'neighbour');
//     })
//   });
// };

// getCountryAndNeighbour('egypt');

  // const request = new XMLHttpRequest();
  // request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  // request.send();

  // const request = fetch('https://restcountries.com/v3.1/name/egypt');
  // console.log(request);
  
  
  // const getCountryData = function(country) {
  //   fetch(`https://restcountries.com/v3.1/name/${country}`)
  //     .then(function(response) {
  //       console.log(response);
  //       return response.json();
  //     })
  //     .then(function(data) {
  //       console.log(data);
  //       renderCountry(data[0]);
  //     })
  // };

  // const getCountryData = function(country) {
  //   fetch(`https://restcountries.com/v3.1/name/${country}`)
  //     .then(response => {

  //       if (!response.ok) {
  //         throw new Error('Country not found');
  //       }
  //       return response.json()
  //     })
  //     .then(data => {
  //       renderCountry(data[0]);
  //       const neighbour = data[0].borders?.[1];
  //       if (!neighbour) throw new Error('No neighbour found');

  //       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
  //     })
  //     .then(response => {

  //       if (!response.ok) {
  //         throw new Error('Country not found')
  //       }
  //       return response.json()
  //     })
  //     .then(data => renderCountry(data[0], 'neighbour'))
  //     .catch(err => {
  //       console.error(`${err}`);
  //       renderError(`Something went wrong ${err.message}. Try again!`)
  //     })
  //     .finally(() => {
  //       countriesContainer.style.opacity = 1;
  //     });
  // };

  // btn.addEventListener('click', function() {
  //   getCountryData('egypt');
  // });
  
  // getCountryData('egypt');
  // // we should create a helper function to take care of all the duplicate code


//   // Coding challenge #1
// const whereAmI = function(lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=123490483069106e15888221x102008`)
//   .then(response => {
//     console.log(response);
//     if (!response.ok) {
//       throw new Error('Slow down')
//     }
//     return response.json()
//   })
//   .then(data => {
//     getCountryData(data.country);
//     console.log(`You are in ${data.city}, ${data.country}`)
//   })
//   .catch(err => console.log(err));
// };

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// console.log('Test start');
// setTimeout(() => {
//   console.log('0 sec timer');
// }, 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));

// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 1000000000; i++) {};
//   console.log(res);
// })
// console.log('Test end');

// // Building a promise
// // Promise constructor takes in an executor functions
// const lotteryPromise = new Promise(function(resolve, reject) {
//   console.log('Lottery draw is happening!');
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN the lottery!!!');
//     } else {
//       reject(new Error('You lost your money :D'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// // Promisifying settimeout
// const wait = function(seconds) {
//   return new Promise(function(resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(1)
//   .then(() => {
//     console.log('1 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 seconds passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 seconds passed');
//     return wait(1);
//   })
//   .then(() => console.log('4 seconds passed'));

//   Promise.resolve('You win!!').then(x => console.log(x));
//   Promise.reject('You lose!!').catch(x => console.error(x));


// const getPosition = function() {
//   return new Promise(function(resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition()
//   .then(pos => console.log(pos))
//   .catch(err => console.error(err));

// const whereAmI = function() {
//   getPosition().then(pos => {
//     const {latitude: lat,longitude: lng} = pos.coords
//     return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=123490483069106e15888221x102008`)
//   })
//   .then(response => {
//     console.log(response);
//     if (!response.ok) {
//       throw new Error('Slow down')
//     }
//     return response.json()
//   })
//   .then(data => {
//     getCountryData(data.country);
//     console.log(`You are in ${data.city}, ${data.country}`)
//   })
//   .catch(err => console.log(err));
// };

// btn.addEventListener('click', whereAmI);

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// Coding challenge #2
// const wait = function(seconds) {
//   return new Promise(function(resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const createImage = function(imgPath) {
//   return new Promise(function(resolve, reject) {
//     const img = document.createElement('img');
//     img.setAttribute("src", imgPath);
//     img.addEventListener('load', function() {
//       document.getElementsByClassName('images')[0].append(img);
//       resolve(img);
//     });
//     img.addEventListener('error', function() {
//       reject(new Error('Image not found!'));
//     });
//   });
// };
// let currentImage;
// createImage('./img/img-1.jpg')
//   .then(img => {
//     currentImage = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//     return createImage('./img/img-2.jpg')
//   })
//   .then(img2 => {
//     currentImage = img2;
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//   })
//   .catch(err => console.error(err));

// Async/Await
// const getPosition = function() {
//   return new Promise(function(resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
// const whereAmI = async function(country) {
//   try {  
//     // Country data
//     const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
//     if (!res.ok) throw new Error('Problem getting country');
//     const data = await res.json();
//     renderCountry(data[0]);
    
//     return `You are in ${data[0].capital[0]}, ${country}`;
//   } catch(err) {
//     console.log(err);
//     renderError(err.message);

//     // Reject promise returned from async function
//     throw err;
//   }
// };

// console.log('1: Will get location');
// const city = whereAmI('egypt');
// console.log(city);
// whereAmI('egypt')
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message}`))
//   .finally(() => console.log('3: Finished getting location'));

// (async function() {
//   try {
//     const city = await whereAmI('egypt');
//     console.log(`2: ${city}`);
//   } catch(err) {
//     console.error(`2: ${err.message}`)
//   }
//   console.log('3: Finished getting location')
// })();

// try {
//   let y = 1;
//   const x = 2;
//   y = 3;
// } catch(err) {
//   alert(err.message);
// }

// const new = 'a7a';
// console.log(new);

// Running promises in parallel
const getJSON = function(url, errorMsg = 'Something went wrong') {
  return fetch(url).then(res => {
    if (!res.ok) throw new Error(`${errorMsg} ${res.status}`);

    return res.json();
  })
}

// const get3Countries = async function(c1, c2, c3) {
//   try {
//     // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`)
//     // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`)
//     // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`)
//     // console.log([data1.capital[0], data2.capital[0], data3.capital[0]]);

//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v3.1/name/${c1}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c2}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c3}`)
//     ])

//     console.log(data.map(d => d[0].capital[0]));
//   } catch(err) {
//     console.error(err);
//   }
// }

// get3Countries('egypt', 'palestine', 'libya');

// Promise.race
// (async function () {
//   const res = await Promise.race([
//     getJSON('https://restcountries.com/v3.1/name/egypt'),
//     getJSON(`https://restcountries.com/v3.1/name/libya`),
//     getJSON(`https://restcountries.com/v3.1/name/palestine`)
//   ]);
//   console.log(res[0]);
// })();

// const timeout = function(sec) {
//   return new Promise(function(_, reject) {
//     setTimeout(() => {
//       reject(new Error('request took too long!'));
//     }, sec);
//   });
// };

// Promise.race([
//   getJSON('https://restcountries.com/v3.1/name/egypt'),
//   timeout(100)
// ]).then(res => console.log(res[0])).catch(err => console.error(err));

// Promise.allSettled
// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.reject('Failed'),
//   Promise.resolve('Another success'),
//   Promise.reject('Failed'),
// ]).then(res => console.log(res));

// Promise.all([
//   Promise.resolve('Success'),
//   Promise.reject('Failed'),
//   Promise.resolve('Another success'),
//   Promise.reject('Failed'),
// ]).then(res => console.log(res)).catch(err => console.error(err));

// Promise.any [ES2021]
// Promise.any([
//   Promise.reject('Failed'),
//   Promise.resolve('Success')
// ]).then(res => console.log(res)).catch(err => console.error(err));

// Coding challenge #3
const wait = function(seconds) {
  return new Promise(function(resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function(imgPath) {
  return new Promise(function(resolve, reject) {
    const img = document.createElement('img');
    img.setAttribute("src", imgPath);
    img.addEventListener('load', function() {
      document.getElementsByClassName('images')[0].append(img);
      resolve(img);
    });
    img.addEventListener('error', function() {
      reject(new Error('Image not found!'));
    });
  });
};

const loadNPause = async function() {
  try {
    // load iamge 1
    let img = await createImage('img/img-1.jpg');
    console.log('Image 1 loaded');
    await wait(2);
    img.style.display = 'none';
    
    // load iamge 2
    img = await createImage('img/img-1.jpg');
    console.log('Image 2 loaded');
    await wait(2);
    img.style.display = 'none';

  } catch(err) {
    console.error(err);
  }
};
loadNPause();

const loadAll = async function(imgArr) {
  const imgs = await Promise.all(imgArr.map(async img => await createImage(img)));
  console.log(imgs);

  imgs.forEach(img => img.classList.add('parallel'));
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
