const myLibrary = [];

function Book() {

}

function addBook() {

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
})