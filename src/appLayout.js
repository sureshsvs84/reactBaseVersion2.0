import React, { Component, Fragment  } from 'react';
import '../public/assets/sass/style.scss';
import Routes from './routes';
import LoadingBar from './applicationComponents/layout/loader/loadingBar';
import { withRouter } from 'react-router-dom';
import ErrorBoundary from './applicationComponents/errorApi/errorBoundary';

class App extends Component {
    render() {
        return (
            <Fragment>
                <ErrorBoundary>
                    {/* <LoadingBar /> */}
                    <Routes />
                </ErrorBoundary>
            </Fragment>


            // <div className="container-fluid">
            //     <ErrorBoundary>
            //         {/* <LoadingBar /> */}
            //         <Routes />
            //     </ErrorBoundary>
            // </div>
        );
    }
}
export default withRouter(App);
