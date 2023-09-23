import { Request, Response } from "express";
import { Contact, Experience, Locale, Person, Skill } from "../models";

export const getPerson = async (req: Request, res: Response) => {
  try {
    const person = await Person.findByPk(1, {
      include: [
        { model: Contact },
        { model: Locale },
        { model: Skill },
        { model: Experience },
      ],
    });
    return res.status(200).json({ msg: "ok", person });
  } catch (error) {
    return res.status(500).json({ msg: "Error en el servidor" });
  }
};
