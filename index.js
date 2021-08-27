// this is my first line of JavaScript code -- not really.
// console.log('Hello Me! from another file')

// 1- Variables

// declare a variable
// indentifier name rules: 
// 1) not a keyword 2)meaningful 3)cannot start with a number
// 4) cannot contain a space or hyphen(-)
// indentifiers are case-sensitive
// let name_ = 'Mosh';
// console.log(name_);

// let firstName = 'Mosh';
// let lastName = 'Hamedani';

// 2- Constants
// const interestRate = 0.3;
// interestRate = 1; // this will get an error
// console.log(interestRate)

// 3- Primitive Types - Title
// 2 types in JavaScript:
// Primitives/Value Types:
//  String, Number, Bollean, Undefined, Null
// Reference Types:

//Primitives/Value Types
// let name_ = 'Mosh'; // String Literal
// let age = 30; // Number Literal
// let isApproved = true; // Boolean Literal
// let firstName; // undefined
// let lastName = null; 

//Reference Types:
// Object
// Array
// Function

// Object
// let name_ = 'Mosh';
// let age = 30;
// let person = {
//     name: 'Mosh',
//     age: 30
// };

// Dot notation
// person.name = 'John';

// Bracket Notation
// let selection = 'name';
// person[selection] = 'Mary';

// console.log(person);


// Array
// let selectedColors = ['red', 'blue'];
// selectedColors[2] = 'green';
// selectedColors[2] = 1;
// console.log(selectedColors.length);


// Functions

// type1: Performing a test
// function greet(name, lastName) {
    // console.log('Hello '+ name + ' ' + lastName);
// }

// greet('John', 'Smith');


// type2: Calculating a value
// function square(number) {
//     return number * number;
// }

// console.log(square(2))

// Operators

// Arithmatic Operators
// let x = 10;
// let y = 3;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);

// Increment and Decrement
// Increment (++)
// console.log(++x);
// console.log(x++);
// console.log(x);

// Decrement (--)
// console.log(--x);

// Assinment Operator
// let x =10;
// x++;
// x = x + 1;

// x = x + 5;
// x += 5;

// x = x * 3;
// x *= 3;

// Comparison Operator

// let x = 1;
// console.log(x > 0);
// console.log(x >= 1);
// console.log(x < 1);
// console.log(x <= 1);

// Strict Equality Operator(check type)
// console.log(1 === 1); //true
// console.log('1' === 1); //false

// Loose equality Operator(convert type)
// console.log(1 == 1); // true
// console.log('1' == 1); //true

// Ternary (conditional) Operator
// if a customer has more than 100 points,
// they are a 'gold' customer, 
// otherwise they are a 'silver' customer

// let points = 90;
// let type = points > 100 ? 'gold' : 'silver';
// console.log(type);

// Logical AND (&&)
// Returns TRUE if both operands are TRUE
console.log(false && true)

let highIncome = true;
let gooodCreditScore = true;

// Logical AND (&&)
// let eligibleForLoan = highIncome && gooodCreditScore
// Logical OR (||)
let eligibleForLoan = highIncome || gooodCreditScore
// logical NOT (!)
let approvedRefused = !eligibleForLoan
console.log('Eliginble for loan:', eligibleForLoan)
console.log('Approved Refused:', approvedRefused)