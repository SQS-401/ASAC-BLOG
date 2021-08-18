'use strict';

const blogModel = (sequelize, DataTypes) => sequelize.define('blog', {
  name: { type: DataTypes.STRING, required: true },
  major: { type: DataTypes.STRING, required: true },
  artical: { type: DataTypes.STRING, required: true }
});

module.exports = blogModel;