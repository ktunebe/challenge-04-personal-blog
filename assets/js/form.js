// Set document element variables
const userNameInput = document.querySelector('#user-name');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit-button');
const form = document.querySelector('#blog-form');

// Redirect function
function redirect() {
    window.location.href='blog.html';
}

// Submission button event
submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    const blogPost = {
        userName: userNameInput.value.trim(),
        title: titleInput.value.trim(),
        content: contentInput.value.trim(),
    };

    if (userNameInput.value === "" || titleInput.value === "" || contentInput.value === "") {
        alert('Must fill in all fields to submit');
        return;
    } else {
        postCollection.push(blogPost);
        localStorage.setItem('postCollection', JSON.stringify(postCollection)); 
        form.reset();
        redirect();
    }
});

// Initialize on startup
// init();
