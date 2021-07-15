const express = require('express');
const router = express.Router();

//@route GET api/flashcards 

//@desc Get all users flashcards

//@access Private
router.get('/', (req,res) => {
    res.send('Get all flashcards')
});

//@route GET api/flashcards 

//@desc Get all users flashcards

//@access Private
router.post('/', (req,res) => {
    res.send('Add Flashcard')
});

//@route PUT api/flashcards 

//@desc update flashcards

//@access Private
router.put('/:id', (req,res) => {
    res.send('Update Flashcard')
});

//@route DELETE api/flashcards 

//@desc delete flashcards

//@access Private
router.delete('/:id', (req,res) => {
    res.send('delete Flashcard')
});

module.exports = router;