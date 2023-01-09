const express = require('express')
const Joi = require('joi')
const comments = require('./routes/comments')
const users = require('./routes/users')
const auth = require('./routes/auth')
const app = express();
const morgan=  require('morgan')
const mongoose=require('mongoose')
const cors=require ('cors')
const MongoClient = require('mongodb').MongoClient;

// mongoose.connect('mongodb://127.0.0.1:27017/comly')
//         .then(()=>console.log('database connected successfully'))
//         .catch((err)=>console.error('couldnt connect to the database',err.message))
function connectdb(){
try{mongoose.connect('mongodb://127.0.0.1:27017/comly')
    console.log('database connected successfully')
    const client = new MongoClient('mongodb://127.0.0.1:27017/comly', { useNewUrlParser: true });
    client.connect(err => {
      const collection = client.db("comly").collection("comments");
      collection.dropIndex({ name: 1 }, function(err, result) {
        client.close();
      });})}
        catch{console.error('couldnt connect to the database',err.message)}
}
connectdb()
console.log(` this is the node env ${process.env.NODE_ENV}`) //und
console.log(app.get('env'))

app.use(cors());
app.use(express.json()); // conver json to javascript and javascript to json
app.use(express.static('public'))
if (app.get('env') === 'development')
  app.use(morgan('tiny'))
app.use('/api/comments',comments);
app.use('/api/users',users);
app.use('/api/auth',auth);



const port = process.env.PORT || 4000; 

app.listen(port, () => console.log(`active on ${port}`))