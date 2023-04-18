const mongoose = require('mongoose')

const Schema = mongoose.Schema // function to create new schema

const bookingSchema = new Schema({
    experienceTitle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Experience'
 ,
    },
 //   affiliate: {
 //       type: mongoose.Schema.Types.ObjectId, ref: 'Experience' ,
 //   },
 //   numberofguests: {
 //       type: Number,
 //       required: true,
 //   },
 //   startDate: {
 //      type: Date,
 //        required: true
 //   },
 //   startTime: {
 //       type: Date,
 //       required: true
 //   }

}, { timestamps: true }) // when created and updated

// Schema defines the structure of type of doc in our database
// model is used to interact with the collection

module.exports = mongoose.model('Booking', bookingSchema)
