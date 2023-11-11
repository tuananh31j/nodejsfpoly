
const siteRouter = require('./site');
const productRouter = require('./product');
const aboutRouter = require('./about');
const loginRouter = require('./login');

const route = (app) => {
    app.use('/product', productRouter);
    app.use('/about', aboutRouter);
    app.use('/login', loginRouter)
    app.use('/', siteRouter);


}


module.exports = route;