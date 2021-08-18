'use strict';

const express = require('express');
const app = express();
app.use(express.json());

const blogRouter = require('./routes/blogs.route')
const userRouter = require('./routes/user.route')
app.use(blogRouter);
app.use(userRouter);

const errorHandler = require('./error-handlers/500');
const notFound = require('./error-handlers/404');

app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.send('helloooooooo')
})

const start=(port)=>{
    app.listen(port,()=>console.log(`listining to port :  ${port}` ))
}

module.exports={
    start:start,
    app:app
};