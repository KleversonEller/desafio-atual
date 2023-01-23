import express from 'express';
import cors from 'cors';
import 'express-async-errors';

import middlewareError from '@middleware/error.middleware';
import postRouter from './routers/post.routes';

const app = express();
const port = process.env.PORT || 3015

app.use(express.json());
app.use(cors());

app.use(postRouter);

app.use(middlewareError);

app.listen(port, () => console.log(`Utilizando a porta ${port}}`));
