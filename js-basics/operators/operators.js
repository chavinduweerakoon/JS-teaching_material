//Arithmetic operators ----------------------------------------------------

let x = 10;
let y = 3;

console.log(x + y); //addition
console.log(x - y); //substarction
console.log(x * y); //multiplication
console.log(x / y); //division
console.log(x % y); //remainder of divcion
console.log(x ** y); //power

//increment (++)
console.log(++x); //shows the incremented value by 1
//=difference
console.log(x++); //shows the intial value
console.log(x)  // shows the incremented value by 1

//decrement ()
console.log(--x); //shows the decremented value
//=difference
console.log(x--); //shows the intial value
console.log(x)  // shows the decremented value

//Assignement operators ------------------------------------------------

x = x + 5;
x += 5;

x = x * 5;
x *= 5 ;

//comparison operators ------------------------------------------------------

let x = 1 ;

//relational
console.log(x > 0 );
console.log(x >= 0 );
console.log(x < 0 );
console.log(x <= 0 );

//equality
console.log(x === 1);
console.log(x !== 1);

//strict equality (type + value)
console.log(1 === 1 );
console.log( '1' === 1); //false

//lose equality
console.log( 1 == 1);
console.log( '1' == 1); // true // convert the type of right to match left


//Terranary operator -------------------------------------------------------------
//ex -  if a marks > 100 -> A  , otherwise -> B
 let marks = 110;
 let grade = marks > 100 ? 'A' : 'B';
 console.log(grade);


 // Logical operators -------------------------------------------

  //AND (&&) 
  let highIncome = true ;
  let goodCreditScore = true ;
  let eligibleForLoan = highIncome && goodCreditScore ;
  console.log(eligibleForLoan);

  //OR (||)
  let eligibleForLoan = highIncome || goodCreditScore ;
  console.log(eligibleForLoan);

  //NOT (!)
  let applicationRefused =! eligibleForLoan ;


  //logical operators with non-booleans
  //falsy (false)
  //undefined
  //null
  //0
  //false
  //''
  //NaN  //short circuit evaluation -> https://codeburst.io/javascript-what-is-short-circuit-evaluation-ff22b2f5608c

  let useColor = undefined ;
  let defaultColor = 'blue';
  let currentColor = useColor || defaultColor;
  console.log(currentColor);


  //BITWISE operators ----------------------------------------------------------------------------------------------

  //1 = 00000001
  //2 - 00000010
  //3 - 00000011

  console.log(1 | 2); //bitwise OR
  console.log(1 & 2); //bitwise AND

  eg- access control system
  read - 00000100
  write - 00000110
  execute - 00000111

  const readPermission = 4;
  const writePermission = 2;
  const executePermission = 1;

  let myPersmission = 0;
  myPersmission = readPermission | writePermission | executePermission ;

  let message = (myPersmission ? readPermission) ?'YES' : 'NO';
  console.log(message);



