const myLibrary = []

function Book(name, author, pages) {
    this.name = name;
    this.author = author;
    this.pages = pages;

}

function addBookToLibrary(name, author, pages) {
    let newBook = new Book(name, author, pages)
    newBook.id = self.crypto.randomUUID()


    myLibrary.push(newBook)

}

addBookToLibrary("The Hobbit", "J.R.R Tolkien", 1020)
addBookToLibrary("Harry Potter and the Philosophers Stone", "J.K Rowling", 450)

