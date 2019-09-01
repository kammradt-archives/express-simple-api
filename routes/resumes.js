const express = require('express')
const Resume = require('../models/Resume')

const router = express.Router()

// Get all resumes
router.get('/', async (req, res) => {
    try {
        const resumes = await Resume.find()
        res.json({resumes})
    } catch (error) {
        res.json({message: error})
    }
})

// Get a specific resume
router.get('/:resumeId', async (req, res)=> {
    try {
        const resume = await Resume.findById(req.params.resumeId)        
        res.json({resume})    
    } catch (error) {
        res.json({message: error})
    }
})

// Create a resume
router.post('/', async (req, res) => {
    const resume = new Resume({
        name: req.body.name,
        description: req.body.description
    })

    try {
        const savedResume = await resume.save()
        res.json({savedResume})
    } catch (error) {
        res.json({message: error})
    }

})

// Update a resume
router.patch('/:resumeId', async (req, res) => {
    try {
        const updatedResume = await Resume.updateOne(
            { _id: req.params.resumeId },
            { $set: { name: req.body.name } }
        )
        res.json({updatedResume})
    } catch (error) {
        res.json({message: error})
        
    }

})
// Remove a resume
router.delete('/:resumeId', async (req, res) => {
    try {
        const removedResume = await Resume.remove({ _id: req.params.resumeId })
        res.json({removedResume})
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router