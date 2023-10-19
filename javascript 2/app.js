


var num = +prompt("Enter a number");
var operator = prompt("Select any operator e.g (/,*,+,-,% )");
var num1 = +prompt("Enter a number");
var result = "";
var result1 = "";


 if( operator === "+"){
    result1 = num + num1;
    result = `Sum of ${num} and ${num1} is ${result1}.`
 }else if (operator === "-" ){
    result1 = num - num1;
    result = `Substraction of ${num} and ${num1} is ${result1}.`
 }else if( operator === "/"){
    result1 = num / num1;
    result = `Division of ${num} and ${num1} is ${result1}.`
 }else if(operator === "%"){
    result1  = num % num1;
    result = `Modulus of ${num} and ${num1} is ${result1}.`
 }else if(operator === "*"){
   result1  = num * num1;
    result = `Multiplication of ${num} and ${num1} is ${result1}.`
 }

document.write(result+ "<br>");


// a) Declare a variable
var burhan;

// b) Show the value of variable in your browser
document.write("Value after variable declaration is:" + burhan + "<br>");

// c) Initialize the variable

var burhan = 5;

// d) Show the value of variable in your browser

document.write("Initial Value :" + burhan + "<br>");

//e. Increment the variable.
burhan++;

// f. Show the value of variable in your browser
document.write("value after increment is :" + burhan + "<br>")

// g. Add 7 to the variable.
burhan += 7;

//h. Show the value of variable in your browser
document.write("value after addition is :" + burhan + "<br>")

// i. Decrement the variable.
burhan--;

// j. Show the value of variable in your browser like “Value after decrement is: 12”.

document.write("value after decrement is :" + burhan + "<br>")

//k. Show the remainder after dividing the variable's value by 3.

var remainder = burhan % 3;

//l. Output : “The remainder is : 0”.

document.write("The remainder is : " + remainder + "<br>")

// Cost of one movie ticket is 600 PKR. Write a script to store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

var price = 600;

var ticket = +prompt("How many tickets you want");

var total = price * ticket;

document.write("Total cost to buy " +  ticket + " " + "tickets" + " " + " to a movie is " + total +"Pkr" + "<br>" )

var number = parseInt(+prompt('Enter your number'));

document.write("<p> Table of" + " " + number+  "</p>"+"<br>");

for (i = 1 ; i <= 10 ; i++) {

   document.write(`${number} * ${i} = ${number*i} <br>`)   

}


var celsius = parseFloat(prompt("Enter celsius"));

const ferrenheit = (celsius * 9/5  + 32);

document.write(`${celsius}°C is ${ferrenheit}°F <br>`);

ferrenheit;

const cel = (ferrenheit - 32 * 9/5)

document.write(`${ferrenheit}°F is ${cel}°C <br>`);



// chapter 5 Question 7 Write a program to implement checkout process of ashopping cart system for an e-commerce website. Storethe following in variables


var price = 650;

var item1 = +prompt("Enter item1 your quatity");

var price1 = 100;

var item2 = +prompt("Enter your Items 2 quantity");

var deliveryCharges = 100;

var totalCost = (price * item1) +(price1 * item2) + deliveryCharges;

document.write("Price of item 1 is " + " " + price + "<br>");

document.write('Quantity of item 1 is'+" " + item1 + '<br>');

document.write('Price of item 2 is' +" " + price1 + "<br>");

document.write("Quantity of item 2 is" + " " + item2 + "<br>");

document.write("Shipping Charges" + deliveryCharges + "<br>");

document.write(`Total cost of your order is ${totalCost} <br>`)

//Chapter 5  Question 8 Store total marks & marks obtained by a student in 2variables. Compute the percentage & show the result inyour browser


var totalMarks = +prompt('Enter Your Total Marks');

var obtainedMarks = +prompt("Enter Your Obtained Marks");

var percentage = (obtainedMarks / totalMarks) * 100;
var grade = ""

document.write('Total Marks :' + " "+ totalMarks + "<br>");

document.write("Marks obtained :" + " " + obtainedMarks+ "<br>");

document.write("Percentage :" + " " + percentage + "%" + "<br>");

if (percentage <= 40){
   grade = "Failed"
}else if(percentage <= 50){
   grade = "D (PASS)"
}else if(percentage <= 60 ){
   grade = "C (PASS)"
}else if(percentage <= 70){
   grade = "B (PASS)"
}else if(percentage <= 80){
   grade = "A (PASS)"
}else if(percentage <= 100){
   grade = "A+ (PASS)"
};

document.write("Grade :" +" " + grade + "<br>");


// Chapter 5 Question 9 Assume we have 10 US dollars & 25 Saudi Riyals. Write ascript to convert the total currency to Pakistani Rupees.Perform all calculations in a single expression.(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupeeand 1 Saudi Riyal = 28 Pakistani Rupee)

var Dollar = +prompt("How Many Dollar you have");

var riyal = +prompt("How many Riyal you have");

var pkr = (Dollar * 148.80) + (riyal * 28);

document.write("Total Currency in PKR is " + " " + pkr + "<br>");

// Chapter  5 Question 10

var InitialValue = "";

var arithem = ((InitialValue + 5) * 10) / 2 ;

console.log(arithem);


// Chapter 5 Question 11

var birthYear = +prompt("Enter you birth year");

var date = new Date();

var year = date.getFullYear();

var age = year - birthYear ;

document.write("Your Age is " + " "+ age + "<br>" )

// Chapter 5 Question 12

var radius = +prompt("Enter Radius");

// chapter 5  Question 13

var snacks = "Oreo"

var currentAge = 20;

var expectAge = 30;

var amountSnack = 2;

var yourNeed = ( expectAge - currentAge) * amountSnack;
document.write("Favourite Snacks :" + " " + snacks + "<br>");
document.write("Current Age :" + " " + currentAge  + "<br>");
document.write("Estimated Maximum Age :" + " " + expectAge + "<br>")
document.write(`You will need ${yourNeed} to last until the ripe old age of ${expectAge}`);

