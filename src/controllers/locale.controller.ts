import { Request, Response } from "express";
import { Contact, Experience, Locale, Person, Skill } from "../models";

export const createLocaleorUpdate = async (req: Request, res: Response) => {
  try {
    const { address, region, commune, city } = req.body;
    const person = await Person.findOne({
      include: [{ model: Contact, where: { email: process.env.PERSON_EMAIL } }],
    });

    const existLocale = await Locale.findAll({
      where: { person: person?.id_person },
    });

    if (existLocale) {
      //actualizar
    } else {
      //crear
      const locale = await Locale.build({
        address: address,
        region: region,
        city: city,
        commune: commune,
        person: person?.id_person,
      });
      await locale.save();
    }
  } catch (error) {
    return res.status(500).json({ msg: "Error en el servidor" });
  }
};
