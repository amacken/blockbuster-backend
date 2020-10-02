const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const movieSchema = new Schema({
    Title: { type: String, required: true },
    Year: { type: String},
    Rated: { type: String },
    Released: { type: String },
    Runtime: { type: String},
    Genre: { type: String },
    Director: { type: String },
    Writer: { type: String},
    Actors: { type: String },
    Plot: { type: String },
    Poster: { type: String },
});

// Create Model from Schema
const Movie = mongoose.model('Movie', movieSchema);

// Export Movie Model
module.exports = Movie;