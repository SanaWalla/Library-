

const addBookButton = document.querySelector('.addBookButton');
const bookSection = document.querySelector('.bookSection');
const submit = document.querySelector('.submit');
const bookForm = document.querySelector('.bookForm');
const formSection = document.querySelectorAll('.formSection');
const read = document.querySelector('#read');
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
        const readStatus = document.createElement('input');
        readStatus.setAttribute('type', 'checkbox');
        readStatus.setAttribute('id', 'readStatus');
        let label = document.createElement('label');
        label.setAttribute('for', 'readStatus');
        label.innerHTML = 'Read: ';
        const remove = document.createElement('button');
        newTitle.textContent = `"${myLibrary[i].title}"`;
        newAuthor.textContent = `author: ${myLibrary[i].author}`;
        newGenre.textContent = `genre: ${myLibrary[i].genre}`;
        remove.textContent = 'remove';


        card.classList.add('card');
        newTitle.classList.add('newTitle', 'cardSection');
        newAuthor.classList.add('bookInfo', 'cardSection');
        newGenre.classList.add('bookInfo', 'cardSection');
        remove.classList.add('removeButton', 'cardSection');

        card.appendChild(newTitle);
        card.appendChild(newAuthor);
        card.appendChild(newGenre);
        card.appendChild(label);
        card.appendChild(readStatus);


        card.appendChild(remove);
        bookSection.appendChild(card);

        remove.addEventListener('click', function () {
            bookSection.removeChild(card);
        })
    }
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


