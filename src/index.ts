import env from 'dotenv';
env.config();
import express, { Express, Request, Response } from 'express';
import { HOST, MONGOPASS } from './constants';
import cors from 'cors';
import { middleware } from './middlewares/logger';
import { mongoConnect } from './helpers/mongoConnect';
import { controllers } from './controllers/controllers';
const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(middleware.run);
mongoConnect(MONGOPASS);
app.use(controllers);
app.get('/', (req: Request, res: Response) => {
  console.log(req.body);
  res.send('Hello');
});

app.listen(Number(process.env.$PORT), HOST, () => {
  console.log('Server up and running;');
});
