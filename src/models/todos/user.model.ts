import mongoose, { Mongoose } from 'mongoose';

type userType = {
	name: String;
	email: String;
	password: String;
};

type schemaType = userType;

const userSchema = new mongoose.Schema<userType>(
	{
		name: { type: String, required: true, unique: true, lowercase: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: [true, 'password is required'] },
	},
	{ timestamps: true }
);

export const User = mongoose.model<userType>('User', userSchema);
