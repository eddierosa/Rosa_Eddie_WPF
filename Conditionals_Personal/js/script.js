var priceRange=1300;

var amountOfRoommates = prompt("Please enter the amount of roommates, that will be splitting rental costs: ");
if(amountOfRoommates = ' '){
    var AmountOfRoommates = prompt("You forgot to enter amount of roommates! Please enter a number: ");
}
else if(amountOfRoommates >= amountOfRoommates){
    var roommateRange = prompt("Please enter the price range of the roomate: ");
}
else{
    var totalRoommateRange = roommateRange;
}

var totalSplit = (totalRoommateRange - priceRange) / amountOfRoommates;

alert("The amount to be paid by ") + amountOfRoommates + " " + ("would be ") + totalSplit + " " + (" for a apartment priced at $") + priceRange;

