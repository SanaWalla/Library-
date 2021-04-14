

const addBookButton = document.querySelector('.addBookButton');
const bookSection = document.querySelector('.bookSection');
const submit = document.querySelector('.submit');
const bookForm = document.querySelector('.bookForm');
const formSection = document.querySelectorAll('.formSection');
const readForm = document.querySelector('.readForm');
const xForm = document.querySelector('.xForm');

let myLibrary = [];


function Book(title, author, genre, read) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.read = read;
}

function addBookToLibrary() {
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const genre = document.querySelector('#genre').value
    const read = document.querySelector('#read').value


    let newBook = new Book(title, author, genre, read);

    myLibrary.push(newBook);

    appendBook();
}

function appendBook() {
    for (let i = 0; i < myLibrary.length; i++) {
        const card = document.createElement('div');
        const newTitle = document.createElement('h2');
        const newAuthor = document.createElement('h4');
        const newGenre = document.createElement('h4');
        const readButton = document.createElement('button');
        const remove = document.createElement('button');
        newTitle.textContent = `"${myLibrary[i].title}"`;
        newAuthor.textContent = `author: ${myLibrary[i].author}`;
        newGenre.textContent = `genre: ${myLibrary[i].genre}`;
        remove.textContent = 'remove';

        readButton.addEventListener('click', function(){
            if (read === 'on'){
                readButton.textContent = read;
                readButton.body.style.backgroundColor="#f6fff8"
            } else {
                readButton.textContent = Not Read;
                readButton.body.style.backgroundColor="#a4c3b2"
            }
        })

        card.classList.add('card');
        newTitle.classList.add('newTitle', 'cardSection');
        newAuthor.classList.add('bookInfo', 'cardSection');
        newGenre.classList.add('bookInfo', 'cardSection');
        remove.classList.add('removeButton', 'cardSection');

        card.appendChild(newTitle);
        card.appendChild(newAuthor);
        card.appendChild(newGenre);
        // card.appendChild(label);
        card.appendChild(read);


        card.appendChild(remove);
        bookSection.appendChild(card);

        remove.addEventListener('click', function () {
            bookSection.removeChild(card);
        })



    }
}

function toggle(read, card) {
    if (read.checked === true) card.classList.add('dark');
    if (read.checked === false) card.classList.add('light');
}

function resetForm() {
    formSection.forEach(forms => {
        forms.value = '';
    })
}

function openForm() {
    document.getElementById('openForm').style.display = "block"
}

function closeForm() {
    document.getElementById('openForm').style.display = "none"
}

xForm.addEventListener('click', function (e) {
    e.preventDefault();
    closeForm()
})

addBookButton.addEventListener('click', function () {
    myLibrary = [];
    resetForm();
    openForm()
})

submit.addEventListener('click', function (e) {
    e.preventDefault();
    addBookToLibrary();
    closeForm();
})

const allReads = document.querySelectorAll('checkbox');
allReads.forEach(function (read) {
    if (read.checked === true) read.classList.add('dark');
    if (read.checked === false) read.classList.add('light');
})

