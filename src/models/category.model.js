import { DataTypes } from 'sequelize'; // <-- LINHA ADICIONADA
import db from '../config/database.cjs';
const { sequelize } = db;

const Category = sequelize.define('Category', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  tableName: 'categories',
  timestamps: true,
});

export default Category;
