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
let person = {
    name: 'Mosh',
    age: 30
};

// Dot notation
person.name = 'John';

// Bracket Notation
let selection = 'name';
person[selection] = 'Mary';

console.log(person);


// Array
let selectedColors = ['red', 'blue'];
// selectedColors[2] = 'green';
selectedColors[2] = 1;
console.log(selectedColors.length);


// Functions

// type1: Performing a test
function greet(name, lastName) {
    console.log('Hello '+ name + ' ' + lastName);
}

greet('John', 'Smith');


// type2: Calculating a value
function square(number) {
    return number * number;
}

console.log(square(2))

