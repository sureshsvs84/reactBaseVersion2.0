import { connect } from 'react-redux';
import Attraction from './attraction';
import { fetchAttractions } from '../../actions';

function mapStateToProps(state) {
    return {
        currentAttraction: state.tatvamStore.customer.name,
        attractions: state.tatvamStore.customer.attractions
    };
}

export default connect(mapStateToProps, { fetchAttractions })(Attraction);
