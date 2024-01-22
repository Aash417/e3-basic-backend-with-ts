import { Schema, model } from 'mongoose';

type productType = {
	description: String;
	name: String;
	productImage: String;
	price: Number;
	stock: Number;
	category: Schema.Types.ObjectId;
	owner: Schema.Types.ObjectId;
};

const productSchema = new Schema<productType>(
	{
		description: { type: String, required: true },
		name: { type: String, required: true },
		productImage: { type: String },
		price: { type: Number, default: 0 },
		stock: { type: Number, default: 0 },
		category: {
			type: Schema.Types.ObjectId,
			ref: 'Category',
			required: true,
		},
		owner: { type: Schema.Types.ObjectId, ref: 'User' },
	},
	{ timestamps: true }
);

export const Product = model<productType>('Product', productSchema);
