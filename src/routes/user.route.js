'use strict'
const express = require('express');
const router = express.Router();


const  {users} = require('../auth/models/users');
// const basicAuth = require('../auth/middleware/basic.middle')
// const bearerAuth = require('../auth/middleware/bearer.middle')
// const permissions = require('../auth/middleware/acl.middle')

router.post('/signup', async (req, res, next) => {
  try {
    let userRecord = await users.create(req.body);
    console.log('userRecord--------->',userRecord);
    const output = {
      user: userRecord,
      token: userRecord.token
    };
    res.status(201).json(output);
  } catch (e) {
    next(e.message)
  }
});

// router.post('/signin', basicAuth, (req, res, next) => {
//   const user = {
//     user: req.user,
//     token: req.user.token
//   };
//   res.status(200).json(user);
// });

// router.get('/users', bearerAuth, permissions('delete'), async (req, res, next) => {
//   const userRecords = await users.findAll({});
//   const list = userRecords.map(user => user.username);
//   res.status(200).json(list);
// });

// router.get('/secret', bearerAuth, async (req, res, next) => {
//   res.status(200).send('Welcome to the secret area')
// });

////////////////////////////////////////////////

// authRouter.post('/test', bearerAuth, acl("create") , (req, res) => {
//   res.send('The testing is runing at create !!')
// });

// authRouter.put('/test', bearerAuth, acl("update") ,  (req, res) => {
//    res.send('The testing is runing at update !')
// });

// authRouter.delete('/test', bearerAuth, acl("delete") ,  (req, res) => {
//    res.send('The testing is runing at delete !')
// });

// authRouter.get('/test', bearerAuth, acl("read") ,  (req, res) => {
//    res.send('The testing is runing at read !');
// });

module.exports = router;



