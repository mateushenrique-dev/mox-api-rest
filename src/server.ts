import 'reflect-metadata'
import express from 'express';
import './database';
import { routes } from './routes'
const app = express();


app.use(routes);

app.listen(3003, () => console.log('server running'));
