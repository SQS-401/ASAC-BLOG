'use strict';

const express = require('express');
const router = express.Router();
const {blog} = require('../auth/models/index');


// router.param('model', (req, res, next) => {
//     const modelName = req.params.model;
//     if (blog[modelName]) {
//       req.model = blog[modelName];
//       next();
//     } else {
//       next('Invalid Model');
//     }
//   });


router.get('/blogs', getAllBlogs);
router.post('/blogs', createblog);
// router.put('/blogs/:id', updateBlog);
// router.delete('/blogs/:id', deleteBlog);


 async function getAllBlogs(req, res) {
    // get me all data from people
    let customer = await blog.read();
    res.status(200).json(customer);
}


async function createblog(req, res) {
    let newCustomer = req.body;
    let customer = await blog.create(newCustomer);
    res.status(200).json(customer);
}


// async function updateBlog(req, res) {
//     let id=req.params.id
//     let updateCustomer = req.body;
//     let customer = await blog.update(id,updateCustomer);
//     res.status(200).json(customer);
// }


// async function deleteBlog(req, res) {
//     let id=req.params.id
//     let customer = await blog.delete(id);
//     res.status(200).json(customer);
// }


// //  async function getAllBlogs(req, res) {
// //     let getAllBlogs = await req.model.get();
// //     res.status(200).json(getAllBlogs);
// //   }
  

// //   async function getOneBlogs(req, res) {
// //     const id = req.params.id;
// //     let oneBlogs = await req.model.get(id)
// //     res.status(200).json(oneBlogs);
// //   }
  

// //   async function createBlogs(req, res) {
// //     let obj = req.body;
// //     let newBlog = await req.model.create(obj);
// //     res.status(201).json(newBlog);
// //   }
  
// //   async function updateBlogs(req, res) {
// //     const id = req.params.id;
// //     const obj = req.body;
// //     let updatedBlog = await req.model.update(id, obj)
// //     res.status(200).json(updatedBlog);
// //   }
  
// //   async function deleteBlogs(req, res) {
// //     let id = req.params.id;
// //     let deleteBlog = await req.model.delete(id);
// //     res.status(200).json(deleteBlog);
// //   }
  
  
  module.exports = router; 
