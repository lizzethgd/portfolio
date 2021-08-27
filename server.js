const express = require("express");
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const cookieParser = require('cookie-parser')

const app = express();

require('dotenv').config();
app.use(cors());

//to understand the form dates
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cookieParser())

// Database setup
mongoose.connect(process.env.URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then(() => { console.log("Conected to mongoDB")});

// initialize routes
app.use('/contact_form', require('./server/routes/contacts'));
app.use('/testimonial_form', require('./server/routes/testimonials'));
app.use('/auth', require('./server/routes/auth'));

// Have Node serve the files for our built React app
app.use(express.static(path.join(__dirname, '/client/build')));

// Handle GET requests to /api route
app.get("/", (req, res) => {
  res.json();
}); 

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening for requests on ${PORT}`);
});