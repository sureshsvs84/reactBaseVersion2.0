import React, { Component, Fragment } from 'react';

import { NavLink } from 'react-router-dom';
import { Col, Row, SideNavItem, SideNav, Button, Collapsible, CollapsibleItem } from 'react-materialize';
import { sideMenu } from './sideMenuData.js';
import Logo from '../../../../public/assets/images/tatvamLogo.svg';

class AppSideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuPanel: true
        }
    }

    MenuClick = (menuAction) => {
        this.props.actions[menuAction.menuFun]();
    }

    toggleMenuBtn = () => {
        this.setState({ isMenuPanel: !this.state.isMenuPanel })
    }
    render() {

        const sideMenus = sideMenu;
        const { brandURL, brandName, brandLogo, userDisplayName, toggleProfileBtn } = this.props;
        const Img = <img src={brandLogo} alt={brandName} />
        return (
            <Fragment>
                <SideNav
                    trigger={<a className="sidebar-collapse btn-floating btn-medium waves-effect waves-light">
                        <i className="material-icons">menu</i>
                    </a>}
                    options={{ closeOnClick: true }}
                >
                    <SideNavItem userView
                        user={{
                            background: brandLogo,                                                   
                           
                        }}
                    />
                    <SideNavItem divider />
                    <SideNavItem href='#!icon' icon='cloud'>Home Dashboard</SideNavItem>
                    <SideNavItem divider />
                    <Collapsible accordion>
                        <CollapsibleItem header='Trends' icon='filter_drama'>
                            <SideNavItem href='#!icon' icon='cloud'>Source Trend</SideNavItem>
                        </CollapsibleItem>
                      
                        <CollapsibleItem header='Reviews' icon='whatshot'>
                            <Collapsible accordion >
                                <CollapsibleItem header='Most Recent Reviews' icon='filter_drama'>
                                    Most Recent Reviews
                                </CollapsibleItem>
                                <CollapsibleItem header='All Reviews' icon='place'>
                                 All Reviews
                                </CollapsibleItem>
                                
                            </Collapsible>
                        </CollapsibleItem>
                    </Collapsible>

                </SideNav>;
                
            </Fragment>
        );
    }
}

export default AppSideMenu;