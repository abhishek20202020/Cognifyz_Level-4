document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('colorButton');
    button.addEventListener('click', () => {
        document.body.style.backgroundColor = getRandomColor();
    });
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

async function fetchApi(){
    try{
         const response = await fetch("https://api.github.com/users/abhishek20202020");
         console.log("Before Convert JSON Format");
         console.log(response);

         const data = await response.json();  // JSON format convert 
         console.log("After Convert JSON Format");
         console.log(data);  // original API

         const container = document.querySelector('.container');
        
         let para1 = document.createElement('p');
         para1.innerHTML = `Before change Login id is : ${data.login}`;
         container.appendChild(para1);
         data.login = "Ankit Gupta";
        
         let para2 = document.createElement('p');
         para2.innerHTML = `After change Login id is : ${data.login}`;
         container.appendChild(para2);
        
         console.log(data); // After change some data in API
    }
    catch(error){
         console.log(error);
    }
}
fetchApi();
  

document.getElementById('contactform').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    clearErrors();

    let isValid = true;
    
    const name = document.getElementById('name').value.trim();
    if (name === '') {
        showError('nameError', 'Name is required');
        isValid = false;
    }

    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === '') {
        showError('emailError', 'Email is required');
        isValid = false;
    } else if (!emailPattern.test(email)) {
        showError('emailError', 'Email is not valid');
        isValid = false;
    }

    const password = document.getElementById('password').value.trim();
    if (Password === '') {
        showError('passwordError', 'Password is required');
        isValid = false;
    } else if (password.length < 6) {
        showError('passwordError', 'Password must be at least 6 characters');
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        document.getElementById('contactform').reset();
    }
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.visibility = 'visible';
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => {
        error.textContent = '';
        error.style.visibility = 'hidden';
    });
}

