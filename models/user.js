'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     associate(models) {
      models.User.hasMany(models.Post)
    }
  }
  User.init({
    userid: DataTypes.INTEGER,
    email: DataTypes.STRING,
    prenom: DataTypes.STRING,
    nom: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};