import express, { Request, Response } from 'express';
import cors from 'cors';
import router from './app/router';
const app = express();

// parser
app.use(express.json());
app.use(cors());

// router
app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
