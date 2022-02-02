'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     models.Post.belongsTo(models.User, {
       foreignkey: {
         allowNull: false
       }
     })
    }
  }
  Post.init({
    postid: DataTypes.INTEGER,
    userid: DataTypes.INTEGER,
    postcontent: DataTypes.STRING,
    postimageURL: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};