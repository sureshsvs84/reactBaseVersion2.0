import { connect } from 'react-redux';
import ForgotPassword from './forgotPassword';
import { forgotPassword } from '../../actions';

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps, { forgotPassword })(ForgotPassword);
