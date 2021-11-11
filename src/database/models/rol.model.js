const mongoose = require('mongoose');
const { Schema } = mongoose;

const RolSchema = new Schema(
	{
		name: { type: String, required: true, default: 'admin' },
	},
	{
		strict: false,
		timestamps: true,
	},
);

module.exports = mongoose.model('Rol', RolSchema);
