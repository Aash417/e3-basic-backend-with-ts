import { Schema, Types, model } from 'mongoose';

type doctorType = {
	name: String;
	salary: Number;
	qualification: String;
	experienceInYears: Number;
	worksInHospital: Types.Array<String>;
};

const doctorSchema = new Schema<doctorType>(
	{
		name: { type: String, required: true },
		salary: { type: Number, required: true },
		experienceInYears: { type: Number, default: 0 },
		worksInHospital: [
			{
				type: Types.ObjectId,
				ref: 'Hospital',
			},
		],
	},
	{ timestamps: true }
);

export const Doctor = model<doctorType>('Doctor', doctorSchema);
