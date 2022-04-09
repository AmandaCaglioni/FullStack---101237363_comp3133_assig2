const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const userRouter = require('./routes/user');

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

app.use('/user', userRouter);

const url = "mongodb://localhost:27017/NewProject"

mongoose.connect(url, {useNewUrlParser: true}, (err)=>{
    if(err) throw err;
    console.log("Connected to Database");
})

app.listen(5000, () => {
    console.log("Listening at Port 5000");
})