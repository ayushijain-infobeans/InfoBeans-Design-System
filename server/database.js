const mongoose = require('mongoose');

module.exports = () =>{
    mongoose.connect('mongodb://localhost/recent-gallery',{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex: true,
        useFindAndModify:true
    }).then(() => console.log('Connected to Mongodb......'));
}