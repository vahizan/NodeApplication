const express = require('express');
const mongoose  = require('mongoose');
const config = require('./config/dev');
const Employee = require('./models/employee');
const FakeDb = require('./fake-db');

mongoose.connect(config.DB_URI , { useNewUrlParser : true }).then(() => {

    const fakeDb = new FakeDb();
    fakeDb.seedDb();

});

const app = express();

app.get('/users', function(req, res){
    res.json({ "success" : true });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, function(){
    console.log("Node Server is Running");
});