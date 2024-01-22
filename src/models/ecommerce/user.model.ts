import { Schema, model } from 'mongoose';

type userType = {
	name: String;
	email: String;
	password: String;
};

const userSchema = new Schema<userType>(
	{
		name: {
			type: String,
			unique: true,
			required: true,
			lowercase: true,
			email: String,
		},
		email: {
			type: String,
			unique: true,
			required: true,
			lowercase: true,
			email: String,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

export const User = model<userType>('User', userSchema);
