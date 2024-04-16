document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');
    const country = document.getElementById('country');
    const gender = document.getElementsByName('gender');
    const hobbies = document.getElementsByName('hobbies');
    const password = document.getElementById('password');
    const cpassword = document.getElementById('cpassword');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (validateForm()) {
            successMessage.innerText = "Form submitted successfully!";
            form.reset();
        }
    });

    function validateForm() {
        let isValid = true;

       
        if (username.value.trim() === '') {
            setErrorFor(username, 'Username cannot be blank');
            isValid = false;
        } else {
            setSuccessFor(username);
        }

   
        if (phone.value.trim() !== '' && !isValidPhone(phone.value.trim())) {
            setErrorFor(phone, 'Invalid phone number');
            isValid = false;
        } else {
            setSuccessFor(phone);
        }


        if (email.value.trim() === '') {
            setErrorFor(email, 'Email cannot be blank');
            isValid = false;
        } else if (!isValidEmail(email.value.trim())) {
            setErrorFor(email, 'Invalid email address');
            isValid = false;
        } else {
            setSuccessFor(email);
        }

        if (country.value.trim() === '') {
            setErrorFor(country, 'Please select a country');
            isValid = false;
        } else {
            setSuccessFor(country);
        }


        let genderChecked = false;
        gender.forEach(function (radio) {
            if (radio.checked) {
                genderChecked = true;
            }
        });
        if (!genderChecked) {
            setErrorFor(gender[0], 'Please select a gender');
            isValid = false;
        } else {
            setSuccessFor(gender[0]);
        }

        
       // Hobbies validation
// Hobbies validation
let checkedCount = 0;
hobbies.forEach(function (checkbox) {
    if (checkbox.checked) {
        checkedCount++;
    }
});

if (checkedCount === 0) {
    setErrorFor(hobbies[0], 'Please select at least one hobby');
    isValid = false;
} else {
    setSuccessFor(hobbies[0]);
}



       
        if (password.value.trim() === '') {
            setErrorFor(password, 'Password cannot be blank');
            isValid = false;
        } else if (password.value.trim().length < 8) {
            setErrorFor(password, 'Password must be at least 8 characters long');
            isValid = false;
        } else {
            setSuccessFor(password);
        }


        // Confirm Password validation
        if (cpassword.value.trim() === '') {
            setErrorFor(cpassword, 'Confirm Password cannot be blank');
            isValid = false;
        } else if (password.value.trim() !== cpassword.value.trim()) {
            setErrorFor(cpassword, 'Passwords do not match');
            isValid = false;
        } else {
            setSuccessFor(cpassword);
        }

        return isValid;
    }

    function setErrorFor(input, message) {
        const errorDiv = input.parentElement.querySelector('.error');
        errorDiv.innerText = message;
        input.classList.add('error-input');
    }

    function setSuccessFor(input) {
        const errorDiv = input.parentElement.querySelector('.error');
        errorDiv.innerText = '';
        input.classList.remove('error-input');
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidPhone(phone) {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }
});


