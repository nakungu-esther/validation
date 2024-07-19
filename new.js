document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const submitButton = document.getElementById('submit');

    // Function to collect user inputs
    const getUserInputs = () => {
        return {
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            role: document.getElementById('roles').value,
            branch: document.getElementById('branch').value,
            password: document.getElementById('password').value,
            confirmpassword: document.getElementById('confirmpassword').value
        };
    };

    // Function to validate email
    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
        if (!regex.test(email)) {
            alert('Invalid email address!');
            return false;
        }
        return true;
    };

    // Function to check if password matches confirm password
    const checkPassword = (password, confirmpassword) => {
        if (password !== confirmpassword) {
            alert('Passwords do not match!');
            return false;
        }
        return true;
    };

    // Function to check if all required fields are filled
    const checkUserInputs = ({ username, email, role, branch, password, confirmpassword }) => {
        if (!username || !email || !role || !branch || !password || !confirmpassword) {
            alert('All fields are required!');
            return false;
        }
        return true;
    };

    // Event listener for the submit button
    submitButton.addEventListener('click', (event) => {
        event.preventDefault(); // Preventing the form from submitting normally

        const userInput = getUserInputs();

        if (!validateEmail(userInput.email) || !checkPassword(userInput.password, userInput.confirmpassword) || !checkUserInputs(userInput)) {
            return; // If any of the validations fail, return without submitting the form
        }

        console.log('submit form successfully');

        // Resetting the form
        form.reset();
    });
});
