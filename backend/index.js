const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const MissionModel = require('./schema/schema.js');

const app = express();

const mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, {useNewUrlParser: true,
useUnifiedTopology: true});

//get default connection;
const db =  mongoose.connection;


db.on('error', console.log.bind(console, 'MongoDB connection error'));
 
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

app.post('/sendData',(request,response) => {
    let reqBody = request.body;
    console.log(reqBody);

    MissionModel.findOne(reqBody, (err,data) =>{
        if(err){
            const error = err;
            console.log(error);
            response.send(error);
            return;
        }
        if(data){
            response.send(`Comment about this user is exist ${data}`);
            console.log(data);
        }
        else {
            const newMission = new MissionModel(reqBody);
            const saveNewMission = newMission.save();
            console.log(saveNewMission);
            response.send(data || "Mission is not found!")
        }
       
    })
})
const port = 4000;
app.listen(port, (err)=> {
    console.log("Listening to port "+ port);
    if(err){
        console.log("There is a error" + err);
    }
})