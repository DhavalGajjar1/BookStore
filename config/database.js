const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://chiragporiya12:Chirag123@bookdata.gvv6b.mongodb.net/')

const db = mongoose.connection

db.on('connected',(err)=>{
    if(err){
        console.log('Database not connected...')
        return false
    }
    console.log('Database connected...')
})

module.exports = db