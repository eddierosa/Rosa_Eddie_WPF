//Conditional Logic

var oldEnough = false;

//if child is old enough, print to the console "you can ride!"

if(oldEnough){
     //code performed if condition is true
    console.log("You can ride the coaster!");

}
console.log("What comes after");

//Relational Expressions

var kidHeight = 50;
var minHeight = 47;
var sneakerLift = 2;
var wParentHeight = 45;
//if the kid is over 48 inches in height
if(kidHeight + sneakerLift > minHeight){
    //you can ride
    console.log("You can ride the coaster!")

}
else if(kidHeight > wParentHeight){
    //you can ride with a parent present
    console.log("You can ride but only with a parent present!");
}
else{
    //you cant ride
    console.log("Sorry you have to grow some more!");

}

//Conditional Logic - Logical Operator

var budget = 300;
var iPhonePrice = 199.99;
var payCheck = 200;

//if the price of the phone is less our budget
if(iPhonePrice < budget && payCheck > 300){
    console.log("We can buy the phone");
}else
{
    console.log("No phone for you!");
}
