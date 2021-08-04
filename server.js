require('dotenv').config()
const express = require("express");
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json())
// Have Node serve the files for our built React app
app.use(express.static(path.join(__dirname, '/client/build')));

app.use(cors());

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello my dear Lizzeth from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening for requests on ${PORT}`);
});