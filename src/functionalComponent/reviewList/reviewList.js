import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Input, Button, Col, Icon } from 'react-materialize';
import Review from './review';

class ReviewList extends Component {
    constructor(props) {
        super(props);
    }
    async componentWillMount() {
        await this.props.fetchReportData();
    }

    render() {
        const { reviewList } = this.props;
        return (
            <Fragment>
                <Col xl={8} l={8} m={6} s={12} className="text-center rightBorder tagLine forgotPage">
                    {/* {reviewList.reviewListData.map((list, i) => {
                        return <Review data={list} />
                    })} */}
                </Col>

            </Fragment>
        );
    }
}



export default withRouter(ReviewList);