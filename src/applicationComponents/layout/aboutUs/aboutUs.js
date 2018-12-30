import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Header, Card, Modal, Icon, Section, Row, Col, Title, Tabs, Tab, CardPanel } from 'react-materialize';
import './aboutUs.scss';

class AppAboutUs extends React.Component {
    constructor(props) {
        super(props);
    }

    async componentWillMount() {
        await this.props.fetchSystemConfiguration();
    }
    render() {
        const { brandURL, brandLogo, brandName, version, buildNo, lastReleaseDate, contactEmailId, companyURL } = this.props;        
        return (<div text-align="center">
            <Modal header="About TATVAM Analytics" trigger={<a>About TATVAM Analytics</a>} style={{ width: '600px' }} className="modelShow">

                <br />
                <line x1="0" y1="0" x2="0" y2="100" />
                <a href={brandURL} className="brand-logo" target='_blank' align="center"><img className='tatvamLogo' src={brandLogo} alt={brandName} align="center" /></a>
                <br />Version {version} Build {buildNo}_{lastReleaseDate}
                <br /><Tabs className='tab-demo z-depth-0'>
                    <Tab title={<Icon>settings</Icon>} active>
                        <br /><div className="container black-text text-center">© 2018 Powered by <Link to={companyURL} target="_blank">NetServ Applications</Link>, All rights reserved.</div>
                        <br /><div className="container black-text text-center" text-align="center">Last update : {lastReleaseDate}</div>
                    </Tab>
                    <Tab title={<Icon>email</Icon>} >
                        <Row>
                            <Col s={12} m={6}>
                                <p align="center"> USA <br /><br />5755 North Point Parkway, Unit 38,<br />Alpharetta, Atlanta, GA, 30022.<br /> Phone :+1-678-894-7305<br /> Fax : +1-678-339-0363<br />Mobile : 770-713-5700
                            </p>
                            </Col>
                            <Col s={12} m={6}>
                                <p align="center"> INDIA <br /><br />5th Floor, A Block, Bagmane Laurel,<br />Bagmane Technology Park,<br />C V Raman Nagar,<br />Bangalore - 560 093.<br />Phone : +(91)-(80)-40400800<br />Fax : +91-80-40400805
                            </p>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab title={<Icon>screen_share</Icon>}>
                        <Row><Col s={12} m={6}>
                            <Icon align="right">settings</Icon>
                        </Col>
                            <Col s={12} m={6}>
                                <Icon>settings</Icon>
                            </Col>
                        </Row>
                    </Tab>
                </Tabs>

            </Modal>
        </div>
        )
    }
}

export default AppAboutUs;