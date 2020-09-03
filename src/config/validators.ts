import { Schema } from 'rsuite';

const { StringType, NumberType } = Schema.Types;

export const validators = {
    /*================= Signup Form Validator ==================*/
    signup: Schema.Model({
        username: StringType().isRequired('Name is required.'),
        email: StringType()
            .isEmail('Invalid email address.')
            .isRequired('Email is required.'),

        password: StringType().isRequired('Password is required.'),
    }),

    /*================= Login Form Validator ==================*/
    login: Schema.Model({
        email: StringType()
            .isEmail('Invalid email address.')
            .isRequired('Email is required.'),

        password: StringType().isRequired('Password is required.'),
    }),

    /*================= Add Transaction Form Validator ==================*/
    addTransaction: Schema.Model({
        type: StringType().isRequired('Type is required.'),
        description: StringType().isRequired('Description is required.'),
        amount: NumberType().isRequired('Amount is required.'),
    }),
};
