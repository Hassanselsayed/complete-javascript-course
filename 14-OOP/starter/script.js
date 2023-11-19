'use strict';

// const Person = function(firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never create a method inside a constructor function
//   // this.calcAge = function() {
//   //   console.log(2037 - this.birthYear);
//   // }
// };

// const hassan = new Person('Hassan', 1993);
// console.log(hassan);

// const alaa = new Person('Alaa', 1993);
// const mostafa = new Person('Mostafa', 1986);
// console.log(alaa);
// console.log(mostafa);

// const jay = 'Jay';

// console.log(hassan instanceof Person);
// console.log(jay instanceof Person);

// // Prototypes
// console.log(Person.prototype);
// Person.prototype.calcAge = function() {
//   console.log(2037 - this.birthYear);
// };

// hassan.calcAge();
// mostafa.calcAge();

// console.log(hassan.__proto__);
// console.log(hassan.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(hassan));

// Person.prototype.species = 'Homo Sapiens';
// console.log(hassan.species, alaa.species);

// console.log(hassan.hasOwnProperty('firstName'));
// console.log(hassan.hasOwnProperty('species'));

// console.log(hassan.__proto__);
// console.log(hassan.__proto__.__proto__);
// console.log(hassan.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3,5,6,8,3,4,5,6,8]; // new Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);

// // Not a good practice
// Array.prototype.unique = function() {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(h1);
// console.dir(x=> x+ 1);

// // Coding challenge #1
// const Car = function(make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.logSpeed = function() {
//   console.log(`${this.make} going at ${this.speed}km/h`);
// };

// Car.prototype.accelerate = function() {
//   this.speed += 10;
//   this.logSpeed();
// };

// Car.prototype.brake = function() {
//   this.speed -= 5;
//   this.logSpeed();
// };

// const bmw = new Car('BMW', 100);
// const mercedes = new Car('Mercedes', 100);

// bmw.accelerate();
// bmw.brake();
// bmw.brake();
// bmw.accelerate();
// bmw.accelerate();
// mercedes.brake();

// ES6 Classes
// class expression
// const PersonCl = class {};

// // class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   };

//   // Instance methods: Methods will be added to the .prototype property of this class
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   };

//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   };

//   get age() {
//     return 2037 - this.birthYear;
//   };

//   // Set a property that already exists
//   set fullName(name) {
//     if(name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`)
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // static method
//   static hey() {
//     console.log('Hey there!');
//     console.log(this);
//   }
// };

// const jessica = new PersonCl('Jessica Davis', 1980);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);
// console.log(jessica.__proto__ === PersonCl.prototype);

// // PersonCl.prototype.greet = function() {
// //   console.log(`Hey ${this.firstName}`);
// // };
// jessica.greet();

// const walter = new PersonCl('Walter White', 1965);

// // Setters & Getters
// const account = {
//   owner: 'Hassan',
//   movements: [200, 50, 300, 20],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   }
// };

// console.log(account.latest); // getter

// account.latest = 50;
// console.log(account.movements);

// // Static methods
// Person.hey = function() {
//   console.log('Hey there!');
//   console.log(this);
// };

// Person.hey(); // Calls the hey method
// PersonCl.hey();

// // Object.create
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();

// // Coding challenge #2
// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   };

//   logSpeed() {
//     console.log(`${this.make} going at ${this.speed}km/h`);
//   };

//   accelerate() {
//     this.speed += 10;
//     this.logSpeed();
//   };

//   brake() {
//     this.speed -= 5;
//     this.logSpeed();
//   };

//   get speedUS() {
//     return this.speed / 1.6;
//   };

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   };
// };

// const ford = new CarCl('Ford', 120);
// ford.logSpeed();
// console.log(ford);

// console.log(ford.speedUS);
// ford.speedUS = 65;
// console.log(ford);

// Class Inheritance: ConFun
// const Student = function(firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear); // we want the this keyword inside Person ConFun to be the this keyword inside Student ConFun
//   this.course = course;
// };

// // Linking prototypes
// Student.prototype = Object.create(Person.prototype); // this returns an empty object, so it should be done before adding anything to the student.prototype object

// // Student.prototype = Person.prototype --> this makes Student.prototype reference Person.prototype, making Person.prototype effectivaly the prototype of the Mike object, which we don't want

// Student.prototype.introduce = function() {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'CS');
// mike.introduce();
// console.log(mike);
// mike.calcAge();

// console.log(mike.__proto__); // Student.prototype
// console.log(mike.__proto__.__proto__); // Person.prototype
// console.log(mike.__proto__.__proto__.__proto__); // Object.prototype
// console.log(mike.__proto__.__proto__.__proto__.__proto__); // null

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

// // Coding challenge #3
// const Car = function(make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.logSpeed = function() {
//   console.log(`${this.make} going at ${this.speed}km/h`);
// };

// Car.prototype.accelerate = function() {
//   this.speed += 10;
//   this.logSpeed();
// };

// Car.prototype.brake = function() {
//   this.speed -= 5;
//   this.logSpeed();
// };

// const EV = function(make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);
// EV.prototype.chargeBattery = function(chargeTo) {
//   this.charge = chargeTo;
// };

// // this next method works because of polymorphism
// EV.prototype.accelerate = function() {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(`${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}`);
// };

// const tesla = new EV('Tesla', 120, 23);
// console.log(tesla);
// tesla.accelerate();
// console.log(tesla);
// tesla.brake();
// console.log(tesla);
// tesla.accelerate();
// console.log(tesla);
// tesla.chargeBattery(40);
// console.log(tesla);


// // Class Inheritance: Classes
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   };

//   // Instance methods: Methods will be added to the .prototype property of this class
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   };

//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   };

//   get age() {
//     return 2037 - this.birthYear;
//   };

//   // Set a property that already exists
//   set fullName(name) {
//     if(name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`)
//   };

//   get fullName() {
//     return this._fullName;
//   };

//   // static method
//   static hey() {
//     console.log('Hey there!');
//     console.log(this);
//   };
// };

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // Always needs to happen first, because the super function is respinsible for creating the this keyword in the sub-class
//     super(fullName, birthYear);
//     this.course = course;
//   };

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   };
  
//   calcAge() {
//     console.log(`I am ${2037 - this.birthYear} years old, but as a student I feel more like ${2037 - this.birthYear + 10 }`);
//   };
// }

// const martha = new StudentCl('Martha Jones', 2012, 'CS');
// martha.introduce();
// martha.calcAge();

// // Class Inheritance: Object.create
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function(firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function() {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'CS');
// jay.introduce();
// jay.calcAge();

// // Another class example
// class Account {
//   // Public Feilds
//   locale = navigator.language;
  
//   // Private Feilds
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin;
//     // protected property
//     // this._movements = [];
//     // this.locale = navigator.language;

//     console.log(`Thanks for opening an account, ${this.owner}`);
//   }

//   // Public methods OR
//   // API --> Public Interface of our object
//   getMovements() {
//     return this.#movements;
//   }

//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//   }

//   withdraw(val) {
//     this.deposit(-val);
//     return this;
//   }

//   requestLoan(val) {
//     if (this.#approveLoan(val)) {
//       this.deposit(val);
//       console.log('Loan approved');
//       return this;
//     }
//   }

//   static helper() {
//     console.log('Helper', this);
//   }

//   // Private methods
//   #approveLoan(val) {
//     return true
//   }
// }

// const acc1 = new Account('Hassan', 'EUR', 1111);

// // acc1.movements.push(250);
// // acc1.movements.push(-140);
// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);
// console.log(acc1);
// console.log(acc1.getMovements());

// // console.log(acc1.#movements);
// // console.log(acc1.#pin);
// // acc1.#approveLoan(1000);

// Account.helper();


// // Chaining methods
// acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
// console.log(acc1.getMovements());

// Coding challenge #4
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  };

  logSpeed() {
    console.log(`${this.make} going at ${this.speed}km/h`);
  };

  accelerate() {
    this.speed += 10;
    this.logSpeed();
  };

  brake() {
    this.speed -= 5;
    this.logSpeed();
    return this;
  };

  get speedUS() {
    return this.speed / 1.6;
  };

  set speedUS(speed) {
    this.speed = speed * 1.6;
  };
};

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`${this.make} going at ${this.speed}km/h, with a charge of ${this.#charge}`);
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(`${this.make} going at ${this.speed}km/h, with a charge of ${this.#charge}`);
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);

rivian.accelerate().chargeBattery(40).brake().accelerate().brake();
