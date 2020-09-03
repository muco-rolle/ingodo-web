import React, { useEffect, ReactNode, Fragment } from 'react';
import { useToken } from 'hooks';
import { useHistory } from 'react-router-dom';
import { routes } from 'config';

interface AuthGuardProps {
    children: ReactNode;
}

export const AuthGuard = ({ children }: AuthGuardProps) => {
    const { push } = useHistory();
    const { expiredToken, invalidToken } = useToken();

    useEffect(() => {
        if (expiredToken) return push(routes.login);
        if (invalidToken) return push(routes.signup);
    }, [expiredToken, invalidToken, push]);

    return <Fragment>{children}</Fragment>;
};
