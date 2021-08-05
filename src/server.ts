import express from 'express';
import routes from './routes/index';

const app = express();
app.use(express.json());
app.use(routes);

const PORT = 3333;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`> Listening on port ${PORT}`);
});
