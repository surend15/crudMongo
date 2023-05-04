const mongoose=require('mongoose')
const db=require('./db')
const express=require('express')

mongoose.connect(db, {  useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

var app=express();
app.use(express.json())
app.listen(2444)
app.use(require('./route'))