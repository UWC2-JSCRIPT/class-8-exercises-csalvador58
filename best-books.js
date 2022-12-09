const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');

formEl.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const year = yearEl.value;
  const month = monthEl.value;
  const day = dateEl.value;

  const BASE_URL = `https://api.nytimes.com/svc/books/v3/lists/${year}-${month}-${day}/hardcover-fiction.json`;
  const url = `${BASE_URL}?q=tech&api-key=${API_KEY}`;

  console.log(url)

  // Fetch bestselling books for date and add top 5 to page

  fetch(url)
    .then(function(data) {
      return data.json();
    })
    .then(function(responseJson) {

      console.log(responseJson)

      // Json results containing book objects is reduce to and array of book objects only including rank, title, author, and description keys/values. Sort is also perform ensuring ascending order.
      const bestSellingBooks = responseJson.results.books.reduce((books, book) => {
        if (book.rank <= 5) {
          books.push({
            Rank: book.rank,
            Title: book.title,
            Author: book.author,
            Description: book.description
          });
        }
        return books;
      }, []).sort((a, b) => a.rank < b.rank ? -1 : 1);

      return bestSellingBooks;
    })
    .then(function(obj) {
      // Clear display area
      const bookContainer = document.getElementById('books-container');
      bookContainer.innerHTML = "";
      
      // For each book object, each key-value pairs are displayed
      obj.forEach(book => {
        for (const key in book) {
          const bookEl = document.createElement('p');
          bookEl.innerText = `${key}: ${book[key]}\n`;
          bookContainer.appendChild(bookEl);
        }
      });
    })
});
