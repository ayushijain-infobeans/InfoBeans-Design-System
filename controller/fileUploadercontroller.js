const Contact = require('../model/contactSchema');
const nodemailer = require('nodemailer');
require('dotenv').config();
const router = require('../route/fileUploadroutes')

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

// api for contact us 
const contactus = async (req, res) => {
    var id = req.body.email
    var mail = {
        from: 'ayushijain039@gmail.com',
        to: id,
        cc: 'ayushijainit17@acropolis.in',
        subject: 'Test email',
        text: 'hello,how are you',
    //  attachment: [{ filename: file }]
    };
    try {
        const contact = await Contact.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            description: req.body.description,
             file:req.body.file,
            //  file: '../images' + req.file.filename
        })
        console.log(contact)
        transporter.sendMail(mail, (error, info) => {
            if (error) {
                console.log(error)

            }
            else {
                console.log("mail send")
                res.json({ status: 'ok', message: 'Registered Successfully mail send' });
            }
        })
    }
    catch (error) {
        console.log(JSON.stringify(error))
        if (error.code === 11000) {
            return res.json({ status: 'error', error: 'Email already in use' });
        }
    }
}
//api for fetching contactus data
const getContactUs = (req, res) => {
    Contact.find({}, (err, result) => {
        if (err)
            throw err;
        else {
            res.send(result)
        }
    })
}
module.exports = { contactus, getContactUs }