import { Schema, model } from 'mongoose';
import { i_user } from './user.interface';
import { v4 as uuidv4 } from 'uuid';

const userSchema = new Schema<i_user>({
	email: { type: String, required: true },
	id: { type: String, required: true, unique: true, default: uuidv4 },
	name: { type: String, required: true },
	role: { type: String, required: true },
});

export const User = model<i_user>('User', userSchema);
