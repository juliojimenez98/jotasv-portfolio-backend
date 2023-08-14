import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import db from "../db/connection";
import personRouter from "../routes/person.routes";

class Server {
  private app: Application;
  private port: string;
  private apiPath = {
    person: "/api/person",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT!;

    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log("Se ha conectado a la base de datos exitosamente");
    } catch (error: any) {
      console.log("error de bbdd");
      console.log(error);
      throw new Error(error);
    }
  }

  middlewares() {
    this.app.use(bodyParser.json());
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use(this.apiPath.person, personRouter);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto : ${this.port}`);
    });
  }
}

export default Server;
