import { Request, Response } from "express";
import { Contact, Locale, Person } from "../models";

export const getPerson = async (req: Request, res: Response) => {
  const person = await Person.findByPk(1,{include:[{model:Contact},{model:Locale}]})
  res.status(200).json({ msg: "ok", person });
};
