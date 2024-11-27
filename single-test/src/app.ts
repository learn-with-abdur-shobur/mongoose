import express, {
	Application,
	NextFunction,
	Request,
	Response,
	json,
} from 'express';
import cors from 'cors';
import { Schema, model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const app: Application = express();
// appp

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req: Request, res: Response, next: NextFunction) => {
	const user = await createUser();
	console.log(user);

	res.send(JSON.stringify(user));
});

// insert new test data
interface i_user {
	id: string;
	role: 'student' | 'teacher';
	name: string;
	email: string;
}

const userSchema = new Schema<i_user>({
	email: { type: String, required: true },
	id: { type: String, required: true, unique: true, default: uuidv4 },
	name: { type: String, required: true },
	role: { type: String, required: true },
});

const User = model<i_user>('User', userSchema);

async function createUser() {
	const user = new User({
		name: 'Bill',
		email: 'bill@initech.com',
		avatar: 'https://i.imgur.com/dM7Thhn.png',
		role: 'student',
	});
	await user.save();
	return user;
}

export default app;
