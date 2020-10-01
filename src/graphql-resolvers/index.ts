import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	DateTime: any;
};

export type Query = {
	__typename?: 'Query';
	_empty?: Maybe<Scalars['String']>;
	hello: Scalars['String'];
	transactions: Array<Maybe<Transaction>>;
	transaction: Transaction;
};

export type QueryTransactionArgs = {
	transactionId: Scalars['String'];
};

export type Mutation = {
	__typename?: 'Mutation';
	_empty?: Maybe<Scalars['String']>;
	auth: AuthResponse;
	verifyCode: VerifyCodeResponse;
	createTransaction: Transaction;
	updateTransaction: Transaction;
	deleteTransaction: Transaction;
};

export type MutationAuthArgs = {
	user: AuthInput;
};

export type MutationVerifyCodeArgs = {
	code: Scalars['String'];
};

export type MutationCreateTransactionArgs = {
	transaction: TransactionInput;
};

export type MutationUpdateTransactionArgs = {
	transactionId: Scalars['String'];
	transaction: TransactionInput;
};

export type MutationDeleteTransactionArgs = {
	transactionId: Scalars['String'];
};

export type Subscription = {
	__typename?: 'Subscription';
	_empty?: Maybe<Scalars['String']>;
};

export type User = {
	__typename?: 'User';
	id: Scalars['ID'];
	email: Scalars['String'];
	active: Scalars['Boolean'];
	updatedAt?: Maybe<Scalars['DateTime']>;
	createdAt?: Maybe<Scalars['DateTime']>;
};

export type AuthInput = {
	email: Scalars['String'];
};

export type AuthResponse = {
	__typename?: 'AuthResponse';
	message: Scalars['String'];
};

export type VerifyCodeResponse = {
	__typename?: 'VerifyCodeResponse';
	message: Scalars['String'];
	token: Scalars['String'];
};

export type Transaction = {
	__typename?: 'Transaction';
	id: Scalars['ID'];
	type: Scalars['String'];
	description: Scalars['String'];
	amount: Scalars['Int'];
	user: User;
	updatedAt: Scalars['DateTime'];
	createdAt: Scalars['DateTime'];
};

export type TransactionInput = {
	type: Scalars['String'];
	description: Scalars['String'];
	amount: Scalars['Int'];
};

export type AuthMutationVariables = Exact<{
	email: Scalars['String'];
}>;

export type AuthMutation = { __typename?: 'Mutation' } & {
	auth: { __typename?: 'AuthResponse' } & Pick<AuthResponse, 'message'>;
};

export const AuthDocument = gql`
	mutation auth($email: String!) {
		auth(user: { email: $email }) {
			message
		}
	}
`;
export type AuthMutationFn = Apollo.MutationFunction<
	AuthMutation,
	AuthMutationVariables
>;

/**
 * __useAuthMutation__
 *
 * To run a mutation, you first call `useAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authMutation, { data, loading, error }] = useAuthMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useAuthMutation(
	baseOptions?: Apollo.MutationHookOptions<
		AuthMutation,
		AuthMutationVariables
	>
) {
	return Apollo.useMutation<AuthMutation, AuthMutationVariables>(
		AuthDocument,
		baseOptions
	);
}
export type AuthMutationHookResult = ReturnType<typeof useAuthMutation>;
export type AuthMutationResult = Apollo.MutationResult<AuthMutation>;
export type AuthMutationOptions = Apollo.BaseMutationOptions<
	AuthMutation,
	AuthMutationVariables
>;
