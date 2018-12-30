import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Footer } from 'react-materialize';
import AboutUs from '../aboutUs';
import './footer.scss';

class AppFooter extends React.Component {
    constructor(props) {
        super(props);
    }

    async componentWillMount() {
        await this.props.fetchSystemConfiguration();
    }
    render() {
        const { brandURL, brandLogo, brandName, version, buildNo, lastReleaseDate, contactEmailId, companyURL } = this.props;
        return (
       
            <Footer className="tatvamDefault-text text-darken-1 center pt-2" copyrights="©2017 Powered by NetServ Applications, All rights reserved."               
                links={
                    <ul className="left-align"> 
                        <li><a className="tatvamDefault-text text-darken-1" href="#!">About TATVAM Analytics</a></li>
                        <li><a className="tatvamDefault-text text-darken-1" href={contactEmailId}>Email Us</a></li>
                        <li><a className="tatvamDefault-text text-darken-1" href="#!">Help Us Improve TATVAM</a></li>
                        <li><a className="tatvamDefault-text text-darken-1" href={contactEmailId}>Give Feedback</a></li>
                    </ul>
                }>
                <Fragment>
                    <Col s={12} m={4} l={6} xl={6} className="left-align text-darken-1 border-right">
                        <a href={brandURL} className="brand-logo" target='_blank'><img className='tatvamLogo' src={brandLogo} alt={brandName} /></a>
                        <br />Version {version} Build {buildNo}
                        <br />Latest Release: {lastReleaseDate}
                    </Col>
                    <Col className="left-align text-darken-1 border-right pt-1 pb-1" s={12} m={4} l={6} xl={6} >Disclaimer : Net Promoter, Net Promoter System, Net Promoter Score, and NPS are registered trademarks of Bain & Company, Inc., Fred Reichheld and Satmetrix Systems, Inc.</Col>
                </Fragment>
            </Footer>
        );
    }
}

export default AppFooter; 