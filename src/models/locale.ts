// En locale.ts
import { Model, DataTypes } from 'sequelize';
import db from '../db/connection';
import Person from './person';

class Locale extends Model {
  id_locale!: number;
  region!: string;
  city!: string;
  commune!: string;
  address?: string;
  person!: number; 
}

Locale.init(
  {
    id_locale: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    region: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    city: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    commune: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    person: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: 'locale',
    timestamps: false,
    underscored: true,
  }
);

export default Locale;
