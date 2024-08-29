const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world again PERRO HIJUEPUTA')
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running right know on port ${PORT}`)
})