const mongoose = require('mongoose');
require('dotenv').config()
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_LINK_CLOUD)
        console.log("Connected!");
    } catch (error) {
        console.log(error);
    }
}

module.exports = { connect };

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = process.env.MONGODB_LINK_CLOUD;
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function connect() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   }catch(err){
//     console.log(err)
//     }finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }

// module.exports = {connect};