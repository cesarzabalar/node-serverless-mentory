/* eslint-disable no-console */
const db = require('./database/db');
const Rol = require('./database/models/rol.model');
const User = require('./database/models/user.model');

const process = async () => {
	try {
		await db();
		/*const rol = await createRol({
			name: 'Developer',
			description: 'Something',
		});
		console.log(rol);*/

		/*const user = await createUser({
			name: 'cesar',
			lastName: 'aranzazu',
			age: 40,
			rol: '618d539602b46318cd616836',
		});
		console.log(user);*/

		const users = await updateUser();
		console.log('%o', users);
	} catch (err) {
		console.log(err.message);
	}
};

const createRol = async (data) => {
	/*const rol = new Rol(data);
	rol.description = 'something';
	rol.name = 'other';*/
	try {
		//await rol.save();
		return await Rol.create(data);
	} catch (err) {
		console.log(err.message);
	}
};

const createUser = async (data) => {
	try {
		return await User.create(data);
	} catch (err) {
		console.log(err.message);
	}
};

const findUsers = async () => {
	const id = '618d61e0cde2557e387555a4';
	try {
		return await User.find({ _id: id });
	} catch (err) {
		console.log(err.message);
	}
};

const updateUser = async () => {
	const id = '618d61e0cde2557e387555a4';
	try {
		return await User.findOneAndUpdate(
			{ _id: id },
			{ lastName: 'Zabala', age: 35, rol: '618d539602b46318cd616836' },
			{ upsert: true },
		);
	} catch (err) {
		console.log(err.message);
	}
};

process();
