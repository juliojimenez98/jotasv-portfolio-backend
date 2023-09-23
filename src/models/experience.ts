// En locale.ts
import { Model, DataTypes } from "sequelize";
import db from "../db/connection";
import Person from "./person";

class Experience extends Model {
  id_experience!: number;
  init_month!: string;
  end_month?: string;
  init_year!: string;
  end_year?: string;
  currently?: string;
  enterprise_name!: string;
  position!: string;
  person!: number;
}

Experience.init(
  {
    id_experience: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    init_month: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    end_month: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    init_year: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    end_year: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    currently: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    enterprise_name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    position: {
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
    tableName: "experience",
    timestamps: false,
    underscored: true,
  }
);

export default Experience;
