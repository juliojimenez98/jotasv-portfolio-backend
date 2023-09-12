import { Model, DataTypes } from 'sequelize';
import db from '../db/connection';

class Contact extends Model {
  id_contact!: number;
  email!: string;
  phone!: string;
  person!: number; // Esto es la clave foránea relacionada con Person
}

Contact.init({
  id_contact: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  phone: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  person: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  tableName: 'contact',
  timestamps: false,
  underscored: true,
});

export default Contact;
