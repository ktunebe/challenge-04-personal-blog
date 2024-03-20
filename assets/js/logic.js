// Select element variables
const lightDarkButton = document.querySelector('#light-dark-button');
const body = document.querySelector('body');

// Set empty array for post collection and variable for light/dark mode
let postCollection = [];
let mode;

// Initialize post collection and light/dark mode by checking for local storage 
function init() {
    let storedPosts = JSON.parse(localStorage.getItem('postCollection'));
    if (storedPosts !== null) {
        postCollection = storedPosts;
    }
    let storedMode = localStorage.getItem('mode');
    if (storedMode !== null) {
        mode = storedMode;
    } else {
        mode = 'light';
        localStorage.setItem('mode', 'light');
    }

    if (mode === 'light') {
        lightDarkButton.textContent = '😎';
        body.className = 'light';
    } else {
        lightDarkButton.textContent = '🌚'
        body.className = 'dark';
    }
}


// Light/dark mode toggle
lightDarkButton.addEventListener('click', function (event) {
    let mode = localStorage.getItem('mode');
    if (mode === 'light') {
        body.className = 'dark';
        lightDarkButton.textContent = '🌚'
        localStorage.setItem('mode', 'dark')
    } else {
        body.className = 'light';
        lightDarkButton.textContent = '😎'
        localStorage.setItem('mode', 'light')
    }  
})

init();