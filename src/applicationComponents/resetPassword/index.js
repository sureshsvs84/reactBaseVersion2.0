import { connect } from 'react-redux';
import ResetPassword from './resetPassword';
import { resetPassword } from '../../actions';

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps, { resetPassword })(ResetPassword);
