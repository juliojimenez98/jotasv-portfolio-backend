import { Request, Response } from "express";
import Person from "../models/person";

export const getPerson = async (req: Request, res: Response) => {
  const person = await Person.findAll();
  res.json({ msg: "Hola", person });
};
