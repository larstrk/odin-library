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
  const headers = ['Title', 'Author', 'Pages', 'Read', ' '];
  headers.forEach(headerText => {
    const header = document.createElement("th");
    header.textContent = headerText;
    headerRow.appendChild(header);
    header.classList.add("text-gray-800", "py-4")
  });

  myLibrary.forEach(book => {
    const row = table.insertRow();
    Object.keys(book).forEach((key) => {
      const cell = row.insertCell();
      if (key === 'read') {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = book[key];
        cell.appendChild(checkbox);
      } else {
        cell.textContent = book[key];
      }
      cell.classList.add("border-b", "py-2", "text-gray-800");
    });

    const deleteCell = row.insertCell();
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';
    deleteButton.classList.add('hover:underline');

    deleteButton.onclick = function() {
        const title = row.cells[0].textContent;
        console.log(title)
        deleteBook(title)
        displayBooks();
      };

    deleteCell.appendChild(deleteButton);
  });

  libraryTable.appendChild(table);
}

function deleteBook(title) {
    for (var i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].title === title) {
            myLibrary.splice(i, 1); 
            break;
        }
    }
}

// Manually add a few books to the library for demonstration
myLibrary.push(new Book("The Hobbit", "J.R.R. Tolkien", 295, true));
myLibrary.push(new Book("To Kill a Mockingbird", "Harper Lee", 336, false));
myLibrary.push(new Book("1984", "George Orwell", 328, true));
myLibrary.push(new Book("Pride and Prejudice", "Jane Austen", 432, true));
myLibrary.push(new Book("The Great Gatsby", "F. Scott Fitzgerald", 200, true));
myLibrary.push(new Book("Moby Dick", "Herman Melville", 624, false));
myLibrary.push(new Book("The Catcher in the Rye", "J.D. Salinger", 224, true));
myLibrary.push(new Book("Brave New World", "Aldous Huxley", 288, false));
myLibrary.push(new Book("The Lord of the Rings", "J.R.R. Tolkien", 1178, true));
myLibrary.push(new Book("The Hitchhiker's Guide to the Galaxy", "Douglas Adams", 224, true));
myLibrary.push(new Book("Frankenstein", "Mary Shelley", 280, false));


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
