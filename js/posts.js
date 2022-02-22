function loadPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(resp => resp.json())
    .then(data => displayPosts(data))
}

function displayPosts(posts) {
  const postContainer = document.getElementById('post-container');
  for (const post of posts) {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');
    postDiv.innerHTML = `
    <h2 class="center">${post.id}</h2>
    <h3>${post.title} </h3>
    <p> ${post.body} </p>
    `
    postContainer.appendChild(postDiv);
  }
  console.log(posts);
}
loadPosts();


function addPost() {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
