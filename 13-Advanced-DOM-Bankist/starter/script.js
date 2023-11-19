'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

// Modal
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Button Scrolling
btnScrollTo.addEventListener('click', (e) => {
  const s1coords = section1.getBoundingClientRect();
  section1.scrollIntoView({
    behavior: 'smooth'
  });
});

// Page Navigation
// WITHOUT Event Delegation
// document.querySelectorAll('.nav__link').forEach((el) => {
//   el.addEventListener('click', function(e) {
//     e.preventDefault();
    
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth'
//     });
//   });
// });

// WITH Event Delegation
document.querySelector('.nav__links').addEventListener('click', function(e) {
  e.preventDefault();
  
  // Matching strategy
  if (e.target.classList.contains('nav__link')) {  
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    });
  }
});

// Tabbed component
tabsContainer.addEventListener('click', function(e) {
  e.preventDefault();
  const clicked = e.target.closest('.operations__tab');
  
  // Guard clause
  if (!clicked) return;
  
  // Active tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');
  
  // Activate content area
  tabsContent.forEach(t => t.classList.remove('operations__content--active'));
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});

// Menu fade animation
const handleHover = function(e) {
  const link = e.target;
  if(link.classList.contains('nav__link')) {
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// Sticky nav bar
// const initialCoords = section1.getBoundingClientRect();
// window.addEventListener('scroll', function() {
//   if (window.scrollY >= initialCoords.top) nav.classList.add('sticky');
//     else nav.classList.remove('sticky');
// });

// Intersection Observer API
// const observerCallback = function(entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   })
// };
// const observerOptions = {
//   root: null, // observer target intersecting viewport
//   threshold: [0, 0.2], // how much of the target element intersects with the root,
//   rootMargin: '-90px' // function will be called exactly 90px BEFORE the intersection occurs
// };
// const observer = new IntersectionObserver(observerCallback, observerOptions);
// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function(entries) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    nav.classList.remove('sticky');
  } else {
    nav.classList.add('sticky');
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`
});
headerObserver.observe(header);

// Reveal sections
const allSections = document.querySelectorAll('.section')
const revealSection = function(entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15
});

allSections.forEach(function(section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

// Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function(entries, observer) {
  const [entry] = entries;

  if(!entry.isIntersecting) return;
  console.log(entry);
  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function() {
    entry.target.classList.remove('lazy-img')
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
root: null,
threshold: 0,
rootMargin: '200px'
});

imgTargets.forEach(img => imgObserver.observe(img));

// Slider
const slider = function() {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  
  const dotContainer = document.querySelector('.dots');
  
  let currentSlide = 0;
  const maxSlide = slides.length;
  
  // Functions
  const createDots = function() {
    slides.forEach(function(_, i) {
      dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`);
    });
  };
  
  const activateDot = function(slide) {
    document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));
    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active')
  };
  
  const goToSlide = function(slide) {
    slides.forEach((s, i) => s.style.transform = `translateX(${(i - slide)*100}%)`);
  };
  
  
  // Next slide
  const nextSlide = function() {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0
    } else {
      currentSlide++;
    }
    goToSlide(currentSlide);
    activateDot(currentSlide);
  };
  
  // Previous Slide
  const prevSlide = function() {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1
    } else {
      currentSlide--;
    }
    goToSlide(currentSlide);
    activateDot(currentSlide);
  };
  
  const init = function() {
    createDots();
    goToSlide(0);
    activateDot(0);
  };
  init();
  
  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);
  
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  });
  
  dotContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};

slider();

// // Selecting Elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

// // Creating and inserting elements
// // .insertAdjacentHTML
// const message = document.createElement('div'); // not in the DOM yet
// message.classList.add('cookie-message');
// // message.textContent = 'We use cookies for improved functionality & analytics.';
// message.innerHTML = 'We use cookies for improved functionality & analytics. <button class="btn btn--close-cookie">Got it!</button>';
// const header = document.querySelector('.header');
// // header.prepend(message); // now message element is in the DOM - added as the first child to the header
// header.append(message); // added as the last child to the header
// // header.append(message.cloneNode(true));

// // header.before(message) // inserts/moves message before header (as a sibling)
// // header.after(message) // inserts/moves message after header (as a sibling)
 
// // Delete elements
// document.querySelector('.btn--close-cookie').addEventListener('click', () => {
//   message.remove();
// });

// // styles, attributes and classes
// message.style.backgroundColor = '#37383d';
// message.style.width = '100vw';

// console.log(message.style.height);
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);
// message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src); // gets absolute URL
// console.log(logo.getAttribute('src')); // get relative URL
// // same is true for href on anchor tags as src on image
// console.log(logo.className);

// logo.alt = 'Beatiful minimalist logo';

// console.log(logo.designer); // non-standard attribute, so gives undefined
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Bankist');

// // data attributes
// console.log(logo.dataset.versionNumber);

// // classes
// logo.classList.add('c');
// logo.classList.remove('c');
// logo.classList.toggle('c');
// logo.classList.contains('c');

// // Don't use
// logo.className = 'Hassan';

// // Smooth scrolling
// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', (e) => {
//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords);
//   console.log(e.target.getBoundingClientRect());
//   console.log('Current scroll (x/y)', window.scrollX, window.scrollY);
//   console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

//   // scrolling
//   // window.scrollTo(s1coords.left + window.scrollX, s1coords.top + window.scrollY);
//   // window.scrollTo({
//   //   left: s1coords.left + window.scrollX,
//   //   top: s1coords.top + window.scrollY,
//   //   behavior: 'smooth'
//   // });

//   section1.scrollIntoView({
//     behavior: 'smooth'
//   });
// });

// // Events
// const h1 = document.querySelector('h1');

// const alertH1 = function(e) {
//   alert('addEventListener: Great! You are reading the heading :D');

//   // h1.removeEventListener('mouseenter', alertH1);
// };

// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => {
//   h1.removeEventListener('mouseenter', alertH1);
// }, 3000);

// h1.onmouseenter = function(e) {
//   alert('onmouseenter: Great! You are reading the heading :D');
// };

// // Event Propagation
// const randomInt = (min,max) => Math.floor(Math.random() * (max-min+1) + min);
// const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget, e.currentTarget === e.target);
//   console.log(e.currentTarget === this);

//   // Stop propagation
//   // e.stopPropagation();
// });
// document.querySelector('.nav__links').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINKS CONTAINER', e.target, e.currentTarget, e.currentTarget === e.target);
//   console.log(e.currentTarget === this);
// });
// document.querySelector('.nav').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget, e.currentTarget === e.target);
//   console.log(e.currentTarget === this);
// });

// // DOM traversing
// const h1 = document.querySelector('h1');
// // going downwards: child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white'
// h1.lastElementChild.style.color = 'blue'

// // going upwards: parent
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// // going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function(el) {
//   if (el !== h1) {
//     el.style.transform = 'scale(0.5)'
//   }
// });

// // Lifecycle
// document.addEventListener('DOMContentLoaded', function(e) {
//   console.log('HTML parsed & DOM tree buildt', e);
// });

// window.addEventListener('load', function(e) {
//   console.log('Page is loaded', e);
// });

// window.addEventListener('beforeunload', function(e) {
//   e.preventDefault();
//   console.log('User is leaving page', e);
//   e.returnValue = '';
// });

// defer and async

