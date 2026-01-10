const myLibrary = []

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

const main = document.querySelector(".main")

function displayCard() {
    myLibrary.forEach((el) => {
        const newDiv = document.createElement("div")
        newDiv.className = "cards"

        const subDivOne = document.createElement("div")
        subDivOne.innerText = `Title: ${el.name}`

        const subDivTwo = document.createElement("div")
        subDivTwo.innerText = `Author: ${el.author}`

        const subDivThree = document.createElement("div")
        subDivThree.innerText = `Number of Pages: ${el.pages}`

        const subDivFour = document.createElement("div")
        subDivFour.innerText = `Status: ${el.readStatus}`

        newDiv.append(subDivOne, subDivTwo, subDivThree, subDivFour)
        main.appendChild(newDiv)

    })
}

displayCard();