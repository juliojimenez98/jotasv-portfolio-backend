import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
} from "sequelize";
import db from "../db/connection";

class Person extends Model<
  InferAttributes<Person>,
  InferCreationAttributes<Person>
> {
  id_person?: number;
  nombre!: string;
  lastnamep!: string;
  lastnamem!: string;
  img?: string;
  cv_link?: string;
}

Person.init(
  {
    id_person: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    lastnamep: {
      type: DataTypes.STRING,
    },
    lastnamem: {
      type: DataTypes.STRING,
    },
    img: {
      type: DataTypes.STRING,
    },
    cv_link: {
      type: DataTypes.STRING,
    },
  },
  { sequelize: db, timestamps: false, tableName: "person" }
);

export default Person;
