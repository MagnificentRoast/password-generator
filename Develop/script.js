// Assignment Code


var generateBtn = document.querySelector("#generate");
var numbersArr =  ['1','2','3','4','5','6','7','8','9','0']
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k','l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var specialCharsArr = ['!', '@', '$', '%', '&', '*', '.', ',', '-', '?', '_']

function prompts() {
  var passLength = parseInt(
    prompt(
    "How long would you like your password to be?\nChoose between 8 and 120 characters."
  ));


  if(Number.isNaN(passLength)){
    alert("This must be a number!");
    return null;
  }


  if (passLength < 8 || passLength > 128) {
    alert("Choose a number between 8-128!");
    return null;
  }

  var hasNumbers = confirm('Would you like to include numbers?');

  var hasUpperCase = confirm("Would you like to include upper-case?");

  var hasLowerCase = confirm("Would you like to include lower-case?");

  var hasSpecialChars = confirm("Would you like to include special characters?");

  var passwordOptions = {
    length: passLength,
    numbers: hasNumbers,
    uppercase: hasUpperCase,
    lowercase: hasLowerCase,
    special: hasSpecialChars
  };

  return passwordOptions
}

function random(array){
  return array[Math.floor(Math.random()* array.length)]
}

function generatePassword() {
  var passwordOptions = prompts();
  console.log(passwordOptions)

var finalPassword = [];
var possibleChars = [];
var chosenChars =  [];

if(passwordOptions.numbers){
  possibleChars = possibleChars.concat(numbersArr)
  chosenChars.push(random(numbersArr))
};

if(passwordOptions.uppercase){
  possibleChars = possibleChars.concat(upperCaseArr)
  chosenChars.push(random(upperCaseArr))
};

if(passwordOptions.lowercase){
  possibleChars = possibleChars.concat(lowerCaseArr)
  chosenChars.push(random(lowerCaseArr))
};

  if(passwordOptions.special){
  possibleChars = possibleChars.concat(specialCharsArr)
  chosenChars.push(random(specialCharsArr))
 };

 if(passwordOptions.numbers, passwordOptions.uppercase){
   possibleChars = possibleChars.concat(numbersArr, upperCaseArr)
   chosenChars.push(random(possibleChars))
 };

 if(passwordOptions.numbers, passwordOptions.lowercase){
   possibleChars = possibleChars.concat(numbersArr, lowerCaseArr)
   chosenChars.push(random(possibleChars))
 };

 if(passwordOptions.numbers, passwordOptions.special){
   possibleChars = possibleChars.concat(numbersArr, specialCharsArr)
   chosenChars.push(random(possibleChars))
 };

 if(passwordOptions.uppercase, passwordOptions.lowercase){
   possibleChars = possibleChars.concat(upperCaseArr, lowerCaseArr)
   chosenChars.push(random(possibleChars))
 };

 if(passwordOptions.uppercase, passwordOptions.special){
   possibleChars = possibleChars.concat(upperCaseArr, specialCharsArr)
   chosenChars.push(random(possibleChars))
 };

 if(passwordOptions.lowercase, passwordOptions.special){
   possibleChars = possibleChars.concat(lowerCaseArr, specialCharsArr)
   chosenChars.push(random(possibleChars))
 };

 if(passwordOptions.numbers, passwordOptions.uppercase, passwordOptions.lowercase){
   possibleChars = possibleChars.concat(numbersArr, upperCaseArr, lowerCaseArr)
   chosenChars.push(random(possibleChars))
 };

 if(passwordOptions.numbers, passwordOptions.uppercase, passwordOptions.special){
   possibleChars = possibleChars.concat(numbersArr, upperCaseArr, specialCharsArr)
   chosenChars.push(random(possibleChars))
 };

 if(passwordOptions.numbers, passwordOptions.lowercase, passwordOptions.special){
   possibleChars = possibleChars.concat(numbersArr, lowerCaseArr, specialCharsArr)
   chosenChars.push(random(possibleChars))
 }

 if(passwordOptions.uppercase, passwordOptions.lowercase, passwordOptions.special){
   possibleChars = possibleChars.concat(upperCaseArr, lowerCaseArr, specialCharsArr)
   chosenChars.push(random(possibleChars))
 };

if(passwordOptions.numbers, passwordOptions.uppercase, passwordOptions.lowercase, passwordOptions.special){
  possibleChars = possibleChars.concat(numbersArr, upperCaseArr, lowerCaseArr, specialCharsArr)
  chosenChars.push(random(possibleChars))
};

console.log(chosenChars)
  for (let i = 0; i < passwordOptions.length; i++) {
    var possibleChar =  random(possibleChars)
    finalPassword.push(possibleChar)
  }

  for (let i = 0; i < chosenChars.length; i++) {
   finalPassword[i] = chosenChars[i]
  }

  // if(passwordOptions.letters){
  //   possibleChars = possibleChars.comcat(lowerCaseArr)
  //   chosenChars.push(random(lowerCaseArr))
  // }
  return finalPassword.join('')
}
// Write password to the #password input
function writePassword() {



  // var userInput = window.prompt(
  //   "What kind of characters do you want in your password? Please select from the following options:\n1 for uppercase\n2 for lowercase\n3 for numeric\n4 for special\n5 for all of the above"
  // );

  // if (usereInput === 1) {
  //   console.log("User picked 1");
  // } else if (userInput === 2) {
  //   console.log("User picked 2");
  // } else if (userInput === 3) {
  //   console.log("User picked 3");
  // } else if (userInput === 4) {
  //   console.log("User picked 4");
  // } else {
  //   consol.log("Please pick a valid option.");
  // }

  // var prompt = window.alert("Welcome to the password generator, please fill in these prompts to generate your password!");
  // var chooseNow = window.alert("Choose your password");
  // var characterCount = window.prompt("How long do you want your password to be? Must be between 8 and 128");
  // if (characterCount >= 8 || characterCount <=128) {
  //   upperCase();
  // } else {
  //   window.alert("choose a number between 8-128!")
  //   characterCount();
  // }
  // var upperCase = window.prompt("Would you like to use lowercase, uppercase, or both? Enter 'lowercase', 'uppercase', or 'both' to make your selection.");
  // var numeric = window.prompt("Would you like to use numeric data? Enter 'YES', or 'NO' here.");
  // var specialCharacters = window.prompt("Would you like to use special characters? Please select 'YES' or 'NO' to make your selection.");

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//basic strcucture for JS. Global Variables go up top. eventlisteners go at the bottom. all functions go in between