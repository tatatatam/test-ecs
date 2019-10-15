const express = require('express')
const app = express();
const port = process.env.port || 8080
app.get('/', (req, res) => {
    res.send('Hello Muda muda muda muda')
})

app.listen(port, () => {
    console.log('Run at port' + port)
})