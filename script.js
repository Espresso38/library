const myLibrary = [];

function Book(author, title, page) {
    this.author = author;
    this.title = title;
    this.page = page;
}

function addBook() {
    const newBook = new Book(author, title, page);
    myLibrary.push(newBook)

}

const showDialog = document.getElementById("show_dialog");
const dialog = document.getElementById("dialog");
const closeDialog = dialog.querySelector("#close_dialog");
const textInput = document.querySelectorAll("#dialog input[type='text']")
const numberInput = document.querySelectorAll("#dialog input[type='number']")

showDialog.addEventListener("click", () => {
    dialog.showModal();
})

closeDialog.addEventListener("click", (e) => {
    let allFilled = true;

    textInput.forEach(input => {
        if (input.value.trim() === "") {
            allFilled = false;
        }
    })
    numberInput.forEach(input => {
        if (input.value.trim() === "") {
            allFilled = false;
        }
    })

    if (!allFilled) {
        alert("Please fill all fields.");
        e.preventDefault();
    }
    else {
        const author = document.getElementById("author").value;
        const title = document.getElementById("title").value;
        const page = document.getElementById("page").value;
        
        addBook(author, title, page);
        console.log(myLibrary)
        dialog.close();
    }
})