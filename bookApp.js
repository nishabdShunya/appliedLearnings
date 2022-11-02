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
        // If you want to display on the website
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} | ${emailInput.value} | ${dateInput.value} | ${timeInput.value}`));
        bookedUsers.appendChild(li);

        // If you want to store in the local storage
        // localStorage.setItem('userAppointmentDetails',`${nameInput.value} | ${emailInput.value} | ${dateInput.value} | ${timeInput.value}`);

        // If you want to store the user details as an object in the local storage
        const user = {
            name: nameInput.value,
            email: emailInput.value,
            dateOfAppointment: dateInput.value,
            timeOfAppointment: timeInput.value
        }
        localStorage.setItem('userAppointmentDetails', JSON.stringify(user));

        // Clearing the fields
        nameInput.value = '';
        emailInput.value = '';
        dateInput.value = '';
        timeInput.value = '';
    }
}