const {getBook,
    getBooks,
    addBook,
    modifyBook,
    deleteBook} = require('../controllers/booksController')



const {Router} = require('express');
const router = Router()

router.get('/:id', getBook)
router.get('/', getBooks)

router.post('/', addBook)
router.put('/', modifyBook)

router.delete('/:id', deleteBook)

module.exports = router;