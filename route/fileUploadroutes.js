const express= require('express');
const router=express.Router()
const {contactus, getContactUs} = require('../controller/fileUploadercontroller')
const multer= require('multer')
const path = require('path')

//multer config
var Storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/../Users/HP/Documents/server/images')
    },
    filename: (req, file, cb)=> {
      cb(null, + Date.now() + path.extname(file.originalname));
    }
  })

  //multer middleware
var upload = multer({ storage: Storage }).single('image')

//multer config for contact us
var contact_storage=multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,'/../Users/HP/Documents/server/images')
  },filename:(req,file,cb)=>{
    cb(null,+Date.now()+path.extname(file.originalname))
  }
})
var contact_upload=multer({storage:contact_storage}).single('file')

router.post('/contactus', contact_upload, contactus)
router.get('/getContactUs', getContactUs)
module.exports=router