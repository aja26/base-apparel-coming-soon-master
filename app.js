const input = document.getElementById('input');
const span = document.getElementById('span');
const form = document.getElementById('form');
const input_container = document.querySelector('.input-container');

// console.log(input, btn);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = input.value;

    if(email === '' || !email.includes('@')){
        console.log('no email');
        errorDetected();
    }
    else{
        console.log('email listed');
        removeError();
    }
})

function errorDetected(){
    input_container.classList.add('error');
    span.classList.add('error');
}

function removeError(){
    input_container.classList.remove('error');
    span.classList.remove('error');
}

window.addEventListener('load', () => {
    input.value = '';
})
