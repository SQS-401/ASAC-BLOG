'use strict';

const express = require('express');
const app = express();
app.use(express.json());

const blogRouter = require('./routes/blogs.route')

app.use(blogRouter)

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