

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
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const genre = document.querySelector('#genre').value;
    const read = document.querySelector('#read').checked;


    let newBook = new Book(title, author, genre, read);

    myLibrary.push(newBook);

    appendBook(myLibrary);

    bookForm.reset();
}

function appendBook(library) {
    for (let i = 0; i < library.length; i++) {
        const card = document.createElement('div');
        const newTitle = document.createElement('h2');
        const newAuthor = document.createElement('h4');
        const newGenre = document.createElement('h4');
        const readButton = document.createElement('button');
        const remove = document.createElement('button');
        newTitle.textContent = `"${library[i].title}"`;
        newAuthor.textContent = `author: ${library[i].author}`;
        newGenre.textContent = `genre: ${library[i].genre}`;
        remove.textContent = 'remove';

        card.classList.add('card');
        newTitle.classList.add('newTitle', 'cardSection');
        newAuthor.classList.add('bookInfo', 'cardSection');
        newGenre.classList.add('bookInfo', 'cardSection');
        remove.classList.add('removeButton', 'cardSection');
        readButton.classList.add('readButton')

        card.appendChild(newTitle);
        card.appendChild(newAuthor);
        card.appendChild(newGenre);
        card.appendChild(readButton);

        console.log(library[i].read);

        if (library[i].read === true) {
            readButton.textContent = "Read";
            readButton.style.backgroundColor = "#fcfcfc"
        } else {
            readButton.textContent = "Not Read";
            readButton.style.backgroundColor = "#ffe1a8"
        }

        card.appendChild(remove);
        bookSection.appendChild(card);

        remove.addEventListener('click', function () {
            bookSection.removeChild(card);
        })

        readButton.addEventListener('click', () => {
            library[i].read = !library[i].read;
            if (library[i].read) {
                readButton.textContent = "Read";
                readButton.style.backgroundColor = "#fcfcfc"
            } else {
                readButton.textContent = "Not Read";
                readButton.style.backgroundColor = "#ffe1a8"
            }
        })

    }
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
    openForm()
})

submit.addEventListener('click', function (e) {
    e.preventDefault();
    addBookToLibrary();
    closeForm();
})


