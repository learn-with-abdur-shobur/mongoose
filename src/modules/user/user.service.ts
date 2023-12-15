import { i_user } from './user.interface';
import { User } from './user.model';

export const getUsersFromDB = async (): Promise<i_user[]> => {
	const users = await User.find();
	return users;
};
