import { DataTypes } from 'sequelize';
import db from '../config/database.cjs';
import User from './user.model.js';           
import Category from './category.model.js'; 

const { sequelize } = db;

const Post = sequelize.define('Post', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  tableName: 'posts',
  timestamps: true,
});


Post.belongsTo(User, { foreignKey: 'userId', as: 'author' });
User.hasMany(Post, { foreignKey: 'userId', as: 'posts' });

Post.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });
Category.hasMany(Post, { foreignKey: 'categoryId', as: 'posts' });

export default Post;
