// En locale.ts
import { Model, DataTypes } from 'sequelize';
import db from '../db/connection';
import Person from './person';

class Skill extends Model {
  id_skill!: number;
  name!: string;
  description?: string;
  level!: string;
  person!: number; 
}

Skill.init(
  {
    id_skill: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    level: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    person: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: 'skill',
    timestamps: false,
    underscored: true,
  }
);

export default Skill;
