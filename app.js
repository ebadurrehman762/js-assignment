var userName = prompt("Please enter your name");
console.log ("Hello " + userName);
var userAge = prompt("Please enter your age");
console.log ("You are " + userAge + " years old");
var userCity = prompt("Please enter your city");
console.log ("You live in " + userCity);


var sum = Number(prompt("Please enter a number to add"));
var sum1 = Number(prompt("Please enter another number to add"));
console.log (sum + sum1);



var sub = Number(prompt("Please enter a number "));
var sub1 = Number(prompt("Please enter another number "));
console.log (sub + sub1);
console.log (sub - sub1);
console.log (sub * sub1);
console.log (sub / sub1);


var lenght = Number(prompt("please enter the length "));
var width = Number(prompt("please enter the width "));
console.log ("Area = " + (lenght * width));




var radius = Number(prompt("please enter the radius "));
var Circumference = 2 * Math.PI * radius;
console.log ("Circumference = " + Circumference);



var student = prompt("Please enter your name");
var english = Number(prompt("Please enter your English marks"));
var math = Number(prompt("Please enter your Math marks"));
var science = Number(prompt("Please enter your Science marks"));
var obtainMarks = english + math + science;
var totalMarks = 300;
console.log ("Student Name: " + student);
console.log ("Total Marks: " + totalMarks);
console.log ("Obtain Marks: " + obtainMarks);



var age = Number(prompt("Please enter your age"));
var afterAge = (age + 10);
console.log ("how old they will be after 10 years. " + afterAge);



var curruncy = Number(prompt("Please enter your currency in dollars"));
var usd = curruncy * 285;
console.log ("Your currency in PKR is: " + usd);



var Name = prompt("Please enter your name");
var language = prompt("your favorite programming language");
console.log ("Hello! " + Name)
console.log ("Your favorite programming language is " + language)
console.log ("Keep Practicing!");



var proudctName = prompt("Please enter your product name");
var proudctPrice = Number(prompt("Please enter your product price"));
var proudctQuantity = Number(prompt("Please enter your product quantity"));
console.log ("Product Name: " + proudctName);
console.log ("Product Price: " + proudctPrice);
console.log ("Product Quantity: " + proudctQuantity);
console.log ("Total Price: " + (proudctPrice * proudctQuantity));
