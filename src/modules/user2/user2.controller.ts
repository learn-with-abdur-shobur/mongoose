import { Response } from 'express';
import { getUser2FromDb } from './user2.service';

export const getUser2 = async (req, res: Response) => {
	const result = await getUser2FromDb();
	res.status(200).json({
		message: 'success',
		data: result,
	});
};
