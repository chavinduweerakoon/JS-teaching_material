//outline
//creating objects
//factories and constructors
//primitive and refernce types
//workking with properties
//private properties
//getter/setters

//object literals
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log("draw"); //3 members - 2 properties , 1 method
  },
};
circle.draw();
// to overcome issues with objects with behviour -> factory functions and constructors come to play
//factory function
function createCircle(radius) {
  return {
    radius: radius,
    draw: function () {
      console.log("draw");
    },
  };
}
const circle = createCircle(4);
circle.draw();

//constrcutor functions
function CreateCircle(radius) {
  //console.log('this', this); -> if this function is running in a browser - global object is window object / in a node env - global object is global
  //with new operator -> empty {} and maps to Createcircle
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const another = new CreateCircle(1);
// values vs reference types

let number = 10; //primitives copide by their value
function increase(number) {
  number++;
}
increase(number);
console.log(number); //output -10

//---------------
let obj = { value: 10 }; //objects are copied by their refernce
function increasae(obj) {
  obj.value++;
}
increase(obj);
console.log(obj); //output =11

//dynamic -add or remove properties
function Demo(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Demo(1);
//dot notation
circle.location = { x: 1 };
//bracket notation
circle["location"] = { x: 1 };

//enumerating all the members
for (let key in circle) {
  console.log(key, circle[key]);
}

//without functuions
for (let key in circle) {
  if (typeof circle[key] !== "function") console.log(key, circle[key]);
}
//another appraoch to get all the keys
const keys = Object.keys(circle);
console.log(keys);

//check for the existence a propery or function
if ("radius" in circle) {
  console.log("circle has a radius");
}

////////////////// ABSTRACTION ///////////////////////////////////////////////////////////////////////////////////
//discussion - private members // closure concept
function CircleNew(radius) {
  this.radius = radius;
  let defaultLocation = { x: 0, y: 0 }; //private members
  let computeOptimumLocation = function (factor) {
    //..
  };
  this.draw = function () {
    computeOptimumLocation();
    console.log("draw");
  };
}

const circletest = new CircleNew(10);
circletest.draw();

////getters and setters
function CircleDemo(radius) {
  this.radius = radius;
  let defaultLocation = { x: 0, y: 0 };

  //   this.getDefaultLocation = function () {
  //     return defaultLocation;
  //   };

  this.draw = function () {
    computeOptimumLocation();
    console.log("draw");
  };
  //to get and set defaulLocation pricate member
  Object.defineProperties(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) {
        throw new Error("Invalid location.");
      }
      defaultLocation = value;
    },
  });
}

const demotest = new CircleDemo(10);
demotest.draw();
demotest.getDefaultLocation();
