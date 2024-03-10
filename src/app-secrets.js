import express from 'express';
import validateUser from './util/validate-user.js';

const app = express();

export { app as handlers };
app.use(express.json());

app.use(async (req, res, next) => {
  let user = await validateUser(req, res);
  if (!user) {
    return;
  }
  next();
});

app.post('/', async (req, res) => {
  const { name, value } = req.body;

  res.status(200).send({ status: 'ok' });
});

app.get('/:name', async (req, res) => {
  const name = req.params.name;

  res.sendStatus(204);
});
