//Expressions Wacky
//Eddie Rosa

var daughterToys = ["Dora " , " Barbie ", " Princess ", " Finding Nemo ", " Littlest Pet Shop ", " Little Mermaid "];

alert("Here is the list of current toys: " + daughterToys);

var whichToy = prompt("Enter a number between 0 - 5 to choose a toy to remove:");

var removedToy = whichToy - daughterToys;

//alert("The toy that you chose is: " + toyChoosed);

//var removedToy = prompt("What toy would you like to remove? Enter a number between 0 - 5 to remove a toy.");


var newToyList = daughterToys - removedToy;

alert("The new toy list is: " + newToyList);



