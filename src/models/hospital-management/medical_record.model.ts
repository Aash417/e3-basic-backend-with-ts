import { Schema, model } from 'mongoose';

type medicalRecordType = {};

const medicalRecordSchema = new Schema<medicalRecordType>(
	{},
	{ timestamps: true }
);

export const MedicalRecord = model<medicalRecordType>(
	'MedicalRecord',
	medicalRecordSchema
);
