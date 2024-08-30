const books = [
    {
      id: 1,
      author: "F. Scott Fitzgerald",
      book: "Messo"
    },
    {
      id: 2,
      author: "Harper Lee",
       book: "asd"
    },
    {
      id: 3,
      author: "George Orwell",
       book: "asdss"
    },
    {
      id: 4,
      author: "Jane Austen",
       book: "asddgg"
    },
    {
      id: 5,
      author: "J.R.R. Tolkien",
        book: "hjhj"
    }
  ];


 //help function
 const getIndexBook = (id) => {
    const bookIndex = books.findIndex(book => book.id === id);
    if(bookIndex < 0) {
        res.status(500).json({error: 'It doesnt exist'})
    }

    return bookIndex
 }

 const getBook = (req, res) => {
    const { id } = req.params;
    const book = books.find(book => book.id === Number(id)) || null;
    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  };

  const getBooks = (req, res) => {
    res.status(200).json(books);
  };

const addBook = (req, res) => {
  const book = req.body;
  const lastId = books.length ? books[books.length - 1].id : 0;
  const newBook = { id: lastId + 1, ...book };
  books.push(newBook);
  res.status(201).json(newBook);
};

const modifyBook = (req, res) => {
    const { id, author, book } = req.body;
    try {
      const index = getIndexBook(Number(id));
      if (author) books[index].author = author;
      if (book) books[index].book = book;
      res.status(200).json(books[index]);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };

const deleteBook = (req, res) => {
    const {id} = req.params;
    

    try {
        const index = getIndexBook(Number(id));
        books.splice(index, 1)
        res.status(200).send('Deleted')

    } catch(error){
        res.status(404).json({error: error.message})

    }
    delete book[id]

    res.status(200).send('Deleted')
};
 

module.exports = {
  getBook,
  getBooks,
  addBook,
  modifyBook,
  deleteBook

}