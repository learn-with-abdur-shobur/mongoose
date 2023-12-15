import express from 'express';
import { getUsers } from './user.controller';
const userRoute = express.Router();

userRoute.get('/', getUsers);

export default userRoute;
