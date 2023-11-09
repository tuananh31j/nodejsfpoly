import siteRouter from "./site";
import productRouter from "./product";
import aboutRouter from './about';
import loginRouter from './login'

const route = (app) => {
    app.use('/product', productRouter);
    app.use('/about', aboutRouter);
    app.use('/login', loginRouter)
    app.use('/', siteRouter);


}


export default route;