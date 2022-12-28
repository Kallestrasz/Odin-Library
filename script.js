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
    const status = statusInput.checked;
    const newBook = new Book(title, author, pages, status);
    myLibrary.push(newBook);
}

let editStatus = false;
let editIndex;

function createBook(item) {
    const container = document.querySelector(".flex-container");
    const buttonContainer = document.createElement("div");
    const bookDiv = document.createElement("div");
    const titleDiv = document.createElement("div");
    const authDiv = document.createElement("div");
    const pageDiv = document.createElement("div");
    const removeBtn = document.createElement("button");
    const statusBtn = document.createElement("button");
    const editBtn = document.createElement("button");

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

    removeBtn.classList.add("remove-button", "card-button");
    statusBtn.classList.add("status-button","card-button");
    editBtn.classList.add("edit-button","card-button");

    removeBtn.innerText = "Delete";
    statusBtn.innerText = "Status";
    editBtn.innerText = "Edit";

    removeBtn.addEventListener("click", (event) => {
        const bookCards = Array.from(document.querySelectorAll(".book-card"));
        const i = bookCards.indexOf(event.target.parentNode.parentNode);
        myLibrary.splice(i,1);
        display();
    });

    statusBtn.addEventListener("click", () => {
        if(item.status == true){
                item.status = false;
                display();
        }
         else{
             item.status = true;
             display();
        }
    });

    editBtn.addEventListener("click", (event) => {
        const bookCards = Array.from(document.querySelectorAll(".book-card")); 
        editIndex = bookCards.indexOf(event.target.parentNode.parentNode);
        editStatus = true;
        display();
    });

    if(item.status == true){
        statusBtn.style.backgroundColor = "green";
        statusBtn.innerText = "Read"
    }
    else{
        statusBtn.style.backgroundColor = "red";
        statusBtn.innerText = "Not read"
    }

    if(editStatus){
        editBtn.style.backgroundColor = "blue";
    }
    else{
        editBtn.style.backgroundColor = "grey";
    }

    buttonContainer.appendChild(editBtn); 
    buttonContainer.appendChild(removeBtn);
    buttonContainer.appendChild(statusBtn);
}

form.addEventListener("submit", (event) =>{
    if(editStatus){
        myLibrary[editIndex].title = titleInput.value;
        myLibrary[editIndex].author = authorInput.value;
        myLibrary[editIndex].pages = pagesInput.value;
        myLibrary[editIndex].status = statusInput.checked;
        editStatus = false;
        editIndex = null;
    }
    else{
        addBookToLibrary();
    }
    event.preventDefault();
    form.reset()
    display();
})

display();