let form = document.forms.form;
let titleInput = form.elements.title;
let authorInput = form.elements.author;
let pagesInput = form.elements.pages;
let statusInput = form.elements.status;

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

function display() {
    const container = document.querySelector(".flex-container");
    const books = document.querySelectorAll(".book-card");
    books.forEach(book => container.removeChild(book));
    for (let i=0; i<myLibrary.length; i++){
        createBook(myLibrary[i]);
    }
}

function addBookToLibrary() {
    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const status = statusInput.value;
    const newBook = new Book(title, author, pages, status);
    myLibrary.push(newBook);
}

 function createBook(item) {
    const container = document.querySelector(".flex-container");
    const buttonContainer = document.createElement("div");
    const bookDiv = document.createElement("div");
    const titleDiv = document.createElement("div");
    const authDiv = document.createElement("div");
    const pageDiv = document.createElement("div");

    titleDiv.innerText = item.title;
    authDiv.innerText = item.author;
    pageDiv.innerText = item.pages + " pages";

    bookDiv.classList.add("book-card")
    buttonContainer.classList.add("button-container")
    
    container.appendChild(bookDiv);
    bookDiv.appendChild(titleDiv);
    bookDiv.appendChild(authDiv);
    bookDiv.appendChild(pageDiv);
    bookDiv.appendChild(buttonContainer);

}

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    addBookToLibrary();
    form.reset()
    display();
})

display();