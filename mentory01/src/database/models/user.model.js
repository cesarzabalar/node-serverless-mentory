const mongoose = require('mongoose');
const { Schema, Types } = mongoose;

const UserSchema = new Schema(
	{
		name: { type: String, required: true, default: 'cesar' },
		lastName: { type: String, required: true },
		age: { type: Number },
		rol: [{ type: Types.ObjectId, ref: 'Rol' }],
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model('User', UserSchema);
