'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const DATABASE_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/user'
const blogModel = require('./blogschema');
const users = require('./users')
const Collection = require('./data-collection');


let sequelize = new Sequelize(DATABASE_URL, {});

const blog = blogModel(sequelize, DataTypes);
const userCollection = users(sequelize, DataTypes);



module.exports = {
    db: sequelize,
    blog: new Collection(blog),
    user:userCollection
    //   users: userModel(sequelize, DataTypes),
};