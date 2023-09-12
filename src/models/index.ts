// En index.ts
import Person from './person';
import Contact from './contact';
import Locale from './locale';

Person.hasMany(Contact, {
  foreignKey: 'person',
  onDelete: 'CASCADE',
});

Contact.belongsTo(Person, {
  foreignKey: 'person',
  onDelete: 'CASCADE',
});

Person.hasOne(Locale, {
  foreignKey: 'person',
  onDelete: 'CASCADE',
});

Locale.belongsTo(Person, {
  foreignKey: 'person',
  onDelete: 'CASCADE',
});

// Exporta los modelos
export { Person, Contact, Locale };
