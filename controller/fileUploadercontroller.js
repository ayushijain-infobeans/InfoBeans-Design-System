const Contact = require('../model/contactSchema');
const nodemailer = require('nodemailer');
require('dotenv').config();
const router = require('../route/fileUploadroutes');


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "ayushijain039@gmail.com",
        pass: "kamleshsangita123"
    }
})

// api for contact us 
const contactus = async (req, res) => {
    var firstname = req.body.firstname
    var lastname = req.body.lastname
    var email = req.body.email
    var description = req.body.description

    // var attachments = "/uploads"+req.file.filename
    var file = './client/public/uploads/contacts/' + req.file.filename
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
            subject: 'Test email',
            html: `<h4>Hey ${req.body.firstname}, Thank you for your email.</h4>
            <p> Resolving your issues and answering questions are a top priority for us. A member of our support team will follow up with you today to resolve your inquiry.</p>`,
            text: description,
            attachments: [{ filename: file, path: file, contentType: 'application/pdf' }] //change1
        };//path:'../uploads'

        //Admin Block
        var admin = {
            from: 'ayushijain039@gmail.com',
            to: ["ayushi.jain@infobeans.com", "bupkyarahul@gmail.com"],
            subject: "New User Registered",
            html: `<h3>A new user ${req.body.firstname} ${req.body.lastname}has recently filled the form </h3>
             <h4>Information of the user </h4>
              <ul>
                   <li>Name: ${req.body.firstname} ${req.body.lastname}</li>
                   <li>Email: ${req.body.email}</li>
                   <li>Enquiry : ${req.body.description}</li>
            </ul>`,
            attachments: [{ filename: file, path: file, contentType: 'application/pdf' }]

        }


       //For user
        transporter.sendMail(mail, (error, info) => {
            if (error) {
                console.log(error)

            }
            else {
                console.log("mail send")
                res.json({ status: 'ok', message: 'Mail Send Successfully' });
            }
        })
        //For Admin
        transporter.sendMail(admin, (error, info) => {
            if (error) {
                console.log(error)
            }
            else {
                console.log("Mail Send to Admin")
                res.json({ status: 'ok', message: 'Mail Send Successfully' })
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
