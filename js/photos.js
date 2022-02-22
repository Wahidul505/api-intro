function loadPhotos() {
  fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => displayPhotos(data))
}
loadPhotos();
function displayPhotos(photos) {
  const photoContainer = document.getElementById('photos');
  for (const photo of photos) {
    const div = document.createElement('div');
    div.classList.add('photo');
    div.innerHTML = `
    <a target="_blank" href="${photo.thumbnailUrl}">
    <img src="${photo.url}">
    </a>
    `
    photoContainer.appendChild(div)
  }
}