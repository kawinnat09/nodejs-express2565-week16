require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')

const app = express()
const morgan = require('morgan')

const PORT = process.env.PORT || 4000

//database connection
mongoose.connect(process.env.DB_URI,{useNewUrlParser:true})
const db = mongoose.connection;
db.on("error",(error)=>{
    console.log(error)
})
db.once("open",()=>{
    console.log("Connected to the databases")
})

app.use(morgan('dev'))

//http://localhost:4000/
app.get('/', (req, res) => {
    return res.json({
        message:"Homepage"
    })
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})