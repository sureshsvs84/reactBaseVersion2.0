import { connect } from 'react-redux';
import ReviewList from './reviewList';
import { fetchReportData } from '../../actions';

function mapStateToProps(state) {
    return {
        reviewList: state.tatvamStore.reviewListData
    };
}

export default connect(mapStateToProps, { fetchReportData })(ReviewList);