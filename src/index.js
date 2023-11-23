
const morgan = require('morgan');
const express = require('express');
require('dotenv').config();
const configViewEngne = require('./config/viewEngine');
const db = require('./config/db');
const routeWeb = require('./routes/web');
const routesApi = require('./routes/api');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;
const HOST_NAME = process.env.HOST_NAME
// connect mongodb
db.connect();

app.use(express.json());
app.use(cors());

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
app.use('/api', routesApi)

// start server
app.listen(PORT, HOST_NAME, () => console.log(`http://${HOST_NAME}:${PORT}`));