const express = require('express')
const picture = require('./routes/picture')

const app = express()
const port = 3000

app.get('/', (req, res) => res.send('pong!'))

app.get('/picture', picture)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))