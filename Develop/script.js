// Password Length 
var generatePassword = function(){
    var passwordLength = prompt("Password Length: Please enter a value between 8 and 128 characters.");
    var passwordLength = parseInt(passwordLength);
    console.log("Password length: " + passwordLength + "characters.");

    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
        return generatePassword();
    }

// Creating Password
var passwordCreate = passwordGenerated();
console.log(passwordCreate)
var inputPassword = "";
for (var i = 0, n = passwordCreate.length; i < passwordLength; i++){
    inputPassword += passwordCreate[Math.floor(Math.random() * n)];
}
console.log("Your generated password is: " + inputPassword);
return inputPassword;
}

// Password Requirements
var passwordGenerated = function(){
    var passwordLowerCase = confirm('Please select "Ok" for your password to contain Lower Case characters, or "Cancel" to eliminate Lower Case characters.');
    if (!passwordLowerCase){
        passwordLowerCase = "";
    } else{
        passwordLowerCase = "abcdefghijklmnopqrstuvwxyz";
    }

    var passwordUpperCase = confirm('Please select "Ok" for your password to contain Upper Case characters, or "Cancel" to eliminate Upper Case characters.');
    if (!passwordUpperCase){
        passwordUpperCase = ""
    } else{
        passwordUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    var passwordNumbers = confirm('Please select "Ok" for your password to contain numerical characters, or "Cancel" to eliminate numerical characters.');
    if (!passwordNumbers){
        passwordNumbers = "";
    } else{
        passwordNumbers = "0123456789";
    }

    var passwordSpecialCharacters = confirm('Please select "Ok" for your password to contain special characters, or "Cancel" to eliminate special characters.');
    if (!passwordSpecialCharacters){
        passwordSpecialCharacters = ""
    } else {
        passwordSpecialCharacters = "@%+\/'!#$^?:.(){}[]~-_,";
    }

    // Creating a variable to combine the password requirements

    var passwordString = passwordLowerCase + passwordUpperCase + passwordNumbers + passwordSpecialCharacters

    if(passwordString.length > 0){
        console.log("The password requirements are: " + passwordString);
        return passwordString;
    } else{
        window.alert("Please select at least one password requirement to generate your password.");
        return passwordString();
    }
}

// Generate Password Button
var generateButton = document.querySelector("#generate");

function showPassword(){
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Event Listener
generateButton.addEventListener("click", showPassword);
