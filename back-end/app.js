var express = require('express')
var app = express()
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var api = require('./api')
var cors  = require('cors')
var upload = require('./upload')
var route = require('./api-user')

app.use(bodyParser.json())
app.use(cors())

//DB config
const db = require('./config/keys').mongoURI

//connect to MongoDB 
mongoose
  .connect(db,{useNewUrlParser: true})
  .then(()=> console.log("Server successfully connnected"))
  .catch(err => console.log(err))

mongoose.set('useFindAndModify', false);

const path = require('path');
app.use(express.static(path.join(__dirname, 'client/build')))


app.post('/login',function(req,res){
  var user = req.body
  if(user.username =='admin' && user.password =='admin'){
    res.send({result:'authenticated'})
  }
  else{
    res.send({result:'noauthenticated'})
  }
})


//backend api
app.use('/api', api)
app.use('/api/api-user',route)
app.use('/upload',upload)



const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

