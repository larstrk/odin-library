const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  displayBooks();
}

function displayBooks() {
  const libraryTable = document.getElementById("library");
  libraryTable.innerHTML = ''; // Clear previous content

  const table = document.createElement("table");
  table.classList.add("table-auto", "w-full", "text-sm", "text-left", "rtl:text-right", "text-gray-500", "dark:text-gray-400");

  const headerRow = table.insertRow();
  const headers = ['Title', 'Author', 'Pages', 'Read'];
  headers.forEach(headerText => {
    const header = document.createElement("th");
    header.textContent = headerText;
    headerRow.appendChild(header);
  });

  myLibrary.forEach(book => {
    const row = table.insertRow();
    Object.values(book).forEach(value => {
      const cell = row.insertCell();
      cell.textContent = value;
      cell.classList.add("border", "px-4", "py-2", "text-gray-800");
    });
  });

  libraryTable.appendChild(table);
}

// Manually add a few books to the library for demonstration
myLibrary.push(new Book("The Hobbit", "J.R.R. Tolkien", 295, true));
myLibrary.push(new Book("To Kill a Mockingbird", "Harper Lee", 336, false));


// Dialog for new Book
const showButton = document.getElementById("showDialog");
const dialog = document.getElementById("dialog");
const closeBtn = document.getElementById("closeBtn");
const saveBtn = document.getElementById("saveBtn");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const checkbox = document.querySelector('input[name="checkbox"]');
const form = document.querySelector('form');


// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener("click", () => {
    form.reset();
    dialog.showModal();
  });

closeBtn.addEventListener("click", () => {
    dialog.close();
})


saveBtn.addEventListener("click", (event) => {
    event.preventDefault();

    if (checkbox.checked) {
        myLibrary.push(new Book(titleInput.value, authorInput.value, pagesInput.value, true));
    } else {
        myLibrary.push(new Book(titleInput.value, authorInput.value, pagesInput.value, false));
    }
    
    console.log("new book pushed");

    displayBooks();
    dialog.close();
})

// Initialize display
displayBooks();
