
const siteRouter = require('./site');
const productRouter = require('./product');
const aboutRouter = require('./about');
const loginRouter = require('./login');

const route = (app) => {
    app.get('/product', productRouter);
    app.get('/about', aboutRouter);
    app.get('/login', loginRouter)
    app.get('/', siteRouter);


}


module.exports = route;