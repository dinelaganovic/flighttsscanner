require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const userRoute = require('./routes/userRoute')
const notesRoute = require('./routes/notesRoute')
const path = require('path')


const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use('/users', userRoute)
app.use('/api/notes', notesRoute)

// Connect to mongodb
const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if (err) throw err;
    console.log("Connected to mongodb")
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})