console.log("JS linked");//JavaScript Link Check

// ### Problem 1
// Create a ```printNumbers``` function to print integers from -25 to 20
// *Start of Code*
function printNumbers() { //Function Declaration
    for (i = -25; i <= 20; i++) { //For Loop to print integer range
        console.log(i);
    }
}
printNumbers();//Function Call to Action
// *End of Code*

// ### Problem 2
// Create a function that’s passed a firstName and lastName. Return lastName comma firstName.
// *Start of Code*
let userFirst = prompt("Enter your first name: ");//Collection of UserInput
let userLast = prompt("Enter your last name: ");//Collection of UserInput
function lastNameFirst(firstname, lastname) {// Function Declaration
    console.log(`${lastname},${firstname}`);
}
lastNameFirst(userFirst, userLast);//Function Call To Action
// *End of Code*

// ### Problem 3
// Create a function in your program that counts from 0 to [NUMBER]
// *Start of Code*
let stoppingPoint = parseInt(prompt("What number are we counting to?"));//Let the user decide when to stop
function countToUserStop(endNumber) { //Declare your function to count
    for (i = 0; i <= endNumber; i++) {
        console.log(i);
    }
}
countToUserStop(stoppingPoint);//Call To Action
// *End of Code*

// ### Problem 4
// Create a function called checkPassword. Send two string variables to the checkPassword function to check if the strings are equal. Return true if they are equal and false if they are not equal. Print the function's return value.
let userPwd = prompt("Enter your password: ");
let realPwd = 'password';
function checkPassword(userPassword, realPassword) {
    if (userPassword == realPassword) {
        return (userPassword == realPassword);
    } else if (userPassword != realPassword) {
        return (userPassword != realPassword);
    }
}
checkPassword(userPwd, realPwd);
