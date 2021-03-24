const addBookButton = document.querySelector('.addBookButton');
const bookSection = document.querySelector('.bookSection');
const submit = document.querySelector('.submit');

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
    console.log(myLibrary);
    appendBook();
}

function appendBook() {
    for (let i = 0; i < myLibrary.length; i++) {
        const card = document.createElement('div');
        const newTitle = document.createElement('h3');
        const newAuthor = document.createElement('h3');
        const newGenre = document.createElement('h3');
        const status = document.createElement('h4');
        newTitle.textContent = myLibrary[i].title;
        newAuthor.textContent = `author: ${myLibrary[i].author}`;
        newGenre.textContent = `genre: ${myLibrary[i].genre}`;

        if (read === 'on') {
            status.textContent = 'Status: read'
        } else {
            status.textContent = 'Status: in progress'
        }
        card.appendChild(newTitle);
        card.appendChild(newAuthor);
        card.appendChild(newGenre);
        card.appendChild(status);
        bookSection.appendChild(card);
    }
}


function openForm() {
    document.getElementById('openForm').style.display = "block"
}

function closeForm() {
    document.getElementById('openForm').style.display = "none"
}

addBookButton.addEventListener('click', function () {
    openForm()

})

submit.addEventListener('click', function (e) {
    e.preventDefault();
    addBookToLibrary();
    closeForm();
    console.log(myLibrary);
})

