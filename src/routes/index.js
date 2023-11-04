import siteRouter from "./site";
import productRouter from "./product";

const route = (app) => {
    app.use('/product', productRouter)
    app.use('/', siteRouter)

}


export default route;