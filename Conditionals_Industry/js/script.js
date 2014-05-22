var sitesNeeded = prompt("Please enter the amount of sites needed to create: ");

if(sitesNeeded > 1){
    var dedicatedTime = prompt("Please enter amount of dedicated time for one week: ");
}
else{
    alert("Only one site needs to be created. Don't sweat it!");
}

var timeToSpend = dedicatedTime / sitesNeeded;

    alert("It would be wise to utilize approximately ") + timeToSpend + " " + ("on the sites to get them done in a timely manner!");

