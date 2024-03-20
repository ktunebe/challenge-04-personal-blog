// Select element variables
const lightDarkButton = document.querySelector('#light-dark-button');
const body = document.querySelector('body');

// Set empty array for post collection
let postCollection = [];

// Initialize post collection by checking for local storage 
function init() {
    let storedPosts = JSON.parse(localStorage.getItem('postCollection'));
    if (storedPosts !== null) {
        postCollection = storedPosts;
    }
    return postCollection;
}

// Light/dark mode toggle
lightDarkButton.textContent = `😎`
lightDarkButton.addEventListener('click', function (event) {
    if (body.className === 'light') {
        body.className = 'dark';
        lightDarkButton.textContent = '🌚'
    } else {
        body.className = 'light';
        lightDarkButton.textContent = `😎`
    }  
})

init();