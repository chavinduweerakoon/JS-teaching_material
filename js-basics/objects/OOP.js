//oop -  programming paradigm based on objects rather than functions
//core pillars - Encapsulation / abstraction / inheritance / polymorphism
// objects = properties + methods
// relaworl eg - localstroage objects -> properties -> length , methods -> getItem() / setItem ()

//ENCAPSULATION - realted methods and properties together ________________________________________________________________________________________________
//eg - Procedural programming /
let baseSalary = 30000;
let overtime = 30;
let rate = 20;

function getwage(baseSalary, overtime, rate) {
  //so many parameters
  return baseSalary + overtime * rate;
}
//oop coversion (no parameters as they are modeled as properties) //less paramters -easy to maintain //usability //reduce complexity
let employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,
  getwage: function () {
    return this.baseSalary + this.overtime * this.rate;
  },
};
employee.getwage();

//ABSTRACTION_______________________________________________________________________________________________________________________
//eg - dvdplayer
//simpler interface
//reduce the impact of change
//readability - less impact of change

//INHERITANCE - reduce redudant code __________________________________________________________________________
//POLYMORPHISM - REfactor condiional staeements________________________________________________________

//outline for medium article
//objects
//prototype
//prototypical inheritance
//ES6 classes
//Modules
