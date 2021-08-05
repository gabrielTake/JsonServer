import fs from 'fs/promises';
import { join } from 'path'
import { Router } from 'express';

const routes = Router();

const folder = join(__dirname, '..', '..', 'samples',);

routes.get('/', async (req, res) => {
  let folderContents;
  try {
    folderContents = await fs.readdir(folder);
  } catch {
    fs.mkdir(folder);
    return res.json({ message: 'No json file found' });
  }

  //@ts-ignore
  const jsonFiles = [];
  folderContents.forEach(file => {
    if (file.toLowerCase().includes('.json')) {
      jsonFiles.push(file);
    }
  });

  if (!jsonFiles.length) {
    return res.json({ message: 'No json file in the "samples" folder' });
  }

  const file = await fs.readFile(join(folder, folderContents[0]));
  const jsonData = (JSON.parse(file.toString()));
  return res.json(jsonData);
});

export default routes;
