import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo.js';
import NavigationItems from '../NavigationItems/NavigationItems.js';
import MenuToggle from '../SideDrawer/MenuToggle/MenuToggle.js';
const toolbar = (props) => (
    <header className="Toolbar">
        <MenuToggle clicked={props.menuToggledClicked} />
        {/* <div>Menu</div>        <Logo /> */}
        <Logo height="80%" />
        <nav className="DesktopOnly"> <NavigationItems /></nav>
    </header>
);

export default toolbar;
