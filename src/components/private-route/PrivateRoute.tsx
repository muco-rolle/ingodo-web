import React, { ComponentType } from 'react';
import { RouteProps, Route, Redirect } from 'react-router-dom';
import { routes } from 'config';
import { useToken } from 'hooks';

export const PrivateRoute = ({ component, ...rest }: RouteProps) => {
    const { expiredToken, invalidToken } = useToken();
    const Component: ComponentType = component as ComponentType;

    return (
        <Route
            {...rest}
            render={(props: any) => {
                if (expiredToken) return <Redirect to={routes.login} />;

                if (invalidToken) return <Redirect to={routes.signup} />;

                return <Component {...props} />;
            }}
        />
    );
};
