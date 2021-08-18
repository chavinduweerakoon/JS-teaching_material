const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 2,
  },
  isVisible: true,
  //method in OOP
  draw: function () {
    console.log("draw");
  },
  getDiameter: function () {
    console.log("demo diameter");
  },
};

circle.getDiameter();

//factory functions - camel notation - oneTwoThrreFour

function createCircle(radius) {
  return {
    radius: radius,
    draw: function () {
      console.log("draw"); //reusability // logic isolation
    },
  };
}

const circleCopy = createCircle(10);
console.log(circleCopy);

//constructor functions / pascal notation - OneTwoThrreFour

function Circle(radius) {
  //using 'this' keyword for empty object reference
  this.radius = radius;
  this.draw = function () {
    console.log("darw");
  };
}
const circle = new Circle(1);

//dynmic nature of objects
const circle = {
  //avoid reassigning the object with using const
  readius: 1,
};

circle.color = "yellow";
circle.create = function () {};

delete circle.color;
delete circle.draw;

console.log(circle);

//values vs reference types

//value types - number ,string ,boolean , symbol ,undefined , null
//reference type - object , function , array

// primitives - vopy by thier values
//objects -- through their reference

//objects are not iterBLE
