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


//Average Shopping Bill

var groceryTotal = new Array(32.56, 56.86, 79.34, 97.65, 27.54); //Array of groceries done per week

var totalAmount = groceryTotal[0] + groceryTotal[1] + groceryTotal[2] + groceryTotal[3] + groceryTotal[4]; //Equation to add numbers in array
var weekAverage = totalAmount / 5; //Equation to get the weekly average

var result4 = "You have spent a total of" + " " + (totalAmount) + " " + "on groceries over 5 weeks." + " " + " That is an average of" + " " + (weekAverage) + " " +  "per week. ";

console.log(result4);

//Discounts

var originalPrice = 50;
var discountPercent = 5;
var descriptionOfItem = "Coffee Maker";
var salesTaxPercent = 6.5;

var discountAmount = (discountPercent / 100)  * originalPrice;
var amountWithDiscount = originalPrice - discountAmount;
var tax = (salesTaxPercent / 100) * amountWithDiscount;
var withTax = tax + amountWithDiscount;


var result5 = "Your" + " " + (descriptionOfItem) + " " + "was orignially $" + (originalPrice) + " " + "but after a" + " " + (discountPercent) + "% " + " discount, it is now" + " $" + (withTax) + " " + "with tax" + " " + "and " + " $" + (amountWithDiscount) + " " + "without tax.";

console.log(result5);

