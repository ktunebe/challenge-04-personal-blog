const main = document.querySelector('#container');
const postDiv = document.createElement('div');
postDiv.className = 'post-container';
const postTitle = document.createElement('h2');
postTitle.className = 'post-title';
const postContent = document.createElement('p');
postContent.className = 'post-content';
const postUserName = document.createElement('span');
postUserName.className = 'post-user-name';

// Display all added posts
function displayPosts() {
    for (const post of postCollection) {
        postDiv.appendChild(postTitle);
        postTitle.textContent = post.title;
        postDiv.appendChild(postContent);
        postContent.textContent = post.content;
        postDiv.appendChild(postUserName);
        postUserName.textContent = post.userName;

        main.appendChild(postDiv.cloneNode(true));
    }
}

 displayPosts();




