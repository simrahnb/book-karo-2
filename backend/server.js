require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bookingsRoutes = require('./routes/bookings')
const experiencesRoutes = require('./routes/experiences')
const userRoutes = require('./routes/user')

// start the express app
const app = express()

// middleware
app.use(express.json()) //gives us access to the req body
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/bookings', bookingsRoutes)
app.use('/api/experiences', experiencesRoutes)
app.use('/api/user', userRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI) // async 
    .then(() => {
        // listen on port number for requests
        app.listen(process.env.PORT, () => {
            console.log("Connecting to db and istening on Port 4000!")
        })
    })
    .catch((error) => {
        console.log(error)
    })


