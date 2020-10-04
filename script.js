var charLength = prompt.value


function generatePassword() {
  var charLength = parseInt(prompt("How many characters is this password?"));
  if (charLength < 8 || charLength > 128) {
    alert("Password must be within 8 and 128 characters!");
  }
  //Prompts for the charLength, and if they want alphaUpper, lowercase, and symbols
  else {
    var askSpecialChar = confirm("Do you want to include symbols?");
    var askAlphaUpper = confirm("Do you want to include alphaUpper letters?");
    var askNumberStr = confirm("Do you want to include numbers?");

    var numberStr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
    var totalChar = [...alphaLower]
    var finalPassword = []
    if (askSpecialChar === true) {
      totalChar.push(...specialChar)
    }
    if (askAlphaUpper === true) {
      totalChar.push(...alphaUpper)
    }
    if (askNumberStr === true) {
      totalChar.push(...numberStr)
    }
    for (let i = 0; i < charLength; i++) {
      var randomIndex = Math.floor(Math.random() * totalChar.length)
      finalPassword.push(totalChar[randomIndex])
    }
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