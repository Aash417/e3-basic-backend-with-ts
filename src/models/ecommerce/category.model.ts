import { Schema, model } from 'mongoose';

type categoryType = { name: String };

const categorySchema = new Schema<categoryType>(
	{ name: { type: String, required: true } },
	{ timestamps: true }
);

export const Category = model<categoryType>('Category', categorySchema);
