import { SchemaModel, StringType } from 'schema-typed';
export const validation = {
	auth: SchemaModel({
		email: StringType()
			.isEmail('Invalid email')
			.isRequired('Email is required'),
	}),
};
