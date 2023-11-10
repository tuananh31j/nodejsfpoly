
const morgan = require('morgan');
const express = require('express');
require('dotenv').config();
const configViewEngne = require('./config/viewEngine');
const db = require('./config/db');
const route = require('./routes');

const app = express();
const part = process.env.PORT || 8080;
const hostName = process.env.HOST_NAME
// connect mongodb
db.connect();

// console log rep
// app.use(morgan("combined"))

// midleware for form data
app.use(express.urlencoded({
    extended: true
}))

// config view engine
configViewEngne(app)

// call route
route(app);


// start server
app.listen(part,hostName, () => console.log(`http://localhost:${part}`));