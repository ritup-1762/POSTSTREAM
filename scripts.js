// Function to create a new blog post
document.getElementById('postButton').addEventListener('click', function() {
    let title = document.getElementById('blogTitle').value;
    let content = document.getElementById('blogContent').value;

    // Validate inputs
    if (title === "" || content === "") {
        alert("Please fill out both fields!");
        return;
    }

    // Create a new blog post div
    let postDiv = document.createElement('div');
    postDiv.classList.add('post');

    // Create title and content elements
    let postTitle = document.createElement('h3');
    postTitle.innerText = title;
    let postContent = document.createElement('p');
    postContent.innerText = content;

    // Append title and content to post div
    postDiv.appendChild(postTitle);
    postDiv.appendChild(postContent);

    // Append post div to posts section
    document.getElementById('posts').appendChild(postDiv);

    // Clear input fields after posting
    document.getElementById('blogTitle').value = '';
    document.getElementById('blogContent').value = '';
});
