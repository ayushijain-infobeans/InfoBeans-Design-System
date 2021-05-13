const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const photoGallerySchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        trim: true
    },

});

//we are creating a new collections
const PhotoGallery = new mongoose.model("PhotoGallery", photoGallerySchema);
module.exports = PhotoGallery;