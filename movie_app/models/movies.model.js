const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MovieSchema = new Schema({
    title: {
        type: String, 
        required: true, 
        max: 100
    },
    language: {
        type: String, 
        required: true, 
        max: 100
    },
    director: {
        type: String, 
        required: true, 
        max: 100
    },
    date_released: {
        type: String, 
        required: true, 
        max: 100
    },
    budget: {
        type: Number, 
        required: true
    },
    cast: {
        type: String, 
        required: true, 
        max: 100
    }
});

// Export the model
module.exports = mongoose.model('movies', MovieSchema);

