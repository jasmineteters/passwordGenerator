var charLength = prompt.value

//main function for the entire tool
function generatePassword() {
  var charLength = parseInt(prompt("How many characters is this password?"));
  if (charLength < 8 || charLength > 128) {
    alert("Password must be within 8 and 128 characters!");
  }
  //Prompts for the charLength, and if they want alphaUpper, lowercase, and symbols
  else {
    //Defining the T/F for upper, special, numeric.
    var askSpecialChar = confirm("Do you want to include symbols?");
    var askAlphaUpper = confirm("Do you want to include alphaUpper letters?");
    var askNumberStr = confirm("Do you want to include numbers?");
    //created the arrays of numbers, lower, upper, special
    var numberStr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
    //definind all possible options, starting with the array that will always be there, lowercase.
    var totalChar = [...alphaLower]
    var finalPassword = []
    //if statements for if they want special characters, to add to the totalChar
    if (askSpecialChar === true) {
      totalChar.push(...specialChar)
    }
    //if statements for if they want uppercase characters, to add to the totalChar
    if (askAlphaUpper === true) {
      totalChar.push(...alphaUpper)
    }
    //if statements for if they want numbers, to add to the totalChar
    if (askNumberStr === true) {
      totalChar.push(...numberStr)
    }
    //the for loop and math.random to select random arrays with the length the user selected for the password
    for (let i = 0; i < charLength; i++) {
      var randomIndex = Math.floor(Math.random() * totalChar.length)
      finalPassword.push(totalChar[randomIndex])
    }
    //joining the arrays together into a string
    return finalPassword.join("")
  }
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);