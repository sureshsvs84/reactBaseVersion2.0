import { connect } from 'react-redux';
import authPage from './auth';
import { login } from '../../actions';

import { appRoutes } from 'appConstants';

function mapStateToProps(state) {
    const { loggingIn } = state.tatvamStore.auth;
    return {
        loggingIn,
        isAuthenticated: state.tatvamStore.auth.isAuthenticated,
        authSuccessUrl: appRoutes.dashboard,
        errorMessage: state.tatvamStore.auth.error
    };
}

export default connect(mapStateToProps, { login })(authPage);
