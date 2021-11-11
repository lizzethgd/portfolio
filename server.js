const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 5000;
const cookieParser = require('cookie-parser')

const app = express();
require('dotenv').config();

//to understand the form dates
app.use(express.json())
app.use(express.static(path.join(__dirname, '/client/build')));
app.use(express.urlencoded({extended: false})) 
app.use(cookieParser())
app.use(cors());

// initialize routes
app.use('/contact_form', require('./server/routes/contacts'));
app.use('/testimonial_form', require('./server/routes/testimonials'));
app.use('/auth', require('./server/routes/auth'));

// error handling middleware
app.use(function(err, req, res, next){
  console.log(err.message); // to see properties of message in our console
  res.status(422).send({error: err.message});
});

// Database setup
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then(() => { console.log("Conected to mongoDB")});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.listen(port, () => {
  console.log(`Server listening for requests on ${port}`);
});