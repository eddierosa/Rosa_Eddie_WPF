
var amountSites = prompt("Enter the amount of client sites needed to fill.");
var hourSites = prompt("Enter total amount of hours for client sites previously entered, for one full week.");
var amountOfEmployees = ("Enter amount of employees available.");


var totalHours = hourSites * amountSites; //total amount of hours

var numberOfEmployees = (hourSites / 40) * amountSites;

var remainingHours = totalHours % numberOfEmployees;

var 


alert("The total amount of employees needed to cover the shifts without allowing overtime is " +  parseInt(numberOfEmployees));

alert("Amount of hours left over are " + parseFloat(remainingHours) + " that need to be filled.");

