

const books = [
    {
      id: 1,
      author: "F. Scott Fitzgerald"
    },
    {
      id: 2,
      author: "Harper Lee"
    },
    {
      id: 3,
      author: "George Orwell"
    },
    {
      id: 4,
      author: "Jane Austen"
    },
    {
      id: 5,
      author: "J.R.R. Tolkien"
    }
  ];

//getbook, getbooks, create book, modify book, delete book

const getBook = (id) => {
    return books.filter(book => id === book.id)
}

console.log(getBook)