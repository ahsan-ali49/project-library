let myLibrary = [];

function Book() {
  this.name = prompt("Enter Name: ");
  this.author = prompt("Enter Author Name: ");
  this.pages = prompt("Enter No. of Pages: ");
  this.read = prompt("Enter readStatus(true/false): ");
  console.log("Hello World!");
  // console.log("Hello World!");
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const showBook = (element) => {
  createCard(element);
  console.log(element);
};

createCard = (element) => {
  const mainContainer = document.getElementById("bk-dspl-div");
  const card = document.createElement("div");
  card.className = "card";

  const ULList = document.createElement("ul");

  let listItem = document.createElement("li");
  listItem.textContent = `Name: ${element["name"]}`;
  ULList.appendChild(listItem);

  listItem = document.createElement("li");
  listItem.textContent = `Author: ${element["author"]}`;
  ULList.appendChild(listItem);

  listItem = document.createElement("li");
  listItem.textContent = `Pages: ${element["pages"]}`;
  ULList.appendChild(listItem);

  listItem = document.createElement("li");
  listItem.textContent = `readStatus: ${element["read"]}`;
  ULList.appendChild(listItem);

  card.appendChild(ULList);

  const newBtn = document.createElement("button");
  newBtn.textContent = "Delete";
  newBtn.className = "dlt-bk-btn";

  card.appendChild(newBtn);
  mainContainer.appendChild(card);

  newBtn.addEventListener("click", () => {
    mainContainer.removeChild(card);
  });
};

const newBtn = document.querySelector(".new-bk-btn");
newBtn.addEventListener("click", () => {
  let book1 = new Book();
  addBookToLibrary(book1);
  showBook(book1);
});
