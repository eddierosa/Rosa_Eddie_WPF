// Eddie Rosa May 10, 2014
// Expressions Worksheet

//Sparky's Age

const dogAge = 7; //Number of dog years per human year

var humanAge = 3; //Sparkys human age

var sparkysAge = dogAge * humanAge; //Calculation used to determine the age of Sparky in dog years based on human years.

var result = "Sparky\'s age is" + " " + (humanAge) +  " " +  "human years old which is" + " " +  (sparkysAge) + " "  + "in dog years.";

console.log(result); //The result of Sparky's age

//Slice of Pie Part 1

var slicesOfPizza = 4; //Slices of pizza per pie
var numberOfPeople = 10; //Number of people at party
var numberOrdered = 8; //Amount of pies ordered
var totalSlices = slicesOfPizza * numberOrdered; //Total amount of slices

var amountEaten = (slicesOfPizza / numberOfPeople) *  numberOrdered; //Calculation used to determine the amount of slices per person

var result2 = "Each person ate" + " " + (amountEaten) + " " + "slices of pizza at the party.";

console.log(result2);

//Slice of Pie Part 2



var sparkysSlices = totalSlices % numberOfPeople; //Equation used to get the remainder of pizza slices

var result3 = "Sparky got " + " " + (sparkysSlices) + " " + "slices of pizza.";

console.log(result3);



