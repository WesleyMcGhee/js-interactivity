const form = document.querySelector('form');
const message = document.querySelector('#message');
function addMovie(e){
    e.preventDefault();
    const inputFeild = document.querySelector('input');
    const movie = document.createElement('li');
    const movieTitle = document.createElement('span');
    const ul = document.querySelector('ul');
    movieTitle.textContent = inputFeild.value;
    movieTitle.addEventListener('click', crossOffMovie);
    movie.appendChild(movieTitle);
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.addEventListener('click', deleteMovie);
    ul.appendChild(movie);
    movie.appendChild(deleteBtn);
    inputFeild.value = " "
}
function deleteMovie(e){
    e.target.parentNode.remove();
    message.textContent = "Movie Deleted";
}
form.addEventListener('submit', addMovie);
function crossOffMovie(e){
    e.target.classList.toggle('checked');
    if (e.target.classList.contains('checked') === true){
        message.textContent = 'Movies checked';
    }else{
        message.textContent = 'Movie unchecked';
    }
}