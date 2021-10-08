let email = document.querySelector('.email');
let password = document.querySelector('.password');
//error message selection start 
let email_error = document.querySelector('.email_error');
let pass_error = document.querySelector('.pass_error');
//error message selection ends 

// normal validation of email & password start

function validation() {
    if (email.value.length < 6) {
        email.style.border = '2px solid red';
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    else if (password.value.length < 6) {
        password.style.border = '2px solid red';
        pass_error.style.display = 'block';
        password.focus();
        return false;
    }
}
// normal validation of email & password end

//finall validation start
email.addEventListener('textInput', myEmail);
password.addEventListener('textInput', myPass);

function myEmail() {
    if (email.value.length >= 10) {
        email.style.border = "1px solid silver";
        email_error.style.display = "none";
        return true;
    }
}
function myPass() {
    if (password.value.length >= 6) {
        password.style.border = "1px solid silver";
        pass_error.style.display = "none";
        return true;
    }
}
//finall validation ends