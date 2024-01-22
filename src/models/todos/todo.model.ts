import { Schema, model, connect } from 'mongoose';

type ReferenceType = Schema.Types.ObjectId;
type todoType = {
	content: String;
	complete: Boolean;
	createdBy: ReferenceType;
	subtodo: [{ type: ReferenceType; ref: String }];
};

const todoSchema = new Schema<todoType>(
	{
		content: {
			type: String,
			required: true,
		},
		complete: {
			type: Boolean,
			default: false,
		},
		createdBy: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
		subtodo: [{ type: Schema.Types.ObjectId, ref: 'SubTodo' }],
	},
	{ timestamps: true }
);

export const Todo = model('Todo', todoSchema);
