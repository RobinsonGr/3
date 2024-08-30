const express = require('express');
const app = express();

app.use('/books', require('./routes/books'))

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running right know on port ${PORT}`)
})