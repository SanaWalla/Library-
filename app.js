const addButton = document.querySelector('.addButton');


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