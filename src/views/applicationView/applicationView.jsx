import React, { Component, Fragment } from 'react';
import Header from '../../applicationComponents/layout/header';
import SideMenu from '../../applicationComponents/layout/sideMenu';
import QuickPeriodicity from '../../applicationComponents/layout/quickPeriodicity';
import DimensionFilter from '../../applicationComponents/dimensionFilter';
import ExportPDF from '../../applicationComponents/layout/exportPDF';
import Footer from '../../applicationComponents/layout/footer';
import UserProfile from '../../applicationComponents/userProfile';
import './applicationLayout.scss';
import { CardPanel, Col, Row } from 'react-materialize';

class ApplicationView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isProfilePanelOpen: false
        }
    }

    toggleProfileBtn = () => {
        this.setState({ isProfilePanelOpen: !this.state.isProfilePanelOpen });
    }

    async componentWillMount() {
    }

    render() {
        return (
            <Fragment>
                <Header toggleProfileBtn={this.toggleProfileBtn} />
                <div id="main">
                    <div className="wrapper">
                        <aside id="left-sidebar-nav">
                            {<SideMenu />}
                        </aside>
                        <section id="content">
                            <CardPanel className="subHeader white fixed mt-0">
                                <Row className="m-0">
                                    <Col s={5} m={3} l={3} xl={2} className='p-0'><QuickPeriodicity /></Col>
                                    <Col  s={4} m={3} l={3} xl={2} className='p-0 mt-1'><DimensionFilter /></Col>
                                    <Col  s={2} m={6} l={6} xl={8} className='right-align pr-0 mt-1'><ExportPDF /></Col>
                                </Row>
                            </CardPanel>
                            <div className="container">
                                <Row>
                                    <Col s={12} className="pl-0 pr-0">
                                        <CardPanel className="white"  >
                                            <p>Card1</p>
                                        </CardPanel>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col s={4} className='pl-0'>
                                        <CardPanel className="white ">
                                            <p>Card1</p>
                                        </CardPanel>
                                    </Col>
                                    <Col s={4}>
                                        <CardPanel className="white ">
                                            <p>Card2</p>
                                        </CardPanel>
                                    </Col>
                                    <Col s={4} className="pr-0">
                                        <CardPanel className="white">
                                            <p>Card3</p>
                                        </CardPanel>
                                    </Col>
                                </Row>
                            </div>
                        </section>
                        <aside id="right-sidebar-nav">
                            <UserProfile isProfilePanelOpen ={this.state.isProfilePanelOpen} toggleProfileBtn={this.toggleProfileBtn} />
                            {/* <RightSideNav isRightNavOpen={this.state.isRightNavOpen} toggleRightNav={this.toggleRightNav} /> */}
                        </aside>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}

export default ApplicationView;