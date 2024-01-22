import { Schema, model } from 'mongoose';

type orderType = {
	orderPrice: Number;
	customer: Schema.Types.ObjectId;
	orderItem: orderItemType[];
	address: String;
	status: String;
};
type orderItemType = {
	productId: Schema.Types.ObjectId;
	quantity: Number;
};

const orderItemSchema = new Schema<orderItemType>({
	productId: { type: Schema.Types.ObjectId, ref: 'Product' },
	quantity: {
		type: Number,
		required: true,
	},
});

const orderSchema = new Schema<orderType>(
	{
		orderPrice: {
			type: Number,
			required: true,
		},
		customer: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
		orderItem: { type: [orderItemSchema] },
		address: { type: String, required: true },
		status: {
			type: String,
			enum: ['PENDING', 'CANCELLED', 'DELIVERED'],
			default: 'PENDING',
		},
	},
	{ timestamps: true }
);

export const Order = model<orderType>('Order', orderSchema);
