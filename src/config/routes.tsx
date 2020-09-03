import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { routes } from 'config';
import { AppView, SignupView, LoginView } from 'views';
import { AuthGuard } from 'components';

export const getRoutes = () => {
    return (
        <Fragment>
            <Route path={routes.signup} component={SignupView} />
            <Route path={routes.login} component={LoginView} />
            <AuthGuard>
                <Route exact path={routes.home} component={AppView} />
            </AuthGuard>
        </Fragment>
    );
};
