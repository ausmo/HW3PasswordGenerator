let generateBtn = document.querySelector("#generate");

let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let UpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numCase = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialCase = ["!", "@", "#", "$", "%", "^", "&", "*", "(",];
let comboArray = [];

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
  comboArray = [];
}
//The following function generates how long the password will be. If the value isn't between 8-128 the function will run again.

function getPasswordLength() {
  let amountCharacters = window.prompt("How many characters would you like to include? 8-128");
  if (amountCharacters > 128 || amountCharacters < 8) {
    window.alert("Password must contain 8-128 characters");
    return getPasswordLength()
  }
  return Number.parseInt(amountCharacters);

}

//The following 4 functions make popup windows which run if needed.

function getLowerCase() {
  let lowerChoice = window.confirm("Do you want your password to contain lowercase letters?")
  if (lowerChoice) {
    return lowerChoice
  }
  return null;
}

function getUpperCase() {
  let upperChoice = window.confirm("Do you want your password to contain uppercase letters?");
  if (upperChoice) {
    return upperChoice
  }
  return null;
}

function getNumCase() {
  let numChoice = window.confirm("Do you want your password to contain numbers?");
  if (numChoice) {
    return numChoice
  }
  return null;
}

function getSpecialCase() {
  let specialChoice = window.confirm("Do you want your password to contain special characters?");
  if (specialChoice) {
    return specialChoice
  }
  return null;
}

//The following takes everything and puts it together to make it all work
function generatePassword() {

    let password = "";
    let passwordLength = getPasswordLength()
    let hasLowerCase = getLowerCase()
    let hasUpperCase = getUpperCase()
    let hasNumCase = getNumCase()
    let hasSpecialCase = getSpecialCase()
  
  
    if (hasLowerCase) {
         comboArray = comboArray.concat(lowerCase)
  
      }if(hasUpperCase){
        comboArray = comboArray.concat(UpperCase)
  
      }if(hasSpecialCase){
        comboArray = comboArray.concat(specialCase)
  
      }if(hasNumCase){
        comboArray = comboArray.concat(numCase)
      }
  
      for (let i = 0; i < passwordLength; i++) {
      
        let randomNumber = Math.floor(Math.random() * comboArray.length)
        let randomLetter = comboArray[randomNumber]
        password += randomLetter;
  
  
  
  
  }
  return password;
  }
  
  
  generateBtn.addEventListener("click", writePassword);