import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
const gql = Apollo.gql;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Upload: any;
  ObjectID: any;
};




export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']>;
  hello: Scalars['String'];
  getCurrentUser: User;
  transactions: Array<Transaction>;
  transaction: Transaction;
};


export type QueryTransactionArgs = {
  transactionId: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']>;
  signup: Signup;
  login: Login;
  createTransaction: Transaction;
  updateTransaction: Transaction;
  deleteTransaction: Transaction;
};


export type MutationSignupArgs = {
  user?: Maybe<SignupInput>;
};


export type MutationLoginArgs = {
  user: LoginInput;
};


export type MutationCreateTransactionArgs = {
  transaction: TransactionInput;
};


export type MutationUpdateTransactionArgs = {
  transaction: TransactionInput;
  transactionId: Scalars['String'];
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
  username: Scalars['String'];
  email: Scalars['String'];
};

export type Login = {
  __typename?: 'Login';
  token: Scalars['String'];
};

export type Signup = {
  __typename?: 'Signup';
  token: Scalars['String'];
};

export type SignupInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Transaction = {
  __typename?: 'Transaction';
  id: Scalars['ID'];
  type: Scalars['String'];
  description: Scalars['String'];
  amount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type TransactionInput = {
  type: Scalars['String'];
  description: Scalars['String'];
  amount: Scalars['Int'];
};

export type CreateTransactionMutationVariables = Exact<{
  type: Scalars['String'];
  description: Scalars['String'];
  amount: Scalars['Int'];
}>;


export type CreateTransactionMutation = (
  { __typename?: 'Mutation' }
  & { createTransaction: (
    { __typename?: 'Transaction' }
    & Pick<Transaction, 'type' | 'description' | 'amount' | 'createdAt'>
  ) }
);

export type DeleteTransactionMutationVariables = Exact<{
  transactionId: Scalars['String'];
}>;


export type DeleteTransactionMutation = (
  { __typename?: 'Mutation' }
  & { deleteTransaction: (
    { __typename?: 'Transaction' }
    & Pick<Transaction, 'id' | 'type'>
  ) }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'Login' }
    & Pick<Login, 'token'>
  ) }
);

export type SignupMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignupMutation = (
  { __typename?: 'Mutation' }
  & { signup: (
    { __typename?: 'Signup' }
    & Pick<Signup, 'token'>
  ) }
);

export type UpdateTransactionMutationVariables = Exact<{
  type: Scalars['String'];
  description: Scalars['String'];
  amount: Scalars['Int'];
  transactionId: Scalars['String'];
}>;


export type UpdateTransactionMutation = (
  { __typename?: 'Mutation' }
  & { updateTransaction: (
    { __typename?: 'Transaction' }
    & Pick<Transaction, 'id' | 'type' | 'amount' | 'description'>
  ) }
);

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserQuery = (
  { __typename?: 'Query' }
  & { getCurrentUser: (
    { __typename?: 'User' }
    & Pick<User, 'username'>
  ) }
);

export type GetTransactionQueryVariables = Exact<{
  transactionId: Scalars['String'];
}>;


export type GetTransactionQuery = (
  { __typename?: 'Query' }
  & { transaction: (
    { __typename?: 'Transaction' }
    & Pick<Transaction, 'id' | 'type' | 'description' | 'amount' | 'createdAt'>
  ) }
);

export type GetTransactionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTransactionsQuery = (
  { __typename?: 'Query' }
  & { transactions: Array<(
    { __typename?: 'Transaction' }
    & Pick<Transaction, 'id' | 'type' | 'description' | 'amount' | 'createdAt'>
  )> }
);


export const CreateTransactionDocument = gql`
    mutation createTransaction($type: String!, $description: String!, $amount: Int!) {
  createTransaction(transaction: {type: $type, description: $description, amount: $amount}) {
    type
    description
    amount
    createdAt
  }
}
    `;
export type CreateTransactionMutationFn = Apollo.MutationFunction<CreateTransactionMutation, CreateTransactionMutationVariables>;

/**
 * __useCreateTransactionMutation__
 *
 * To run a mutation, you first call `useCreateTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTransactionMutation, { data, loading, error }] = useCreateTransactionMutation({
 *   variables: {
 *      type: // value for 'type'
 *      description: // value for 'description'
 *      amount: // value for 'amount'
 *   },
 * });
 */
export function useCreateTransactionMutation(baseOptions?: Apollo.MutationHookOptions<CreateTransactionMutation, CreateTransactionMutationVariables>) {
        return Apollo.useMutation<CreateTransactionMutation, CreateTransactionMutationVariables>(CreateTransactionDocument, baseOptions);
      }
export type CreateTransactionMutationHookResult = ReturnType<typeof useCreateTransactionMutation>;
export type CreateTransactionMutationResult = Apollo.MutationResult<CreateTransactionMutation>;
export type CreateTransactionMutationOptions = Apollo.BaseMutationOptions<CreateTransactionMutation, CreateTransactionMutationVariables>;
export const DeleteTransactionDocument = gql`
    mutation deleteTransaction($transactionId: String!) {
  deleteTransaction(transactionId: $transactionId) {
    id
    type
  }
}
    `;
export type DeleteTransactionMutationFn = Apollo.MutationFunction<DeleteTransactionMutation, DeleteTransactionMutationVariables>;

/**
 * __useDeleteTransactionMutation__
 *
 * To run a mutation, you first call `useDeleteTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTransactionMutation, { data, loading, error }] = useDeleteTransactionMutation({
 *   variables: {
 *      transactionId: // value for 'transactionId'
 *   },
 * });
 */
export function useDeleteTransactionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTransactionMutation, DeleteTransactionMutationVariables>) {
        return Apollo.useMutation<DeleteTransactionMutation, DeleteTransactionMutationVariables>(DeleteTransactionDocument, baseOptions);
      }
export type DeleteTransactionMutationHookResult = ReturnType<typeof useDeleteTransactionMutation>;
export type DeleteTransactionMutationResult = Apollo.MutationResult<DeleteTransactionMutation>;
export type DeleteTransactionMutationOptions = Apollo.BaseMutationOptions<DeleteTransactionMutation, DeleteTransactionMutationVariables>;
export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  login(user: {email: $email, password: $password}) {
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const SignupDocument = gql`
    mutation signup($username: String!, $email: String!, $password: String!) {
  signup(user: {username: $username, email: $email, password: $password}) {
    token
  }
}
    `;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, baseOptions);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const UpdateTransactionDocument = gql`
    mutation updateTransaction($type: String!, $description: String!, $amount: Int!, $transactionId: String!) {
  updateTransaction(transaction: {type: $type, description: $description, amount: $amount}, transactionId: $transactionId) {
    id
    type
    amount
    description
  }
}
    `;
export type UpdateTransactionMutationFn = Apollo.MutationFunction<UpdateTransactionMutation, UpdateTransactionMutationVariables>;

/**
 * __useUpdateTransactionMutation__
 *
 * To run a mutation, you first call `useUpdateTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTransactionMutation, { data, loading, error }] = useUpdateTransactionMutation({
 *   variables: {
 *      type: // value for 'type'
 *      description: // value for 'description'
 *      amount: // value for 'amount'
 *      transactionId: // value for 'transactionId'
 *   },
 * });
 */
export function useUpdateTransactionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTransactionMutation, UpdateTransactionMutationVariables>) {
        return Apollo.useMutation<UpdateTransactionMutation, UpdateTransactionMutationVariables>(UpdateTransactionDocument, baseOptions);
      }
export type UpdateTransactionMutationHookResult = ReturnType<typeof useUpdateTransactionMutation>;
export type UpdateTransactionMutationResult = Apollo.MutationResult<UpdateTransactionMutation>;
export type UpdateTransactionMutationOptions = Apollo.BaseMutationOptions<UpdateTransactionMutation, UpdateTransactionMutationVariables>;
export const GetCurrentUserDocument = gql`
    query getCurrentUser {
  getCurrentUser {
    username
  }
}
    `;

/**
 * __useGetCurrentUserQuery__
 *
 * To run a query within a React component, call `useGetCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
        return Apollo.useQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, baseOptions);
      }
export function useGetCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
          return Apollo.useLazyQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, baseOptions);
        }
export type GetCurrentUserQueryHookResult = ReturnType<typeof useGetCurrentUserQuery>;
export type GetCurrentUserLazyQueryHookResult = ReturnType<typeof useGetCurrentUserLazyQuery>;
export type GetCurrentUserQueryResult = Apollo.QueryResult<GetCurrentUserQuery, GetCurrentUserQueryVariables>;
export const GetTransactionDocument = gql`
    query getTransaction($transactionId: String!) {
  transaction(transactionId: $transactionId) {
    id
    type
    description
    amount
    createdAt
  }
}
    `;

/**
 * __useGetTransactionQuery__
 *
 * To run a query within a React component, call `useGetTransactionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransactionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransactionQuery({
 *   variables: {
 *      transactionId: // value for 'transactionId'
 *   },
 * });
 */
export function useGetTransactionQuery(baseOptions?: Apollo.QueryHookOptions<GetTransactionQuery, GetTransactionQueryVariables>) {
        return Apollo.useQuery<GetTransactionQuery, GetTransactionQueryVariables>(GetTransactionDocument, baseOptions);
      }
export function useGetTransactionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTransactionQuery, GetTransactionQueryVariables>) {
          return Apollo.useLazyQuery<GetTransactionQuery, GetTransactionQueryVariables>(GetTransactionDocument, baseOptions);
        }
export type GetTransactionQueryHookResult = ReturnType<typeof useGetTransactionQuery>;
export type GetTransactionLazyQueryHookResult = ReturnType<typeof useGetTransactionLazyQuery>;
export type GetTransactionQueryResult = Apollo.QueryResult<GetTransactionQuery, GetTransactionQueryVariables>;
export const GetTransactionsDocument = gql`
    query getTransactions {
  transactions {
    id
    type
    description
    amount
    createdAt
  }
}
    `;

/**
 * __useGetTransactionsQuery__
 *
 * To run a query within a React component, call `useGetTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransactionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTransactionsQuery(baseOptions?: Apollo.QueryHookOptions<GetTransactionsQuery, GetTransactionsQueryVariables>) {
        return Apollo.useQuery<GetTransactionsQuery, GetTransactionsQueryVariables>(GetTransactionsDocument, baseOptions);
      }
export function useGetTransactionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTransactionsQuery, GetTransactionsQueryVariables>) {
          return Apollo.useLazyQuery<GetTransactionsQuery, GetTransactionsQueryVariables>(GetTransactionsDocument, baseOptions);
        }
export type GetTransactionsQueryHookResult = ReturnType<typeof useGetTransactionsQuery>;
export type GetTransactionsLazyQueryHookResult = ReturnType<typeof useGetTransactionsLazyQuery>;
export type GetTransactionsQueryResult = Apollo.QueryResult<GetTransactionsQuery, GetTransactionsQueryVariables>;
