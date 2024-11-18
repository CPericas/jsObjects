/*
Problem Statement: You are tasked with creating a JavaScript program that simulates a digital library system. The program should allow users to add 
new books, search for books by title or author, and display information about the library's collection.

Task 1: Create a constructor function for the Book object with properties for title, author, and pages.

Task 2: Implement a method within the Book object to display book information.

Task 3: Create an array to store book objects and implement functions to add new books and search for books by title or author.

Task 4: Create functions that utilize the filter method to filter out books that contain more than 100 pages and the map method to add "Title: " 
and "Author: " to the book's title and author properties respectably.
*/

function Book(title, author, pages) {     
	this.title = title;
	this.author = author;
	this.pages = pages;
}

Book.prototype.bookInfo = function() {
	console.log("Title: " + this.title + " Author: " + this.author + " Number of pages: " + this.pages);
}

let library = []

function addBook(title, author, pages) {
    let newBook = new Book(title, author, pages);
    library.push(newBook);
    console.log("Book added: " + title);
}

function searchByTitle(title) {
    let results = library.filter(book => book.title.toLowerCase() === title.toLowerCase());
    if (results.length > 0) {
        results.forEach(book => book.bookInfo());
    } else {
        console.log("No books found with the title: " + title);
    }
}

function searchByAuthor(author) {
    let results = library.filter(book => book.author.toLowerCase() === author.toLowerCase());
    if (results.length > 0) {
        results.forEach(book => book.bookInfo());
    } else {
        console.log("No books found by the author: " + author);
    }
}

addBook("1984", "George Orwell", 328);
addBook("Animal Farm", "George Orwell", 112);
addBook("To Kill a Mockingbird", "Harper Lee", 281);

searchByTitle("To Kill a Mockingbird")
searchByAuthor("George Orwell")
searchByTitle("1884")
