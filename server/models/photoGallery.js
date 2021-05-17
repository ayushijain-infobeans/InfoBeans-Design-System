const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const photoGallerySchema = new Schema({
    fileName: {
        type: String,
        
    },
    filePath: {
        type: String,
        required: true
    },
    fileType: {
        type: String,
        required: true
    },
    fileSize: {
        type: String,
        required: true
    },
    content:{
        type:String,
        required:true,
    },
}, {timestamps: true});

module.exports = mongoose.model('PhotoGallery',  photoGallerySchema);