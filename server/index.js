const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');

const UserModel = require('./models/Users')

const app = express();
app.use(cors());
app.use(express.json());


// Connect to MongoDB Atlas
const mongoDBURI = 'mongodb+srv://atharvabhavsar01:start123@cluster0.nmlvm5i.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoDBURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check for a successful connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

app.get("/",(req,res)=>{
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err)) 
})

app.get('/getUser/:id', (req,res)=> {
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err)) 

})

app.put('/updateUser/:id',(req,res)=>{
    const id = req.params.id
    UserModel.findByIdAndUpdate({_id:id},{name: req.body.name, email: req.body.email, age: req.body.age},{ new: true })
    .then(users => res.json(users))
    .catch(err => res.json(err))
})
app.post("/createUser", (req,res)=>{
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})


app.delete('/deleteUser/:id', (req,res)=> {
    const id = req.params.id    
    UserModel.findByIdAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err => res.json(err)) 
})
app.listen(3001,()=>{
    console.log("server is running on port 3001.")
})