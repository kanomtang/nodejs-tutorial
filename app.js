const express = require('express');
const bodyParser = require('body-parser');

const person = require('./routes/person.route'); // Imports routes for the person
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://localhost:27017/tutorial';

const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/person', person);

let port = 3000;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});