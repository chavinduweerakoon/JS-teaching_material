// if else
let today = "monday";

if ((today = "monday")) {
  console.log("do something1");
} else if ((today = "tuesday")) {
  console.log("do something2");
} else if ((today = "wednesday")) {
  console.log("do something3");
} else if ((today = "thursaday")) {
  console.log("do something4");
} else {
  console.log("do something5");
}
//switch
let today = "Monday";

switch (today) {
  case "Monday":
    console.log("Do something");
    break;
  case "Tuesday":
    console.log("Do somethin111g");
    break;
  case "Wednesday":
    console.log("Do sometddhing");
    break;
  case "Thirday":
    console.log("Do somethdding");
    break;
    Default: console.log("Do somethdding");
}

//looops
//for //i is index / loop variable  (initial expression; condition;increment/decrement expression)
for (let i = 0; i <= 5; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
for (let i = 5; i >= 1; i--) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//while loop
let i = 0;
while (i <= 5) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
}
//* difference - condtion excution
//do while
let i = 0;
do {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
} while (i <= 5);

//for infinite - use correct increment /decrement in loops

//for-in

const person = {
  name: "saman",
  age: "67",
};
for (let key in person) {
  console.log(key, person[key]);
}
const colors = ["red", "green", "yellow"];
for (let index in colors) {
  console.log(index, colors[index]);
}

// //dot notation
// person.name
// //bracket notation
// person['name'];

// after  ES6 - for-of  //easily iterate elements in an array
for (let color of colors) {
  console.log(color);
}

//break(jump out of the loop) an continue (jump to the next iteration)
let i = 0;
while (i < 10) {
  if (i % 2 === 0) {
    i++;
    continue;
  }
  //   if (i == 5) {
  //     break;
  //   }
  console.log(i);
  i++;
} //exaple
