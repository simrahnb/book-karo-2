const mongoose = require('mongoose')

const Schema = mongoose.Schema // function to create new schema

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
    }
    //length: {
    //   type: Number,
    //    required: true
    //},
    //schedule: {
    //    type: [Date]
    //},
    //location: {
    //    type: String,
    //    required: true
    //},
    //priceSetup: {
    //    type: Boolean,
    //    default: false,
    //    required: true
    //},
    //currency: {
    //   type: String
    //},
    //tickets: {
    //    type: Schema.Types.Mixed
    //},
    //servicefee: {
    //    type: Boolean,
    //    default: false
    //},
    //cancellationPolicy: {
    //    type: String
    //}

}, { timestamps: true } )


module.exports = mongoose.model('Experience', experienceSchema)
