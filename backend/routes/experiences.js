const express = require('express')
const { createExperience, getExperiences, getExperience, deleteExperience, updateExperience } = require('../controllers/experienceController')

const router = express.Router()

// get all of the experiences
router.get('/', getExperiences)

// get a single experience
router.get('/:id', getExperience)

// post a new experience
router.post('/', createExperience)

// delete a experience
router.delete('/:id', deleteExperience)

// update a experience
router.patch('/:id', updateExperience)


module.exports = router