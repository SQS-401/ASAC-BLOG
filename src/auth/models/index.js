'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const DATABASE_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/user'
let sequelizeOptions = {
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        }
      }
  };
let sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);
const blogModel = require('./blogschema');
const blog = blogModel(sequelize, DataTypes);
const userModel = require('./users')
const Collection = require('./data-collection');


module.exports = {
    db: sequelize,
    blog: new Collection(blog),
      users: userModel(sequelize, DataTypes)
};