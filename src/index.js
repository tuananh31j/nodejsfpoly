import morgan from "morgan";
import express from 'express';
import { engine } from 'express-handlebars';
import path from "path";
import route from "./routes";
import db from "./config/db";

const app = express();
const part = 7001;
db.connect();

app.use(morgan("combined"))
app.use(express.urlencoded({
    extended: true
}))
app.use(express.static(path.join(__dirname, 'public')))
app.engine('.hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, "resources/views"));
console.log(express, "đ");

route(app);


app.listen(part, () => console.log(`http://localhost:${part}`));