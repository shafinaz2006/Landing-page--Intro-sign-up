
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const form = document.querySelector('#pageform');
const formDiv = document.querySelector('#form');
const formChildren = document.querySelectorAll('input');


const clearInput = function(e){

    e.target.classList.remove('requiredImage');
    e.target.parentNode.nextElementSibling.textContent = '';

}

function checkFill(input){

    const value = input.value;

    const placeholder = input.placeholder;

    if(value.length=== 0){

        input.classList.add('requiredImage');

        input.parentNode.nextElementSibling.classList.add('requiredP');

        input.parentNode.nextElementSibling.textContent = `${placeholder} cannot be empty`;

        formDiv.style.height = '80%';

        return false;
    }
    if(input === email){

        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!regex.test(value)){

            input.value = value;
            input.classList.add('requiredImage');
            input.parentNode.nextElementSibling.classList.add('requiredP');
            input.parentNode.nextElementSibling.textContent = 'Looks like this is not an email';

            return false;

        }  
    }

    return true;
}

const checkComplete = function(e){

    e.preventDefault();

    checkFill(firstName);
    checkFill(lastName);
    checkFill(email);
    checkFill(password);

    if(checkFill(firstName) && checkFill(lastName) && checkFill(email) && checkFill(password)){
        
        alert('You can start your free trial');

        window.location.reload(); // reloads the page
        
    }
}

form.addEventListener('submit', checkComplete);
firstName.addEventListener('input', clearInput);
lastName.addEventListener('input', clearInput);
email.addEventListener('input', clearInput);
password.addEventListener('input', clearInput);