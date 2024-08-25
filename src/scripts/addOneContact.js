import * as fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  const currentContactsJson = await fs.readFile(PATH_DB, 'utf-8');

  const currentContacts = currentContactsJson
    ? JSON.parse(currentContactsJson)
    : [];

  const newContact = createFakeContact();
  currentContacts.push(newContact);

  await fs.writeFile(PATH_DB, JSON.stringify(currentContacts));
};

addOneContact();
