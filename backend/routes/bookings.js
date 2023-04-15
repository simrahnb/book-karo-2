const express = require('express')

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
router.post('/', (req,res) => {
    res.json({msg: 'POST a new booking'})
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