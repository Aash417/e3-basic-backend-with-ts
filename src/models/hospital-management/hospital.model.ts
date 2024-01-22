import { Schema, Types, model } from 'mongoose';

type hospitalType = {
	name: String;
	addressLine1: String;
	addressLine2: String;
	pincode: String;
	specializedIn: Types.Array<String>;
};

const hospitalSchema = new Schema<hospitalType>(
	{
		name: { type: String, required: true },
		addressLine1: { type: String, required: true },
		addressLine2: { type: String },
		pincode: {
			type: String,
			required: true,
		},
		specializedIn: [{ type: String }],
	},
	{ timestamps: true }
);

export const Hospital = model<hospitalType>('Hospital', hospitalSchema);
