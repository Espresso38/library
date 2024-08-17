const myLibrary = [];

function Book(author, title, page) {
    this.author = author;
    this.title = title;
    this.page = page;
}

function addBook(author, title, page) {
    const newBook = new Book(author, title, page);
    myLibrary.push(newBook);
    displayBooks();
}

function displayBooks() {
    const libraryDiv = document.getElementById("container");
    libraryDiv.innerHTML = "";

    myLibrary.forEach((book, index) => {
        const bookDiv = document.createElement("div");
        bookDiv.className = "card";
        bookDiv.innerHTML = `
            <p>${book.author}</p>
            <p>${book.title}</p>
            <p>${book.page}</p>
            <button class="status" onclick="readStatus()">Status</button>
            <button class="del" onclick="deleteBook(${index})">X</button>
        `;
        libraryDiv.appendChild(bookDiv);
    });
}

function deleteBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

function readStatus() {
    const buttons = document.getElementsByClassName("status");

    Array.from(buttons).forEach(button => {
        button.addEventListener("click", function() {
            if (this.style.backgroundColor === "#15803d" || this.style.backgroundColor === "rgb(21, 128, 61)") {
                this.style.backgroundColor = "#b91c1c";
            } else {
                this.style.backgroundColor = "#15803d";
            }
        });
    });
}

const showDialog = document.getElementById("show_dialog");
const dialog = document.getElementById("dialog");
const closeDialog = dialog.querySelector("#close_dialog");
const textInput = document.querySelectorAll("#dialog input[type='text']");
const numberInput = document.querySelectorAll("#dialog input[type='number']");

showDialog.addEventListener("click", () => {
    dialog.showModal();
});

closeDialog.addEventListener("click", (e) => {
    let allFilled = true;

    textInput.forEach(input => {
        if (input.value.trim() === "") {
            allFilled = false;
        }
    });

    numberInput.forEach(input => {
        if (input.value.trim() === "") {
            allFilled = false;
        }
    });

    if (!allFilled) {
        alert("Please fill all fields.");
        e.preventDefault();
    } else {
        const author = document.getElementById("author").value;
        const title = document.getElementById("title").value;
        const page = document.getElementById("page").value;
        
        addBook(author, title, page);
        dialog.close();
    }
});