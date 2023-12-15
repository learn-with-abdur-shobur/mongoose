import express, { Application } from 'express';
import cors from 'cors';
import userRoute from './modules/user/user.route';
import user2Route from './modules/user2/user2.route';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/user', userRoute);
app.use('/api/v1/user2', user2Route);

export default app;
