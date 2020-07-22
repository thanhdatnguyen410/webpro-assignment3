var express = require('express')
var auth = express()
var auth = express.Router()


var authFunction = function(req,res,next){
    var authorization = req.headers.authorization
    console.log(authorization)

    var userpass = authorization.split(' ')[1];
    var plaintext = Buffer.from(userpass, 'base64').toString('ascii')

    var username = plaintext.split(':')[0]
    var passowrd = plaintext.split(':')[1]

    if(username === 'admin' && passowrd === 'admin'){
        next()
    }
    else{
        res.send('Authorization require!')
    }
}
auth.use(authFunction)


auth.get('/admins',function(req,res,next){
    res.json('List of admins')
})

auth.post('/admins',function(req,res,next){
    res.send('Added an admin user')
})


module.exports = auth; 