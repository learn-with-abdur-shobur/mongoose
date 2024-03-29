import { NextFunction, Request, Response } from 'express';
import { getUsersFromDB } from './user.service';

export const getUsers = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const user = await getUsersFromDB();

	res.status(200).json({
		status: 'success',
		data: user,
	});
};
