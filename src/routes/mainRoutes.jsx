import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NotFound from '../views/notFound';
import LoginView from '../views/login';
import ForgotPasswordView from '../views/forgotPassword';
import ResetPasswordView from '../views/resetPassword';
import ApplicationView from '../views/applicationView';
import { appRoutes } from 'appConstants';
import authService from '../applicationComponents/auth/authService';

function PrivateRoute({ component: Component, authenticated, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => true === true
                ? <Component {...props} />
                : <Redirect to={appRoutes.baseurl} />}
        />
    );
}

function AuthenticateRoute({ component: Component, authenticated, authSuccessUrl, ...rest }) {
    return (
        <Route exact render={(props) => authService.isAuthenticated() === true
            ? <Redirect to={authSuccessUrl} />
            : <Component {...props} />}
        />
    );
}

const Routes = (props) => (
    <Switch>
        <AuthenticateRoute exact path={appRoutes.baseurl} component={(props) => <LoginView {...props} authSuccessUrl={appRoutes.dashboard} />} />
        <Route path={appRoutes.forgotPassword} component={(props) => <ForgotPasswordView {...props} authSuccessUrl={appRoutes.login} />} />
        <Route path={appRoutes.resetPassword} component={(props) => <ResetPasswordView {...props} authSuccessUrl={appRoutes.login} />} />
        <Route path={appRoutes.login} component={(props) => <LoginView {...props} authSuccessUrl={appRoutes.dashboard} />} />
        <PrivateRoute path={appRoutes.dashboard} component={ApplicationView} />
        <Route path='*' component={NotFound} />
    </Switch>
);

export default Routes;
