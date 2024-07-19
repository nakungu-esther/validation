//collecting user inputs and storing them in variables
const userInput = {
    username: document.getElementById('username').value,
    email: document.getElementById('email').value,
    role: document.getElementById('roles').value,
    branch: document.getElementById('branch').value,
    password: document.getElementById('password').value,
    confirmpassword: document.getElementById('confirmpassword').value,
}
// Function to validate email
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    if (!regex.test(email)) {
        alert('Invalid email address!');
        return false;
    }
    return true;
};


//checking if password matches confirm password
function checkpassword(password, confirmpassword) {
    if (password !== confirmpassword) {
        alert('Passwords do not match!');
        return false;
    }
    return true;
}

// Function to check if all required fields are filled
function checkUserInputs({ username, email, role, branch, password, confirmpassword })  {
    if (!username || !email || !role || !branch || !password || !confirmpassword) {
        alert('All fields are required!');
        return false;
    }
    return true;
};

// getting the submit button
let submitButton = document.getElementById('submit');

// adding event listener to the submit button

submitButton.addEventListener('click', function (event) {
    event.preventDefault(); // preventing the form from submitting normally

    if ( !checkpassword(userInput.password, userInput.confirmpassword) || !checkUserInputs(userInput)) {
        return; // if any of the validations fail, return without submitting the form
    }

    console.log('submit form successfully')

    // resetting the form
    document.getElementById('form').reset();
});