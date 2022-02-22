function loadComments() {
  fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => displayComments(data))
}
// displaying the object property and values of data that got from server in web site UI
loadComments();
function displayComments(comments) {
  const commentSection = document.getElementById('comment-section');
  for (const comment of comments) {
    const div = document.createElement('div');
    div.classList.add('comment');
    div.innerHTML = `
    <div class="ids">
    <h2>${comment.postId}</h2>
    <h2>${comment.id}</h2>
    </div>
    <h3>Name: ${comment.name} (Email: ${comment.email})</h3>
    <p>${comment.body}</p>
    `
    commentSection.appendChild(div)
  }
}
loadComments();