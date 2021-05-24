const Contact = require('../model/contactSchema');
const nodemailer = require('nodemailer');
require('dotenv').config();
const router = require('../route/fileUploadroutes');


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

// api for contact us 
const contactus = async (req, res) => {
     var firstname = req.body.firstname
     var lastname = req.body.lastname
     var email = req.body.email
     var description = req.body.description
     
    // var attachments = "/uploads"+req.file.filename
    var file = './client/public/uploads/contacts/'+ req.file.filename
    try {
        const contact = await Contact.create({
            firstname: firstname,
            lastname: lastname,
            email: email,
            description: description,
            //  file:attachments,
            file: file
        })
        console.log(contact)
        //changes
        var mail = {
            from: 'ayushijain039@gmail.com',
            to: email,
            // cc: 'ayushijainit17@acropolis.in,ayushijain039',
            subject: 'Test email',
            text: description,
           attachments: [{ filename:file, path:file,contentType: 'application/pdf' }] //change1
        };//path:'../uploads'
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
