const Booking = require('../models/Booking')
const Experience = require('../models/Experience')
const mongoose = require('mongoose')

// get all bookings
const getBookings = async (req, res) => {

   // const bookings = Experience.find({},{"bookings":true,_id:false})

    //const bookings = experience.find({ "bookings": { $exists : true }}); // will find all bookings.

    //const bookings = await Booking.find({}).sort({createdAt: -1})
    // const experiences = await Experience.find()
    // console.log(experiences)
    // const bookings = experiences.bookings
    // console.log(bookings)

    //const bookings = await Experience.find({ "bookings.experienceTitle": { $exists : true }});


    const bookings = await Experience.aggregate([
        {$unwind : "$bookings"},
        {$project : {_id : 0, 
                     id : "$bookings._id", 
                     experienceTitle : "$bookings.experienceTitle"}}
    ])


    console.log(bookings)

    //const bookings = await Experience.find({ "bookings": { $exists : true }});
    res.status(200).json(bookings)
}

// get a single booking
const getBooking = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such booking"})
    }

    const _id = id
    console.log(_id)

    //const booking = await Experience.aggregate([
    //    {$unwind : "$bookings"},
    //    {$match : {"bookings._id" : "_id"}},
    //    {$project : {_id : 0, 
    //                id : "$bookings._id", 
    //                 experienceTitle : "$bookings.experienceTitle"}}
    //])

    const booking = await Experience.find({"bookings._id": _id},
    {"bookings.$": true}
)

    console.log(booking)

    if (!booking) {
        return res.status(404).json({error: 'No such booking'})
    }
    res.status(200).json(booking)
}

// create new booking
const createBooking = async (req, res) => {
    const {experienceTitle} = req.body

    const experience = await Experience.findOne({ title: experienceTitle })

    const newBooking={
        experienceTitle: req.body.experienceTitle,
        experience: experience
    }

    
    // add doc to db
    try {
         const booking = experience.bookings.push(newBooking)
         const updated = await experience.save()
         console.log(updated)
         res.status(200).json(booking)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


// delete a booking
const deleteBooking = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such booking"})
    }

    const booking = await Experience.updateMany(
        { },
        { $pull: { bookings: { _id: id } } }
      )

    //const booking = await Booking.findOneAndDelete({ _id })

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

    console.log(id) 

    const _id = id

    const {experienceTitle } = req.body


    const experiences = 0 

    const booking = await Experience.findOne({"bookings._id": _id},
    {"bookings.$": true}
)

    const experienceid = booking.toObject()._id
    console.log(experienceid)
    
    const myObjectIdString = experienceid.toString()
    console.log(myObjectIdString)
    //const booking1 = booking.toObject()

    //console.log(booking1)

    const updatedBooking = {
        experienceTitle : req.body.experienceTitle
    }

   const finalupdatedBooking =  await Experience.findOneAndUpdate(
        { "_id": myObjectIdString, "bookings._id": id },
        { 
            "$set": {
                "bookings.$.experienceTitle": req.body.experienceTitle
            }
            
        },hbb
    );

    console.log(finalupdatedBooking)
    
    if (!finalupdatedBooking) {
        return res.status(404).json({error: 'No such booking'})
    }

    res.status(200).json(finalupdatedBooking)

}

module.exports = {
    createBooking,
    getBookings,
    getBooking,
    deleteBooking,
    updateBooking
}