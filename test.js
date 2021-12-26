document.write("Hello JavaScript!! <br> <hr> <br>");
/*
document.getElementById('para').innerHTML = "This is a ParaGraph!! <br>";

var a1 = 45;
var a2 = "This is me";
document.write("<br>",a2);
console.log(a1);

var name = prompt("Tell me Your name?");
var age = prompt("Tell me your age?");

document.write("<br> Your Name is : ",name," and your age is : ",age);
*/

var totalCost = prompt("Enter Total Cost?");
var noOfPerson = prompt("Entrt Number of Persons?");
document.write("Total Cost of Your food ₹",totalCost,".<br>");
document.write("You all have to pay each ₹"+(totalCost/noOfPerson).toFixed(3),".<br> ")
