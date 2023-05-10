const myLibrary = [];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function createCard(theBook) {
  const card = document.createElement("div");
  card.classList.add("card");
  const appendCard = createPara(card, theBook);
  return appendCard;
}

function createPara(card) {
  const titlePara = document.createElement("p");
  const authorPara = document.createElement("p");
  const pagesPara = document.createElement("p");
  const readPara = document.createElement("p");

  titlePara.textContent = `Name: ${myLibrary[0].title}`;
  authorPara.textContent = `Author: ${myLibrary[0].author}`;
  pagesPara.textContent = `Pages#: ${myLibrary[0].pages}`;
  readPara.textContent = `readStatus: ${myLibrary[0].pages}`;

  card.appendChild(titlePara);
  card.appendChild(authorPara);
  card.appendChild(pagesPara);
  card.appendChild(readPara);
  return card;
}

function showBook(theBook) {
  const container = document.querySelector("#bk-dspl-div");
  const card = createCard(theBook[0]);
  container.appendChild(card);
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 293, true);
const elevenMinutes = new Book("Eleven Minutes", "Paulo Coelho", 293, true);
const murderOfHistory = new Book("Murder of History", "K.K Aziz", 293, true);

addBookToLibrary(theHobbit);
addBookToLibrary(elevenMinutes);
addBookToLibrary(murderOfHistory);

console.log(myLibrary);

document.addEventListener("DOMContentLoaded", function callShow(myLibrary) {
  showBook(myLibrary);
});
