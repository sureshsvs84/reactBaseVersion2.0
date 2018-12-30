import React, { Component } from 'react';
import { SideNav } from 'react-materialize';
import PropTypes from 'prop-types';

class TatvamSideNav extends SideNav  {
    render() {
        let myList;
        if (this.props.menus.length > 0) {
            myList = this.props.menus.map((menu, index) => {
                return <SideNavItem id={menu.menuId} icon={menu.menuIcon}>{menu.menuTitle}</SideNavItem>
            });
        }

        return (
            <Fragment>
                <SideNav trigger={<Button><Icon left>menu</Icon></Button>} options={{ closeOnClick: false }} className='' >
                    {myList}
                </SideNav>
            </Fragment>
        );
    }
}

export default TatvamSideNav;