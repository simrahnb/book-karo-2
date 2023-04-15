const express = require('express')

const router = express.Router()

// get all of the experiences
router.get('/', (req, res) => {
    res.json({msg: 'GET all experiences'})
})

// get a single experience
router.get('/:id', (req,res) => {
    res.json({msg: 'GET a single experience'})
})

// post a new experience
router.post('/', (req,res) => {
    res.json({msg: 'POST a new experience'})
})

// delete a experience
router.delete('/:id', (req,res) => {
    res.json({msg: 'DELETE a experience'})
})

// update a experience
router.patch('/:id', (req,res) => {
    res.json({msg: 'UPDATE a experience'})
})


module.exports = router