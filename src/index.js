import morgan from "morgan";
import express from 'express';
import route from "./routes";
import db from "./config/db";
import 'dotenv/config';
import configViewEngne from "./config/viewEngine";

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