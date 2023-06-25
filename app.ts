import dotenv from "dotenv";
dotenv.config({ path: __dirname + "/../.env" });
import Server from "./src/models/server";

const server = new Server();

server.listen();
