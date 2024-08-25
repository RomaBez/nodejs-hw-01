import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  const contactsData = await fs.readFile(PATH_DB, 'utf-8');

  const contacts = JSON.parse(contactsData);

  if (contacts.length > 0) {
    contacts.pop();
    await fs.writeFile(PATH_DB, JSON.stringify(contacts));
  }
};

removeLastContact();
