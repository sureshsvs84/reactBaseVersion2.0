import { connect } from 'react-redux';
import CustomPeriodicity from './customPeriodicity.js';
import { periodicityType } from '../../constants/appConstants';
import { fetchPeriodicity, updateSelectedPeriodicity } from '../../actions/periodicityActions';

const mapStateToProps = (state) => {

    return {
        periodicityValue: periodicityType.periodicityValue,
        periodicityData: state.tatvamStore.quickPeriodicity.periodicityData,
        updatedPeriodicityData: state.tatvamStore.quickPeriodicity.updatedPeriodicityData
    };
};

export default connect(mapStateToProps, { fetchPeriodicity, updateSelectedPeriodicity })(CustomPeriodicity);