'use strict';

const express = require('express');
const router = express.Router();
const {blog} = require('../auth/models/index');


const bearerAuth = require('../auth/middleware/bearer.middle')
const permissions = require('../auth/middleware/acl.middle')



router.get('/blogs',bearerAuth, getAllBlogs);
router.post('/blogs',bearerAuth,permissions('create'),createblog);
router.put('/blogs/:id',bearerAuth,permissions('update'), updateBlog);
router.delete('/blogs/:id',bearerAuth, permissions('delete'),deleteBlog);


 async function getAllBlogs(req, res) {

    let Blog = await blog.read();
    res.status(200).json(Blog);
}


async function createblog(req, res) {
    let newBlog = req.body;
    let Blog = await blog.create(newBlog);
    res.status(200).json(Blog);
}


async function updateBlog(req, res) {
    let id=req.params.id
    let updateBlog = req.body;
    let Blog = await blog.update(id,updateBlog);
    res.status(200).json(Blog);
}


async function deleteBlog(req, res) {
    let id=req.params.id
    await blog.delete(id);
    res.status(200).json('Delete is Done ....!!!');
}
  
  module.exports = router; 
