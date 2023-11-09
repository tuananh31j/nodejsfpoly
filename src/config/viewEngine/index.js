import express from 'express';
import { engine } from 'express-handlebars';
import path from "path";


const configViewEngne = (app) => {
    app.use(express.static(path.join('./src', 'public')))
    app.engine('.hbs', engine({
    extname: '.hbs'
    }));
    app.set('view engine', '.hbs');
    app.set('views', path.join('./src', "resources/views"));
    }

export default configViewEngne;