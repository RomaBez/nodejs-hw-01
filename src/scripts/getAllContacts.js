import * as fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  const allContacts = await fs.readFile(PATH_DB, 'utf-8');
  return JSON.parse(allContacts);
};

console.log(await getAllContacts());
