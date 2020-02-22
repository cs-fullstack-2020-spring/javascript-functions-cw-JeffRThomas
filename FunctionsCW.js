// console.log("JS linked");//JavaScript Link Check

// // ### Problem 1
// // Create a ```printNumbers``` function to print integers from -25 to 20
// // *Start of Code*
// function printNumbers() { //Function Declaration
//     for (i = -25; i <= 20; i++) { //For Loop to print integer range
//         console.log(i);
//     }
// }
// printNumbers();//Function Call to Action
// // *End of Code*

// // ### Problem 2
// // Create a function that’s passed a firstName and lastName. Return lastName comma firstName.
// // *Start of Code*
// let userFirst = prompt("Enter your first name: ");//Collection of UserInput
// let userLast = prompt("Enter your last name: ");//Collection of UserInput
// function lastNameFirst(firstname, lastname) {// Function Declaration
//     console.log(`${lastname},${firstname}`);
// }
// lastNameFirst(userFirst, userLast);//Function Call To Action
// // *End of Code*

// // ### Problem 3
// // Create a function in your program that counts from 0 to [NUMBER]
// // *Start of Code*
// let stoppingPoint = parseInt(prompt("What number are we counting to?"));//Let the user decide when to stop
// function countToUserStop(endNumber) { //Declare your function to count
//     for (i = 0; i <= endNumber; i++) {
//         console.log(i);
//     }
// }
// countToUserStop(stoppingPoint);//Call To Action
// // *End of Code*

// // ### Problem 4
// // Create a function called checkPassword. Send two string variables to the checkPassword function to check if the strings are equal. Return true if they are equal and false if they are not equal. Print the function's return value.
// // *Start of Code*
// let userPwd = prompt("Enter your password: ");
// let realPwd = 'password';
// function checkPassword(userPassword, realPassword) {//Fuction Declaration
//     if (userPassword == realPassword) {//Check for match in order to return "True"
//         return userPassword == realPassword;
//     } else {//Check the same condition order to capture "False" result
//         return userPassword == realPassword;
//     }
// }
// let result = checkPassword(userPwd, realPwd);//Function Call To Action
// console.log(result);//Print Results
// // *End of Code*


// // ### Problem 5
// // Create a ```sumOf3Numbers``` function that will print out the sum of the three numbers using the starting code below:
// // ```javascript
// // var number1 = 0;
// // var number2 = 0;
// // var number3 = 0;
// // sumOf3Numbers(number1, number2, number3);
// // *Start of Code*
// // Get any three numbers from the user
// let number1 = parseInt(prompt("Lets find the sum of three numbers. Enter your first number"));
// let number2 = parseInt(prompt("Enter your second number"));
// let number3 = parseInt(prompt("Enter your third number"));
// function sumOf3Numbers(number1, number2, number3) {//Function Declaration
//     return (number1 + number2 + number3);
// }
// let finalanswer = sumOf3Numbers(number1, number2, number3);//Set a placeholder for the function's return value
// console.log(`The sum of ${number1} + ${number2} + ${number3} is :${finalanswer}`);//Print Your Results
// // *End of Code*

// // ### Challenge
// // Create 4 functions called add, subtract, multiply, and divide. Create them to allow a user to perform the name of the function to the two numbers and return the result.

// // let userch1 = parseInt(prompt("Enter your first number"));
// // let userch2 = parseInt(prompt("Enter your second number"));
// // let userCalledFunction =prompt("Which operation would you like to perform? (+)(-)(x)(/)");
// // function add(user1,user2){
// //     return user1+user2;
// // }
// // function subtract(user1,user2){
// //     return user1-user2;
// // }
// // function multiply(user1,user2){
// //     return user1*user2;
// // }
// // function divide(user1,user2){
// //     return user1/user2;
// // }

