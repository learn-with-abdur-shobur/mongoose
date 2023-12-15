import mongoose from 'mongoose';
import app from './app';

const port: number = 9000;

main().catch((err) => console.log(err));

async function main() {
	try {
		await mongoose.connect('mongodb://127.0.0.1:27017/test');
		// use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
		console.log('connect success');
		app.listen(port, () => {
			console.log(`Example app listening on port ${port}`);
		});
	} catch (error) {
		console.log('Error', error);
	}
}
