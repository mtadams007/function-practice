// Javascript Functions & Scope


// Function with no arguments
// Declare a function called bestTeacher that takes no arguments and logs to the console “{Your Teacher} is the best teacher in the world” to the console. ;)

let bestTeacher = () => {
  console.log("David is the best teacher in the world");
}


// Function with one argument
// NYCDA needs a simple welcome program for registered students.
// Create a function called nycdaWelcome that will take in a student's name as a function argument and console log a string that looks like : “Welcome to NYCDA {Students Name}. Enjoy your stay”

let nycdaWelcome = (studentName) => {
  console.log("Welcome to NYCDA " + studentName + ". Enjoy your stay");
}

// Function with multiple arguments
// Create a simple calculator function called simpleCalc that given two arguments will perform addition and return the result.

let simpleCalc = (a,b) => {
  return a + b;
}

// Function with arguments and logic
// Declare a function called magicDoor that receives an input of 1, 2 or 3. Depending upon which virtual "door" was entered create logic that will tell user they've received a different "prize" in an alert based on their selection
// Door 1 will give the user a brand new car
// Door 2 will give the user a nycda t-shirt
// Door 3 will turn into a blackhole and teleport you to antarctica

let magicDoor = (input) => {
  if (input == 1){
    alert("Congratulations! You have won a brand new car!");
  }else if (input == 2){
    alert("Congrats! You have won a NYCDA t-shirt!");
  }else if (input == 3){
    alert("This door is now a black hole. Welcome to Antartica!");
  }
}

// Function that modifies input
// Define a function greaterOfThree that takes three integers and returns the larger of the three.

let greaterOfThree = (a,b,c) => {
  if (a >= b && a >= c) {
    return a;
  }else if (b >= a && b >= c) {
    return b;
  }else{
    return c;
  }
}

// Function that modifies input
// Define a function lineThemUp that takes three integers as arguments and returns the integers as an array.

let lineThemUp = (a,b,c) => {
  let arr = [a,b,c];
  return arr;
}

// Function that modifies input
// Define a function called knighter that takes a name and returns it after being knighted.
// ex : Knighter(“Andy”) returns “Royal Knight Sir Andy”

let knighter = (name) => {
  return "Royal Knight Sir " + name;
}

// Function with Logic
// Define a function called royalizer that takes a gender and name as arguments, and returns a title based on the gender.
// ex : royalizer(“male”, “David”) returns “His Majesty David” , for female it would be “Her Majesty X”.

let royalizer = (gender, name) => {
  let gender2 = gender.toUpperCase();
  if (gender2 == "MALE"){
    return "His Majesty " + name;
  }else if (gender2 == "FEMALE"){
    return "Her Majesty " + name;
  }else{
    return "Their Majesty " + name;
  }
}
