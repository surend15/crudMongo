const mongoose=require('mongoose')

var db = "mongodb://localhost:27017";
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });

const conSuccess = mongoose.connection
conSuccess.once('open', _ => {
  console.log('Database connected:', db)
})