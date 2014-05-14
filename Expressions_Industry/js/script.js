var amountOfSites = prompt("Enter the amount of client sites that needs coverage:")

var hourSites = prompt("Enter total amount of hours for client sites that need to be covered for the week:");

var amountOfEmployees = prompt("Enter amount of employees available.");

var employeeHours = amountOfEmployees * 40; //200

var employeesNeeded = hourSites / amountOfEmployees; // 30

var remainingHours = hourSites - employeeHours;


alert("To cover " + amountOfSites + " " + " the shifts with no employee going over 40 hours is " + employeesNeeded);

alert("Amount of hours left over are " + remainingHours + " that need to be filled.");

