const mongoose = require('mongoose');
const connectDB = async () => {
  
  try {
    mongoose.set('strictQuery', false);
    const conn = await mongoose.connect("mongodb+srv://zitrablacksite:KOsLI4XZvnXncsxm@zitracluster.2pdoo0n.mongodb.net/eloheinu?retryWrites=true&w=majority");
    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }

}

module.exports = connectDB;