const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

// Add Routes
// Index
router.get('/', (req, res) => {
    Movie.find({}, (error, allMovies) => {
        error ?
        res.status(404).json(error):
        res.status(200).json(allMovies)
    });
});

// Delete
router.delete('/:id', (req, res) => {
    Movie.findByIdAndRemove(req.params.id, (error, movie) => {
        error ?
        res.status(404).json(error):
        res.status(200).json(movie)
    });
});

// Update
router.put('/:id', (req, res) => {
    Movie.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, updatedMovie) => {
        error ?
        res.status(404).json(error):
        res.status(200).json(updatedMovie)
    });
});

// Create
router.post('/', (req, res) => {
    Movie.create(req.body, (error, createdMovie) => {
        error ?
        res.status(404).json(error):
        res.status(200).json(createdMovie)
    });
});

// Show
router.get('/:id', (req, res) => {
    Movie.findById(req.params.id, (error, foundMovie) => {
        error ?
        res.status(404).json(error):
        res.status(200).json(foundMovie)
    });
});

// export router
module.exports = router;