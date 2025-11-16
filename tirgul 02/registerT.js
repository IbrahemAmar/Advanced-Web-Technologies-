document.getElementById('registerForm').addEventListener('submit', function(event){
    event.preventDefault();


const username = document.getElementById('username').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const confirmPassword = document.getElementById('confirmPassword').value;
const dob = document.getElementById('dob').value;
const messageElement = document.getElementById('registerMessage');

if(password !== confirmPassword){
    messageElement.textContent = 'Passwords do not match';
    messageElement.className = 'text-red-500';
}

let users = JSON.parse(localStorage.getItem('users')) || [];  //get the users from local storage

//check if there is username or email already exists



});