import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Navbar, NavItem, Icon, Dropdown, Button, Col, Row, Badge } from 'react-materialize';
import './header.scss';
import authService from '../../auth/authService';
import Attraction from '../../attraction';
import UserProfile from '../../userProfile';

class AppHeader extends Component {
    constructor(props) {
        super(props);      
    }

    async componentWillMount() {
        await this.props.fetchUser();
    }

    async handleLogoutClick(e) {
        await authService.logout();
        this.props.history.push(authService.logoutUrl());
    }

    render() {
        const { brandURL, brandName, brandLogo, userDisplayName, toggleProfileBtn } = this.props;
        var Img = <img src={brandLogo} alt={brandName} />
        return (
            <Fragment>
                {/* <Navbar brand={Img} href={brandURL} right fixed>
                    <NavItem href='#'><Attraction /></NavItem>
                    <NavItem href='#'><Icon>notifications<Badge className="new badge">2</Badge></Icon></NavItem>
                    <NavItem>
                        <Icon left>person</Icon>
                        <span>{userDisplayName}</span>
                    </NavItem>
                    <NavItem onClick={(event) => this.handleLogoutClick(this.props)}><Icon>logout</Icon></NavItem>
                </Navbar> */}
                <header id="header" className="page-topbar">                    
                        <Navbar brand={Img} href={brandURL} right fixed>                          
                                <NavItem className="attraction"><Attraction /></NavItem>
                                <NavItem href='javascript:void(0);'><Icon>notifications<span className="notification-badge">2</span></Icon></NavItem> 
                                <NavItem href='javascript:void(0);'> <Icon left>person</Icon> <span>{userDisplayName}</span></NavItem>                                                     
                                <NavItem onClick={(event) => this.handleLogoutClick(this.props)}><Icon>logout</Icon></NavItem>                           
                           
                        </Navbar>
                        <div className="mobileView" onClick={(event) => this.handleLogoutClick(this.props)}><Icon>logout</Icon></div>                    
                </header>
            </Fragment>
        );
    }
}

AppHeader.propTypes = {
    history: PropTypes.object
};
AppHeader.defaultProps = {
    history: {}
};

export default withRouter(AppHeader);