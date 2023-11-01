
import morgan from "morgan"
import express from 'express';
import { engine } from 'express-handlebars';
import path from "path"

const app = express();
const part = 7001;
app.use(morgan("combined"))
app.use(express.static(path.join(__dirname, 'public')))



app.engine('.hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, "resources/views"));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/tt', (req, res) => {
    res.render('tt');
});

app.listen(part, () => console.log(`http://localhost:${part}`));