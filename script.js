let myLibrary = [];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

function addBookToLibrary(book) {
  showBook(book);
  myLibrary.push(book);
}

function showBook(book) {
  const mainContainer = document.querySelector("#bk-dspl-div");

  const card = document.createElement("div");
  card.className = "card";
  fillCard(mainContainer, card, book);
}

function fillCard(mainContainer, card, book) {
  const UList = document.createElement("ul");
  for (let key in book) {
    const listItem = document.createElement("li");
    listItem.textContent = book[key];
    UList.appendChild(listItem);
  }
  card.appendChild(UList);
  const dltBtn = document.createElement("button");
  dltBtn.textContent = "Delete";
  dltBtn.value = myLibrary.length;
  dltBtn.className = "dlt-bk-btn";
  dltBtn.addEventListener("click", function () {
    mainContainer.removeChild(card);
    let index = myLibrary.indexOf(book);
    myLibrary.splice(index, 1);
    console.log(myLibrary);
  });
  card.appendChild(dltBtn);

  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = book["readStatus"] === "Read" ? "Not Read" : "Read";
  toggleBtn.className = "dlt-bk-btn";
  toggleBtn.addEventListener("click", function () {
    let index = myLibrary.indexOf(book);
    toggleBtn.textContent = myLibrary[index].readStatus;
    myLibrary[index].readStatus =
      myLibrary[index].readStatus === "Read" ? "Not Read" : "Read";
    UList.childNodes[3].textContent = myLibrary[index].readStatus;
    console.log(myLibrary[index]);
  });
  card.appendChild(toggleBtn);

  mainContainer.appendChild(card);
}

const newBtn = document.querySelector(".new-bk-btn");
newBtn.addEventListener("click", function () {
  const form = document.querySelector("#myForm");
  form.style.display = "block";
});

document
  .querySelector("#dataForm")
  .addEventListener("submit", function (event) {
    console.log("Solving ClusterFuck");
    event.preventDefault();

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    console.log("Solving ClusterFuck1");
    let readStatus = document.querySelector(
      `input[name="read-status"]:checked`
    ).value;

    const book = new Book(title, author, pages, readStatus);
    addBookToLibrary(book);
    const form = document.querySelector("#myForm");
    form.style.display = "none";
  });
