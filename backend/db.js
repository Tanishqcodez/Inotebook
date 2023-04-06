const mongoose = require('mongoose')
const mongoUri = 'mongodb://127.0.0.1/inotebook'



const connectToMongo = async ()=>{
    await mongoose.connect(mongoUri).then( console.log('Database connected'))
} 
  


module.exports = connectToMongo