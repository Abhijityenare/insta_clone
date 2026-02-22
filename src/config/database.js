const mongoose = require('mongoose')


function connetToDB(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('connected to db');
    })
}

module.exports = connetToDB;