const form = document.querySelector('form');
let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');
let dateInput = document.querySelector('#date');
let timeInput = document.querySelector('#time');
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
        // Creating the user object
        const userObj = {
            name: nameInput.value,
            email: emailInput.value,
            date: dateInput.value,
            time: timeInput.value
        }

        // Storing user object in the local storage
        localStorage.setItem(userObj.email, JSON.stringify(userObj));

        // Calling function for displaying user on webpage
        displayUser(userObj);

        // Clearing the fields
        nameInput.value = '';
        emailInput.value = '';
        dateInput.value = '';
        timeInput.value = '';
    }
}

window.addEventListener('DOMContentLoaded', () => {
    Object.keys(localStorage).forEach((key) => {
        displayUser(JSON.parse(localStorage[key]));
    })
})

function displayUser(user) {
    if (localStorage.getItem(user.email) !== null) {
        stopDisplay(user.email);
    }
    const userDetails = `<li id=${user.email}> By: ${user.name} (${user.email})  |  Slot: ${user.date} (${user.time}) 
                        <div><button id="del-btn" onClick="deleteUser('${user.email}')">DELETE</button><button id="edit-btn" onClick="editUser('${user.name}','${user.email}','${user.date}','${user.time}')">EDIT</button></div></li>`
    bookedUsers.innerHTML = bookedUsers.innerHTML + userDetails;
}

function deleteUser(email) {
    localStorage.removeItem(email);
    stopDisplay(email);
}

function stopDisplay(email) {
    const removeUser = document.getElementById(email);
    if (removeUser) {
        bookedUsers.removeChild(removeUser);
    }
}

function editUser(name, email, date, time) {
    nameInput.value = name;
    emailInput.value = email;
    dateInput.value = date;
    timeInput.value = time;
    deleteUser(email);
}