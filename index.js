const express = require("express")
const app = express()
const port = 4000
const cors = require("cors")

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.get("/", cors(), async(req, res) =>{

    res.send("This is working")
    console.log("RECEIVERING")
})

app.listen(8080, () =>{

    console.log('Listening at port 8080')
})

module.exports = app;