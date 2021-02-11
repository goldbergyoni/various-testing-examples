const express = require('express')
const app = express()
const port = 3001

app.use((req, res, next) => {
    console.log("Throw")
    next({
        something: "error"
    });
})
app.get('/', (req, res) => {
    console.log("Route")
    res.json({
        something: "good"
    })
})

app.use((error, req, res, next) => {
    console.log("Error handler")
    console.log(error);
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))