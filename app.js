const addBookButton = document.querySelector('.addBookButton');
const bookSection = document.querySelector('.bookSelection')
const submit = document.querySelector('.submit')

let myLibrary = [];


//constructor function
function Book() {
    this.title = '',
        this.author = '',
        this.genre = '',
        this.read = '',
}

function addBookToLibrary() {
    let newBook = new Book();

    newBook.title = bookForm.title.value;
    newBook.author = bookForm.author.value;
    newBook.genre = bookForm.genre.value;
    newBook.read = bookForm.read.value;

    myLibrary.push(newBook);
}
}

function appendBook(array) {
    for (i = 0; i < array.length; i++) {
        let newContainer = document.createElement('div')
        let heading = document.createElement('h2');
        let newTitle = document.createElement('p');
        let newAuthor = document.createElement('p');
        let newGenre = document.createElement('p');
        let hasRead = document.createElement('p');
        heading.textContent = `Book ${i + 1}`
        newTitle.textContent = array[i].title;
        newAuthor.textContent = array[i].author;
        newGenre.TextContent = array[i].genre;
        bookSection.append(newContainer);
        newContainer.append(heading);
        newContainer.append(newTitle);
        newContainer.append(newAuthor);
        newContainer.append(newGenre);
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

submit.addEventListener('click', function () {
    closeForm();
    addBookToLibrary();
    appendBook();

})

