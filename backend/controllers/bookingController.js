const Booking = require('../models/Booking')
const mongoose = require('mongoose')

// get all bookings
const getBookings = async (req, res) => {
    const bookings = await Booking.find({}).sort({createdAt: -1})

    res.status(200).json(bookings)
}

// get a single booking
const getBooking = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such booking"})
    }

    const booking = await Booking.findById(id)

    if (!booking) {
        return res.status(404).json({error: 'No such booking'})
    }
    res.status(200).json(booking)
}

// create new booking
const createBooking = async (req, res) => {
    const {experience, affiliate, numberofguests, startDate, startTime} = req.body

    // add doc to db
    try {
        const booking = await Booking.create(experience, affiliate, numberofguests, startDate, startTime)
        res.status(200).json(booking)
    } catch (error) {
        res.status(400),json({error: error.message})
    }
}


// delete a booking
const deleteBooking = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such booking"})
    }

    const booking = await Booking.findOneAndDelete({ _id })

    if (!booking) {
        return res.status(404).json({error: 'No such booking'})
    }
    res.status(200).json(booking)
}

// update a booking
const updateBooking = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such booking"})
    }

    const booking = await Booking.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!booking) {
        return res.status(404).json({error: 'No such booking'})
    }

    res.status(200).json(booking)

}

module.exports = {
    createBooking,
    getBookings,
    getBooking,
    deleteBooking,
    updateBooking
}