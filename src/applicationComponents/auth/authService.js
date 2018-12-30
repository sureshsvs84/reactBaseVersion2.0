
import { appRoutes } from 'appConstants';
import config from 'configuration';
import { persistor, store } from '../../store/tatvamStore';

class Auth {
    formAuthUrl() {
        return `${config.auth.authUri}`;
    }

    logoutUrl() {
        return `${config.auth.logout}`;
    }

    isAuthenticated() {
        const state = store.getState();
        const isAuthenticated = state.tatvamStore.auth.isAuthenticated;

        if (isAuthenticated) {
            return true;
        }
        const isUserNameInSession = sessionStorage.getItem(appRoutes.auth.USER_NAME) !== null ? true : false;
        const user = localStorage.getItem('user') !== null ? true : false;
        return (isUserNameInSession && user);
    }

    handleAuthentication(authResult) {
        if (authResult && authResult.username) {
            this.setSession(authResult);
        } else if (err) {
            console.log(err);
        }
    }

    setSession(authResult) {
        // Set the time that the access token will expire at
        const expiresAt = JSON.stringify((authResult.expires_in * 1000) + new Date().getTime());
        sessionStorage.setItem(appRoutes.auth.USER_NAME, authResult.username);
        localStorage.setItem('user', authResult.username);
        sessionStorage.setItem(appRoutes.auth.EXPIRES_AT, expiresAt);
    }

    async logout() {
        await persistor.purge();
        // Clear access token and ID token from local storage
        sessionStorage.removeItem(appRoutes.auth.USER_NAME);
        sessionStorage.removeItem(appRoutes.auth.EXPIRES_AT);
        localStorage.removeItem('user');
    }

    isTokenExpired() {
        // Check whether the current time is past the 
        // access token's expiry time
        const expiresAt = JSON.parse(sessionStorage.getItem(appRoutes.auth.EXPIRES_AT));
        return new Date().getTime() > expiresAt;
    }
}

const auth = new Auth();
export default auth;
