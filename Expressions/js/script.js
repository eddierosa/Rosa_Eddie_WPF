//Expressions

var a = 2; // Sets up our variable a and defines it with 2
var b;
b = a + 3; //add 3 to a

console.log(b);


//Expressions - Arithemetic Operators

//area of the triangle is half of the width times the height

var width = 4;
var height = 5;
var area = width * height/2;

console.log(area);

// PEMDAS - Order of Operations

var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 60;
var quiz4 = 80;

// The average is the sum of the items divided by the number of items

var average = (quiz1 + quiz2 + quiz3 + quiz4) / 4;
console.log(average);

var length = 7;
var width = 6;
var perimeter = length * 2 + width * 2;
console.log(perimeter);

//Expressions - Concatenating Strings

var firstName = "Eddie";
var lastName = "Rosa";
var fullName = firstName + " "  + lastName;

console.log(fullName);


//Casting

var stringVar = "6";
var result = 7 + Number(stringVar);
console.log(result);

//Telephone number (407) 203 - 4529

var areaCode = 407;
var firstPart = 203;
var secondPart = 4529;

var phoneNumber = "(" + String(areaCode)+ ")" + String(firstPart) + "-" + String(secondPart);

console.log(phoneNumber);

//Assignment Operators

var c = 3;
c += 4; //c = c + 4
c *= 4; // c = c * 4
c /= 4; //c = c / 4
c -= 4; // c = c - 4
c ++; //increment operator
c --; // decrement operator
console.log(c);
