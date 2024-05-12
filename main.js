const express = require('express')
const app = express();

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
     return res.json({ message: 'hey, I am nodejs in Aftab'})
})

app.listen(PORT, () => console.log(`Server startd on PORT:${PORT}`) )