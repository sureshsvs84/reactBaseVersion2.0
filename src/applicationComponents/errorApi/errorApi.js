import React from 'react';
import { Col } from 'react-materialize';

const ErrorApi = (error) => {
    return (
        <Col s={12} m={12} l={12} className="recordNotFound">
            <span className="noDataCircle">Sorry!!</span>
            <span className="msg">{error.error}</span>
        </Col>
    );
};

export default ErrorApi;
