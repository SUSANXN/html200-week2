//var first_name = "susan"; two forward slashes //mean single line comment

/*
*
*
* BLOCK COMMENT 
*/ 

var greeting="hello!";
var first_name="susan"; 
var last_name= "nguyen";
var message1= "thank you for your recent purchase.";
var message2= "your item will be shipped via ups within 3-5 business day.";
var message3= "if you have any questions, feel free to shoot us an email.";
var message4= "we are open 7 days a week, 24 hours a day";
var favoritequote= "Four Score...";
var favoritequote1= "\"BELIEVE!!!\"   ";
var ending= "Thank you, have a wonderful day";

//use single quotes if you have a lot of illegal character  

//var my-image = "<img src="images/myImage.png"/>;

//bad varible names (errors!!!!) 
//var first name ="";
//var 2first_name="";
//var math="";

//operators
// "=" assigns values 
// "+=" (concatenation assignment operator, with strings) adds to whatever the varible currently has

// concatenation means, joining to words, for example, concatenate greeting with message 

// output varibles to the console !!!!
/*console.log(greeting); 
console.log(first_name);
console.log(last_name);
console.log(message1);
console.log(message2);
console.log(message3);
console.log(message4);
console.log(favoritequote);
console.log(favoritequote1); */

//console.log(greeting +" "+ first_name + " " + last_name + message1 + message2 +  message3 + message4 + favoritequote + favoritequote1);

//my quote... the parts in astericks are the variables that will change...
//My fellow *American* ask not what your *country* can do for *you* - ask what *you* can do for your *country*

//lets create some variables to hold the parts that don't change...

var static_words1 = "My fellow";
var static_words2 = ", ask not what your";
var static_words3 = "can do for";
var static_words4 = "-ask what";
var static_words5 = "can do for your";

//create a variable that used as a reference to your form button
//we use the unique ID attribute to do this
var button = document.getElementById("submit"); 
//then we add the ability to have a mouse click fire off a function when clicked on 
button.addEventListener("click", onClick, false); 
function onClick(evt)
{
 evt.preventDefault(evt);//this line stops the form from submitting
  //by preventing its default action
  
  //forms
  var element1 = document.getElementById("form1").elements.item(0).value;
  var element2 = document.getElementById("form1").elements.item(1).value;
  var element3 = document.getElementById("form1").elements.item(2).value;
  var element4 = document.getElementById("form1").elements.item(3).value;
  var element5 = document.getElementById("form1").elements.item(4).value;
 
  console.log(static_words1 + " " + element1 + " " + static_words2 + " " + element2 + " " + static_words3 + " " + element3 + " " + static_words4 + " " + element4 + " " + static_words5 + " " + element5);
}
//example: console.log (greeting);
