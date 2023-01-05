const form = document.querySelector('#book-form')
form.addEventListener('submit', addBook)

document.addEventListener('DOMContentLoaded', getBooks)

function getBooks(){
    let books // array for LS data
    if(localStorage.getItem('books') === null){
        books = []
    } else {
        books = JSON.parse(localStorage.getItem('books'))
    }
    books.forEach(function(book){
        const bookRow = document.createElement('tr')
        bookRow.innerHTML = `
                        <td>${book[0]}</td>
                        <td>${book[1]}</td>
                        <td>${book[2]}</td>
                        <td><a href="#">X</a></td>`
        const booksTable = document.querySelector('#books')
        booksTable.appendChild(bookRow)
    })
}

function addBook(event){
    //read user inputs
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const isbn = document.querySelector('#isbn').value

    //create table row with user input data
    const bookRow = document.createElement('tr')
    bookRow.innerHTML = `
                        <td>${title}</td>
                        <td>${author}</td>
                        <td>${isbn}</td>
                        <td><a href="#">X</a></td>`
    const booksTable = document.querySelector('#books')
    booksTable.appendChild(bookRow)

    //add book to localStorage
    const book = [title, author, isbn]
    let books // array for user input
    if(localStorage.getItem('books') === null){
        books = []
    } else {
        books = JSON.parse(localStorage.getItem('books'))
    }
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))

    //clear input
    document.querySelector('#title').value = ''
    document.querySelector('#author').value = ''
    document.querySelector('#isbn').value = ''
    event.preventDefault()
}