

//  1. Basic Console Programs
console.log("Basic Console Programs");

console.log("Hello, World!");

let sum = 10 + 5;
console.log("The sum is:", sum);

let name = "S K";
let age = 10;
console.log("My name is", name, "and I am", age, "years old.");

let length = 8;
let width = 5;
let area = length * width;
console.log("Area of rectangle:", area);

let currentYear = new Date().getFullYear();
console.log("The current year is:", currentYear);


// 2. Console Methods Practice 
console.log("Console Methods Practice");

console.log("String:", "Hello", "| Number:", 123, "| Boolean:", true);
console.error("This is an error message!");
console.warn("This is a warning message!");

let city = "Chennai";
let country = "India";
console.log("I live in", city, ",", country);


//  3. Variables Practice 
console.log("Variables Practice");

var a = 10;
let b = 20;
const c = 30;
console.log("var:", a, "| let:", b, "| const:", c);

let personName = "raman";
let personAge = 25;
let email = "raman@example.com";

console.log("Name:", personName);
console.log("Age:", personAge);
console.log("Email:", email);


//  4. Data Types & Type Conversion 
console.log("Data Types & Type Conversion");

let str = "Hello";       
let num = 123;           
let bool = true;         
let undef;               
let nul = null;          

console.log(str, num, bool, undef, nul);

console.log("Type of str:", typeof str);
console.log("Type of num:", typeof num);
console.log("Type of bool:", typeof bool);
console.log("Type of undef:", typeof undef);
console.log("Type of nul:", typeof nul);

let numStr = "42";
let convertedNum = Number(numStr);
console.log("Converted number:", convertedNum, "| Type:", typeof convertedNum);

let number = 100;
let convertedStr = String(number);
console.log("Converted string:", convertedStr, "| Type:", typeof convertedStr);

console.log(Boolean("hello"));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(1));


//  5. Variable Swapping & Math Practice 
console.log("Variable Swapping & Math Practice");

let x = 5;
let y = 10;
[x, y] = [y, x];
console.log("After swapping: x =", x, ", y =", y);

const PI = 3.14159;
let radius = 7;
let circumference = 2 * PI * radius;
console.log("Circumference of circle:", circumference);

let itemName = "Laptop";
let price = 50000;
let quantity = 2;
let total = price * quantity;

console.log("Shopping Cart:");
console.log("Item:", itemName);
console.log("Price:", price);
console.log("Quantity:", quantity);
console.log("Total cost:", total);


