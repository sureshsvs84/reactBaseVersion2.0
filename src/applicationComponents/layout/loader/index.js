import { connect } from 'react-redux';
import LoadingBar from './loadingBar';
import { hideLoading, resetLoading, showLoading } from './loadingBarAction';
import { loaderActionTypes } from 'actionTypes';

const mapStateToProps = (state) => ({
    loading: state.tatvamStore.loadingBar[loaderActionTypes.DEFAULT],
    delay: state.tatvamStore.loadingBar.delay
});

export default connect(mapStateToProps, {
    hideLoading,
    resetLoading,
    showLoading
})(LoadingBar);
