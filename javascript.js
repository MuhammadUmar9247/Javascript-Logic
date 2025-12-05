// // // ---------------- Question 1 ----------------
// // document.write("<h2>Question 1: Arithmetic Operations</h2>");

// // var number = 5;
// // document.write("Value after variable declaration: undefined<br>");
// // document.write("Initial value: " + number + "<br>");
// // number++;
// // document.write("Value after increment: " + number + "<br>");
// // number = number + 7;
// // document.write("Value after addition: " + number + "<br>");
// // number--;
// // document.write("Value after decrement: " + number + "<br>");
// // document.write("Remainder after dividing by 3: " + (number % 3) + "<br><br>");

// // // ---------------- Question 2 ----------------
// // document.write("<h2>Question 2: Predict Result</h2>");

// // var a = 2, b = 1;
// // var result = --a - --b + ++b + b--;
// // document.write("Result of '--a - --b + ++b + b--' = " + result + "<br>");
// // document.write("Final value of a = " + a + "<br>");
// // document.write("Final value of b = " + b + "<br><br>");

// // // ---------------- Question 3 ----------------
// // document.write("<h2>Question 3: Greet User</h2>");
// // var name = prompt("Enter your name:");
// // alert("Hello " + name + "!");
// // document.write("Hello " + name + "!<br><br>");

// // // ---------------- Question 4 ----------------
// // document.write("<h2>Question 4: Multiplication Table</h2>");
// // var num = prompt("Enter a number:", 5) || 5;
// // num = Number(num);
// // document.write("<h3>Table of " + num + "</h3>");
// // document.write(num + " x 1 = " + num*1 + "<br>");
// // document.write(num + " x 2 = " + num*2 + "<br>");
// // document.write(num + " x 3 = " + num*3 + "<br>");
// // document.write(num + " x 4 = " + num*4 + "<br>");
// // document.write(num + " x 5 = " + num*5 + "<br>");
// // document.write(num + " x 6 = " + num*6 + "<br>");
// // document.write(num + " x 7 = " + num*7 + "<br>");
// // document.write(num + " x 8 = " + num*8 + "<br>");
// // document.write(num + " x 9 = " + num*9 + "<br>");
// // document.write(num + " x 10 = " + num*10 + "<br><br>");

// // // ---------------- Question 5 ----------------
// //var sub1 = prompt("Enter first subject:");
// var sub2 = prompt("Enter second subject:");
// var sub3 = prompt("Enter third subject:");

// var marks1 = +prompt("Marks for " + sub1 + ":");
// var marks2 = +prompt("Marks for " + sub2 + ":");
// var marks3 = +prompt("Marks for " + sub3 + ":");

// document.write("<h2>Marks Sheet</h2>");
// document.write(
//   "<table border='1' cellpadding='5'>" +
//   "<tr><th>Subject</th><th>Total</th><th>Obtained</th></tr>" +
//   "<tr><td>" + sub1 + "</td><td>100</td><td>" + marks1 + "</td></tr>" +
//   "<tr><td>" + sub2 + "</td><td>100</td><td>" + marks2 + "</td></tr>" +
//   "<tr><td>" + sub3 + "</td><td>100</td><td>" + marks3 + "</td></tr>" +
//   "<tr><th>Total</th><th>300</th><th>" + (marks1+marks2+marks3) + "</th></tr>" +
//   "</table>" +
//   "<h3>Percentage: " + ((marks1+marks2+marks3)/300*100) + "%</h3>"
// );
