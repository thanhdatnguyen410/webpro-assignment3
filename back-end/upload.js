var express = require('express')
const multer = require('multer')
const upload = express.Router()


const myStorage = multer.diskStorage({
    destination: function(req,file, cb){
        cb(null, 'uploads')
    },
    filename: function(req,file,cb){
        cb(null, file.originalname)
    }
})

const uploader = multer({storage: myStorage})

upload.post('/uploadfile',uploader.single('myFile'),function(req,res,next){
    
    console.log(req.file)
    const file = req.file
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }
  
    res.send(req.file)
})

module.exports = upload;