// En index.ts
import Person from "./person";
import Contact from "./contact";
import Locale from "./locale";
import Skill from "./skill";
import Experience from "./experience";

Person.hasMany(Contact, {
  foreignKey: "person",
  onDelete: "CASCADE",
});

Contact.belongsTo(Person, {
  foreignKey: "person",
  onDelete: "CASCADE",
});

Person.hasOne(Locale, {
  foreignKey: "person",
  onDelete: "CASCADE",
});

Locale.belongsTo(Person, {
  foreignKey: "person",
  onDelete: "CASCADE",
});
Person.hasMany(Skill, {
  foreignKey: "person",
  onDelete: "CASCADE",
});

Skill.belongsTo(Person, {
  foreignKey: "person",
  onDelete: "CASCADE",
});

Person.hasMany(Experience, {
  foreignKey: "person",
  onDelete: "CASCADE",
});

Experience.belongsTo(Person, {
  foreignKey: "person",
  onDelete: "CASCADE",
});
// Exporta los modelos
export { Person, Contact, Locale, Skill, Experience };
