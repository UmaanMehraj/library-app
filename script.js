const myLibrary = []


class Book {
    constructor(name, author, pages, readStatus) {
        this.name = name
        this.author = author
        this.pages = pages
        this.readStatus = readStatus
    }
    toggleStatus() {
        const readString = 'Read'
        if (this.readStatus == readString.toUpperCase() || this.readStatus == readString.toLowerCase() || this.readStatus == readString) {
            this.readStatus = 'Not Read'

        }
        else {
            this.readStatus = readString

        }

    }
}


const main = document.querySelector(".main")
let dltButton, changeStatusBtn;

function displayCard(book) {
    let newDiv = document.createElement('div')
    newDiv.className = "cards"
    for (value in book) {
        if (book.hasOwnProperty(value)) {
            const subDiv = document.createElement('div')
            dltButton = document.createElement('button')
            dltButton.id = 'dltBtn'
            dltButton.innerText = 'Remove'
            dltButton.dataset.id = book[value]
            changeStatusBtn = document.createElement('button')
            changeStatusBtn.id = 'changeStatusBtn'
            changeStatusBtn.innerText = 'Change Status'
            changeStatusBtn.dataset.id = book[value]
            subDiv.innerText = book[value]
            newDiv.append(subDiv)
        }

    }
    newDiv.append(dltButton, changeStatusBtn)
    main.appendChild(newDiv)

}

function addBookToLibrary(name, author, pages, readStatus) {
    let newBook = new Book(name, author, pages, readStatus)
    newBook.id = self.crypto.randomUUID()


    myLibrary.push(newBook)
    if (newBook) {
        displayCard(newBook)
    }

}

addBookToLibrary("The Hobbit", "J.R.R Tolkien", 1020, "Read")
addBookToLibrary("Harry Potter and the Philosophers Stone", "J.K Rowling", 450, "Not read")
addBookToLibrary("The Hobbit", "J.R.R Tolkien", 1020, "Read")






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
    

})
let removeBtns = document.querySelectorAll('#dltBtn')

confirmBtn.addEventListener('click', (e) => {
    e.preventDefault()
    dialog.close()
    
})




removeBtns.forEach((btn) => {
    let parentElement
    btn.addEventListener('click', (e) => {
        console.log(e)
        parentElement = e.target.parentElement
        main.removeChild(parentElement)
    })
})



const chanegeStatusBtns = document.querySelectorAll('#changeStatusBtn')

chanegeStatusBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        myLibrary.forEach((book) => {
            if (book.id === e.target.dataset.id) {
                book.toggleStatus()
                const parEl = e.target.parentElement
                const readStatus = parEl.querySelector('div:nth-of-type(4)')
                readStatus.innerText = book.readStatus
            }

        })

    })
})

