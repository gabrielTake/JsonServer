import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'hello from Template' });
});

export default routes;
