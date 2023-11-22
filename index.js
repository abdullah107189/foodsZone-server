const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')
const allData = require('./data.json')
app.use(cors())

const chef = {
    // ... (your chef data)
    "recipes": [
        // ... (your recipes data)
    ]
};

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/data', (req, res) => {
    res.send(allData)
})

app.get('/data/:id', (req, res) => {
    const id = req.params.id;
    const selected = allData.find(data => data.id == id);
    res.send(selected)
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})