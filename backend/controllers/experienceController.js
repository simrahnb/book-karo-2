const Experience = require('../models/Experience')
const mongoose = require('mongoose')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all experience routes
router.use(requireAuth)

// get all experiences
const getExperiences = async (req, res) => {
    const experiences = await Experience.find({}).sort({createdAt: -1})

    res.status(200).json(experiences)
}

// get a single experience
const getExperience = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such experience"})
    }

    const experience = await Experience.findById(id)

    if (!experience) {
        return res.status(404).json({error: 'No such experience'})
    }
    res.status(200).json(experience)
}


// create new experience
const createExperience = async (req, res) => {
    const {title, subtitle, description, experienceType, totalSpots, length, schedule, location, priceSetup, currency, serviceFee, cancellationPolicy } = req.body

    const newExperience={
        title: req.body.title,
        subtitle: req.body.subtitle,
        description: req.body.description,
        experienceType: req.body.experienceType,
        totalSpots: req.body.totalSpots,
        length: req.body.length,
        schedule: req.body.schedule,
        location: req.body.location,
        priceSetup: req.body.priceSetup,
        currency: req.body.currency,
        serviceFee: req.body.serviceFee,
        cancellationPolicy: req.body.cancellationPolicy

     };

    // add doc to db
    try {
        const experience = await Experience.create(newExperience)
        res.status(200).json(experience)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

// update an experience
const updateExperience = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such experience"})
    }

    const experience = await Experience.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!experience) {
        return res.status(404).json({error: 'No such experience'})
    }

    res.status(200).json(experience)

}

// delete an experience
const deleteExperience = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such experience"})
    }

    const _id = id

    const experience = await Experience.findOneAndDelete({_id})

    if (!experience) {
        return res.status(404).json({error: 'No such experience'})
    }
    res.status(200).json(experience)
}


module.exports = {
    createExperience,
    getExperiences,
    getExperience,
    deleteExperience,
    updateExperience
}