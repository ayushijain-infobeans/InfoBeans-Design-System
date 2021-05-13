const mongoose = require("mongoose");

//creating a database 
mongoose.connect("mongodb://localhost:27017/photoGallery", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() => {
    console.log("Connection Created Successfully");
}).catch((error) => {
    console.log(error);
})