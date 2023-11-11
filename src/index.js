
const morgan = require('morgan');
const express = require('express');
require('dotenv').config();
const configViewEngne = require('./config/viewEngine');
const db = require('./config/db');
const routeWeb = require('./routes/web');
const routesApi = require('./routes/api')

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

// route web server side
routeWeb(app);

// router api client side
app.use('/api', () => routesApi(app))

// start server
app.listen(part,hostName, () => console.log(`http://localhost:${part}`));