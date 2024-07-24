const express=require('express');
const app=express();
const dotenv=require('dotenv');//this is require access the config files....need to install dotenv
const path=require('path');
//connecting database
const connectDatabase=require('./config/connectDatabase');
dotenv.config({path:path.join(__dirname,'config','config.env')});//path module is required to join or call the file from another folder.it is an already present in express.no need to install

//package for connecting backend and frontend(it will include specific header in api)
const cors=require('cors');

//importing routesoutes/product
const products=require('./routes/product');
const orders=require('./routes/order');

//calling the database
connectDatabase();

//using middle ware to send data from json to req body(req.body)
app.use(express.json())

//another middle ware
app.use(cors());

//setting prefix for routes
app.use('/api/v1/',products);
app.use('/api/v1/',orders);

app.listen(process.env.PORT,()=>{
    console.log(`server is listening to the port ${process.env.PORT} in ${process.env.NODE_ENV}`)
})