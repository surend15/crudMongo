const mongoose=require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    password:String
  });
  
const db=mongoose.model('User',userSchema)

const see=(req,res)=>{
      db.find()
      .then(users => {
        res.json(users);
      })
      .catch(err => {
        res.status(500).json({
          message: 'Error getting user',
          error: err
        });
      });
}
const register=(req,res)=>{
    const user = new db({
        name: req.body.name,
        password: req.body.pass
      });
      user.save()
        .then(() => {
          res.status(201).json({
            message: 'User created successfully',
            user: user
          });
        })
        .catch(err => {
          res.status(500).json({
            message: 'Error creating user',
            error: err
          });
        });
}
module.exports={register,see}