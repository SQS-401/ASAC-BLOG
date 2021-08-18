'use strict'
const express = require('express');
const base64 = require('base-64');
const bcrypt = require('bcrypt');
const router = express.Router();
const { users } = require('../auth/models');
const basicAuth = require('../auth/middleware/basic.middle')
const bearerAuth = require('../auth/middleware/bearer.middle')
const permissions = require('../auth/middleware/acl.middle')

router.post('/signup', async (req, res, next) => {
  try {
    let userRecord = await users.create(req.body);
    console.log('userRecord--------->', userRecord);
    const output = {
      user: userRecord,
      token: userRecord.token
    };
    res.status(201).json(output);
  } catch (e) {
    next(e.message)
  }
});

router.post('/signin', basicAuth, (req, res, next) => {
const user = {
    user: req.user,
    token: req.user.token
  };
  res.status(200).json(user);
});


router.get('/showAllUsers', bearerAuth, permissions("delete"), async (req, res, next) => {
  const userRecords = await users.findAll({});
  const list = userRecords.map(user => user.username);
  res.status(200).json(list);
});

router.get('/testBarerAuth', bearerAuth, async (req, res, next) => {
  res.status(200).send('Welcome to the secret area')
});




router.put('/test', bearerAuth, permissions("update"), async(req, res) => {
 
  const id = req.id;
   console.log('req.body.password',req.body.password);
   let hashedPass = await bcrypt.hash(req.body.password, 10);
   req.body.password = hashedPass;
   console.log('req.body.password after',req.body.password);
  try{
    let recordById = await users.findOne({where: {id}}); 
    let updated = await recordById.update(req.body);
    res.status(200).send('you account has been updated  ! ')
} catch(e) {
    console.error('error updating the record for model: ', `id: ${id}`)
}
});


router.delete('/deleteAccount', bearerAuth, permissions("delete"), async (req, res) => {

  console.log('req.id->>>>>>>>>>>>>>>>>>>>>>>>>>>>', req.id);
  const id = req.id
  try {
    let deleted = await users.destroy({ where: { id } });
    res.send('you account has been deleted  !')
  } catch (e) {
    console.error('error deleting the record for model: ',  `id: ${id}`)
  }
});


module.exports = router;



