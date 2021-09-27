import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors()); //criado sem dependencia de desenvolvimento -D
app.use(express.json());
app.use(routes);
//sem parametro no listen vem 80 como default

app.listen(3333);