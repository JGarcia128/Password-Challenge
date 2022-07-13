// Assignment Code
var generateBtn = document.querySelector("#generate");


// Arrays of characters 
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var special = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];

// 
function questions() {
  var isValid = false;
  
    var length = prompt("Choose length of characters in the password ");
    var Numbersquestion = confirm("Do you want your password to include numbers?");
    var LowerCasequestion = confirm("Do you want your password to include lower case letters?");
    var UpperCasequestion = confirm("Do you want your password to include upper case letters?");
    var Specialquestion = confirm("Do you want your password to include special characters?");
    var response = {
      length: length,
      Numbersquestion: Numbersquestion,
      LowerCasequestion: LowerCasequestion,
      UpperCasequestion: UpperCasequestion,
      Specialquestion: Specialquestion
    } 
    if((length < 8)||(length > 128))
    alert("Choose number between 8 and 128");
    else if((!Numbersquestion)&&(!LowerCasequestion)&&(!UpperCasequestion)&&(!Specialquestion))
    alert("Must choose at least one type.");
    else
    isValid = true;

  
  return response;
}
// This function joins all the user responses and then creates the result - a strong password.
function generatePassword() {
  var passwordOptions = questions();
  var randomCombo = [];
  var finalPassword = "";



  if (passwordOptions.Numbersquestion) {
    for (var i of numbers)
      randomCombo.push(i);
  }
  if (passwordOptions.LowerCasequestion) {
    for (var i of lowerCase)
      randomCombo.push(i);
  }
  if (passwordOptions.UpperCasequestion) {
    for (var i of upperCase)
      randomCombo.push(i);
  }
  if (passwordOptions.Specialquestion) {
    for (var i of special)
      randomCombo.push(i);
  }


  console.log(randomCombo);


  for (var i = 0; i < passwordOptions.length; i++) {
    finalPassword += randomCombo[Math.floor(Math.random() * randomCombo.length)];
    
  }
  console.log(finalPassword);

  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
