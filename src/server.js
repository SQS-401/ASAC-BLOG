'use strict';

const express = require('express');
const app = express();
app.use(express.json());

const blogRouter = require('./routes/blogs.route')
const userRouter = require('./routes/user.route')
app.use(blogRouter);
app.use(userRouter);
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