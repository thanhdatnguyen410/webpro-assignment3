var mongoose = require('mongoose')
var express = require ('express')
var router = express.Router()

//middleware that is specific to this router
router.use(function timeLog(req,res,next){
    console.log('Time: ',Date.now())
    next()
})

//create project schema
var UserSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    userID: String,
    userName: String,
    userEmail: String,
})

//model of project 
var User = mongoose.model('User',UserSchema)

//the endpoints 
router.get('/users',function(req,res){
    User.find({},function(err,users){
        res.send(users)
    })
})

router.post('/users',function(req,res){
    User.create(req.body,function(err,user){
        res.send(user)
    })
})

router.put('/users/',function(req,res){
    User.findOneAndUpdate(req.params.userID,req.body,{new: true},
        function(err,result){
        res.send(result)
    })
})

router.delete('/users/:id',function(req,res){
    User.deleteOne({userID: req.params.id},function(err,result){
        res.send(result)
    })
})

module.exports = router; 