var amountOfSites = prompt("Enter the amount of client sites that needs coverage:") //user enters amount of client sites

var hourSites = prompt("Enter total amount of hours for client sites that need to be covered for the week:"); //user enters total hours for sites

var amountOfEmployees = prompt("Enter amount of employees available."); //user enters employees that are available

var employeeHours = amountOfEmployees * 40; //total amount of hours employees are available

var employeesNeeded = hourSites / amountOfEmployees; //amount of employees to cover without going over 40 hours

var remainingHours = hourSites - employeeHours; //extra hours that will result in overtime 


alert("To cover " + amountOfSites + " " + " the shifts with no employee going over 40 hours is " + employeesNeeded);

alert("Amount of hours left over are " + remainingHours + " that need to be filled.");

