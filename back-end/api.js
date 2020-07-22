var mongoose = require('mongoose')
var express = require ('express')
var api = express.Router()
const multer = require('multer');


//middleware that is specific to this router
api.use(function timeLog(req,res,next){
    console.log('Time: ',Date.now())
    next()
})

//create project schema
var ProjectSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    projectID: String,
    idStudent: String,
    nameStudent: String,
    yearStudent: String,
    idCourse: String,
    nameCourse: String,
    semester: String,
    nameAsm: String,
    descriptionAsm: String,
    percentageAsm: String,
    technology: String,
    scope: String,
    description: String,
    companyLink: String,
    application: String,
    imgURL: String
})


//model of project 
var Project = mongoose.model('Project',ProjectSchema)

//the endpoints 
api.get('/projects',function(req,res){
    Project.find({},function(err,projects){
        res.send(projects)
    })
})

api.post('/projects',function(req,res){
    Project.create(req.body,function(err,project){
        res.send(project)
    })
})

api.put('/projects/',function(req,res){
    Project.findOneAndUpdate(req.params.projectID,req.body,{new: true},
        function(err,result){
        res.send(result)
    })
})

api.delete('/projects/:id',function(req,res){
    Project.deleteOne({projectID: req.params.id},function(err,result){
        res.send(result)
    })
})



//upload photo
// api.post('/photoupload/photo',function(req,res){
//     var newItem = new newItem()
//     newItem.photo.data = fs.readFileSync(req.file.photo.path)
//     newItem.photo.contentType = 'image/png';
//     newItem.save(function(err,newItem){
//         if(err) throw err;
//     })
// })

module.exports = api; 