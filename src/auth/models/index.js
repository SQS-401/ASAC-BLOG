'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const DATABASE_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/sultan-elayan'
let sequelize = new Sequelize(DATABASE_URL, {});
const blogModel = require('./blogschema');
const blog = blogModel(sequelize, DataTypes);
const userModel = require('./users')
const Collection = require('./data-collection');


module.exports = {
    db: sequelize,
    blog: new Collection(blog),
      users: userModel(sequelize, DataTypes)
};