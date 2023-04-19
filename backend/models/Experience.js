const mongoose = require('mongoose')
const Booking = require('../models/Booking')

const Schema = mongoose.Schema // function to create new schema

const bs = new Schema({
    experienceTitle: {
        type: String,
        required: true
    },
    experience: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Experience"
    }

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

const experienceSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    experienceType: {
        type: Boolean,
        default: false,
        required: true
    },
    totalSpots: {
        type: Number,
        min: 1,
        max: 25000,
        required: true
    },
    length: {
        type: String,
        required: true
    },
    schedule: {
       type: [Date],
       required: true
    },
    location: {
        type: String,
        required: true
    },
    priceSetup: {
        type: Boolean,
        default: false,
        required: true
    },
    currency: {
       type: String
    },
    //tickets: {
    //    type: Schema.Types.Mixed
    //},
    serviceFee: {
        type: Boolean,
        default: false,
        required: true
    },
    cancellationPolicy: {
        type: String,
        required: true
    },
    // array of bookings for an experience
    bookings: [bs],
}, { timestamps: true } )


module.exports = mongoose.model('Experience', experienceSchema)
