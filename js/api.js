// to GET data from server 
function loadData() {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data))
}
function loadToDos() {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => console.log(data))
}
function loadPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(resp => resp.json())
    .then(json => dataLoad(json));
}
function dataLoad(data) {
  console.log(data);
}
function loadUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => displayUsers(data))
}
function displayUsers(users) {
  for (const user of users) {
    console.log(user);
    const li = document.createElement('li');
    li.innerText = `Name: ${user.name}
    User Name: ${user.username} 
    Email: ${user.email}
    `;
    document.getElementById('user-list').appendChild(li);
  }
}