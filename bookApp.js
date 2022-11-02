const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const dateInput = document.querySelector('#date');
const timeInput = document.querySelector('#time');
const msg = document.querySelector('.msg');
const bookedUsers = document.querySelector('#booked-users');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault();
    if (nameInput.value === '' || emailInput.value === '' || dateInput.value === '' || timeInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = '<sup>*</sup>Please enter all the fields';
        setTimeout(() => { msg.remove() }, 5000);
    }
    else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} | ${emailInput.value} | ${dateInput.value} | ${timeInput.value}`));
        bookedUsers.appendChild(li);
        // Clearing the fields
        nameInput.value = '';
        emailInput.value = '';
        dateInput.value = '';
        timeInput.value = '';
    }
}