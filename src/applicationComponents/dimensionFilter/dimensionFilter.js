import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import TatvamIcon from '../../baseComponents/TatvamIcon';
import './dimensionFilter.scss';

class DimensionFilter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <TatvamIcon left>filter_list</TatvamIcon> Add Filter
            </Fragment>
        );
    }
}


export default withRouter(DimensionFilter);