// Require packages and modules
const express = require('express'); // import Express.js
const routes = require('./routes'); // Imports routes
// import sequelize connection
const sequelize = require('./config/connection');

const app = express(); // create instance of Express.js
const PORT = process.env.PORT || 3001; // Define port to listen on 3001

app.use(express.json()); // Middleware to parse JSON data
app.use(express.urlencoded({ extended: true })); // Middleward for parsing URL encoded data

app.use(routes); // use defined routes

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => { // start server and listen on 3001
    console.log(`App listening on port ${PORT}!`) // log message to show server is running and listening
  })
});
