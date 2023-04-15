require('dotenv').config()

const express = require('express')
const bookingsRoutes = require('./routes/bookings')
const experiencesRoutes = require('./routes/experiences')

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

// listen on port number for requests
app.listen(process.env.PORT, () => {
    console.log("Listening on Port 4000!")
})

