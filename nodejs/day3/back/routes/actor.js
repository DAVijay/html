const express = require('express')
const router = express.Router()
const Actor = require('../models/actors')

//get request
router.get('/',async (req,res) => {
    const actors = await Actor.find()
    res.json(actors)
    
})

//post request
router.post('/',async (req,res) => {
    const newActor = new Actor({name : req.body.name})
    const saved = await newActor.save()
    res.status(201).json(saved)
})

//put request
router.put('/:id',async (req,res) => {
    const updated = await Actor.findByIdAndUpdate(
        req.params.id,
        {name : req.body.name},
        {new: true}
    )
    
    res.status(201).json(updated)
})

//Delete request
router.delete('/:id',async (req,res) => {
    const deleted = await Actor.findByIdAndDelete(
        req.params.id
    )
    res.status(201).json(deleted)
})

module.exports = router