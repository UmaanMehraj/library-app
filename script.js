let myLibrary = []

function Book(name, author, pages, readStatus) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;

}

function addBookToLibrary(name, author, pages, readStatus) {
    let newBook = new Book(name, author, pages, readStatus)
    newBook.id = self.crypto.randomUUID()


    myLibrary.push(newBook)

}

addBookToLibrary("The Hobbit", "J.R.R Tolkien", 1020, "Read")
addBookToLibrary("Harry Potter and the Philosophers Stone", "J.K Rowling", 450, "Not read")
addBookToLibrary("The Hobbit", "J.R.R Tolkien", 1020, "Read")
// addBookToLibrary("Harry Potter and the Philosophers Stone", "J.K Rowling", 450, "Not read")
// addBookToLibrary("The Hobbit", "J.R.R Tolkien", 1020, "Read")
// addBookToLibrary("Harry Potter and the Philosophers Stone", "J.K Rowling", 450, "Not read")
// addBookToLibrary("The Hobbit", "J.R.R Tolkien", 1020, "Read")
// addBookToLibrary("Harry Potter and the Philosophers Stone", "J.K Rowling", 450, "Not read")

const main = document.querySelector(".main")
let dltButton;

function displayCard() {
    myLibrary.forEach(el => {
        let newDiv = document.createElement('div')
        newDiv.className = "cards"
        for (value in el) {
            const subDiv = document.createElement('div')
            dltButton = document.createElement('button')
            dltButton.innerText = 'Remove'
            subDiv.innerText = el[value]
            subDiv.dataset.id = el[value]
            newDiv.append(subDiv)

        }
        newDiv.append(dltButton)
        main.appendChild(newDiv)
    });
    myLibrary = []
}





displayCard();

const addBtn = document.querySelector('#addBtn')
const dialog = document.querySelector('dialog')
const inputs = document.querySelectorAll('input')
const confirmBtn = document.querySelector('#confirmBtn')


addBtn.addEventListener('click', () => {
    dialog.showModal()
})

dialog.addEventListener('close', () => {
    if (!(inputs[0].value === '' || inputs[1].value === '' || inputs[2].value === '' || inputs[3].value === '')) {
        addBookToLibrary(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value)
    }
    displayCard()

})

confirmBtn.addEventListener('click', (e) => {
    e.preventDefault()
    dialog.close()
})

