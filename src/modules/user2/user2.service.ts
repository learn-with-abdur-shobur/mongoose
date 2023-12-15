import { User } from '../user/user.model';

export const getUser2FromDb = async () => {
	const users = User.find();
	return users;
};
