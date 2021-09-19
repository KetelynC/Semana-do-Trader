function validation() {
    let getEmail = document.getElementById("email")
    let inputEmail = getEmail.value;

    let getInput = document.getElementById("celNumber");
    let input = getInput.value;

    if (isNaN(input)) {  
        getInput.style.color = "#ff0000";
        return false;  
 } else if((input.length) > 11 || (input.length < 11)) {
        getInput.style.color = "#ff0000";
        return false;
    }else if (inputEmail.indexOf("@") == 0 || (inputEmail.charAt(inputEmail.length - 4) != '.') && (inputEmail.charAt(inputEmail.length - 3) != '.')) {
        getEmail.style.color = "#ff0000";
        return false;
    }else {
        getEmail.style.color = "#000";
        getInput.style.color = "#000";
        return true;
    }
}

