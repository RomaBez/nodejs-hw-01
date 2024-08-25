import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';

const generateContacts = async (number) => {
  const currentContactsJson = await fs.readFile(PATH_DB, 'utf-8');

  const currentContacts = currentContactsJson
    ? JSON.parse(currentContactsJson)
    : [];

  const generatedContacts = Array(number).fill(0).map(createFakeContact);

  const newContactsList = [...currentContacts, ...generatedContacts];

  await fs.writeFile(PATH_DB, JSON.stringify(newContactsList));
};

generateContacts(5);
