import { Schema, model } from 'mongoose';

type patientType = {
	name: String;
	diagnoseWith: String;
	address: String;
	age: Number;
	bloodGroup: String;
	gender: String;
	admittedIn: Schema.Types.ObjectId;
};

const patientSchema = new Schema<patientType>(
	{
		name: { type: String, required: true },
		diagnoseWith: { type: String, required: true },
		address: { type: String, required: true },
		age: { type: String, required: true },
		bloodGroup: { type: String, required: true },
		gender: { type: String, enum: ['M', 'F', 'O'], required: true },
		admittedIn: { type: Schema.Types.ObjectId, ref: 'Hospital' },
	},
	{ timestamps: true }
);

export const Patient = model<patientType>('Patient', patientSchema);
