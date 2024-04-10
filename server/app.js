const env = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require("express");
const connectDB = require("./config/db");

env.config();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: false
}));
app.use(cors());

connectDB();

const PORT = process.env.PORT || 5000;

app.use('/auth', require('./routes/authRoutes'));
app.use('/user', require('./routes/userRoutes'));
app.use('/listings', require('./routes/listRoutes'));

app.listen(PORT, () => {
  console.log(`App is listening to PORT ${PORT}`)
})