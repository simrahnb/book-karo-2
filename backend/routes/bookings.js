const express = require('express')
const Booking = require('../models/Booking')
const Experiences = require('../models/Experience')

const router = express.Router()

// get all of the bookings
router.get('/', (req, res) => {
    res.json({msg: 'GET all bookings'})
})

// get a single booking
router.get('/:id', (req,res) => {
    res.json({msg: 'GET a single booking'})
})

// post a new booking
router.post('/', async (req,res) => {
    const {title, load, reps} = req.body

    try {
        const workout = await Booking.create(title, load, reps)
        res.status(200).json(workout)
    } catch (error) {
        res.status(400),json({error: error.message})
    }
})

// delete a booking
router.delete('/:id', (req,res) => {
    res.json({msg: 'DELETE a booking'})
})

// update a booking
router.patch('/:id', (req,res) => {
    res.json({msg: 'UPDATE a booking'})
})

module.exports = router