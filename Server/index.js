const express = require('express');
require("./db/conn");
const PhotoGallery = require("./models/photoGallery");
const app = express();
const port = process.env.port || 7000;

//routing
app.get("/", async (req, res) => {
    res.send("hello world")
})

app.use(express.json());

//handling the get req
app.get("/userget", async (req, res) => {
    try {
        const getaddGallery = await PhotoGallery.find({});
        res.status(201).send(getaddGallery);
    } catch (e) {
        res.status(400).send(e);
    }
})

//Handling the post request
app.post("/user", async (req, res) => {
    try {
        const addGallery = new PhotoGallery(req.body)
        console.log(req.body)
        const insertdata = await addGallery.save();
        res.status(201).res.send(insertdata)
    } catch (e) {
        res.status(400).res.send(e);
    }
})

//we will be handling the get req
// app.get("/mens", async (req, res) => {
//     try {
//        const getMens = await MensRanking.find({});
//         res.status(201).res.send(getMens);
//     } catch (e) {
//        res.status(400).res.send(e)
//     }
// })

//server create
app.listen(port, () => {
    console.log(`server is running on the port no ${port}`);
})