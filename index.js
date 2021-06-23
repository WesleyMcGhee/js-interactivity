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
    message.textContent = `${e.target.parentNode.textContent.slice(0, -1)} deleted`;
    revealMessage();
}
form.addEventListener('submit', addMovie);
function crossOffMovie(e){
    e.target.classList.toggle('checked');
    if (e.target.classList.contains('checked') === true){
        message.textContent = `${e.target.textContent} watched.`;
    }else{
        message.textContent = 'Movie unchecked';
    }
    revealMessage();
}
function revealMessage(){
    message.classList.remove('hide');
    setTimeout(function(){
        message.classList.add('hide');
    }, 1000)
    
}