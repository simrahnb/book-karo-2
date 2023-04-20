const express = require('express')
const Experiences = require('../models/Experience')
const { createBooking, getBookings, getBooking, deleteBooking, updateBooking } = require('../controllers/bookingController')

const router = express.Router()

// get all of the bookings
router.get('/', getBookings)

// get a single booking
router.get('/:id', getBooking)

// post a new booking
router.post('/', createBooking)

// delete a booking
router.delete('/:id', deleteBooking)

// update a booking
router.patch('/:id', updateBooking)

module.exports = router