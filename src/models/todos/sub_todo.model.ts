import mongoose, { Schema, model } from 'mongoose';

type subTodoType = {
	content: String;
	complete: Boolean;
	createdBy: Schema.Types.ObjectId;
};

const subTodoSchema = new Schema<subTodoType>(
	{
		content: { type: String, required: true },
		complete: { type: Boolean, default: false },
		createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
	},
	{ timestamps: true }
);

export const SubTodo = model<subTodoType>('SubTodo', subTodoSchema);
