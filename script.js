let form = document.forms.forma;
let titleInput = form.elements.title;
let authorInput = form.elements.author;
let pagesInput = form.elements.pages;
let statusInput = form.elements.status;
let button = form.elements.input;

let myLibrary = [{ 
    title: "Nineteen Eighty-Four",
    author: "George Orwell",
    pages: 328,
    status: false
}];

class Book {
    constructor(title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
        this.template;
    }
}

function addBookToLibrary() {
    let title = titleInput.value;
    let author = authorInput.value;
    let pages = pagesInput.value;
    let status = statusInput.value;
    let newBook = new Book(title, author, pages, status);
    myLibrary.push(newBook);
}

form.addEventListener('submit', addBookToLibrary());


