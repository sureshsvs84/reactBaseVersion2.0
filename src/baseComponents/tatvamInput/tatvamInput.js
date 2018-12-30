import { Input } from 'react-materialize';
import PropTypes from 'prop-types';

class TatvamInput extends Input {

}

export default TatvamInput;

TatvamInput.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    defaultvalue: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.array.isRequired]),
    disabled: PropTypes.bool,
    className: PropTypes.string,
    errorMsg: PropTypes.string
};

TatvamInput.defaultProps = {
    label: '',
    type: 'text',
    disabled: false
};
