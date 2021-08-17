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
