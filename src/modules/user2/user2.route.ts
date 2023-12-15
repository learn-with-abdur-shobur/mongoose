import express from 'express';
import { getUser2 } from './user2.controller';

const user2Route = express.Router();

user2Route.get('/', getUser2);

export default user2Route;
