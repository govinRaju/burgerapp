import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo.js';
import NavigationItems from '../NavigationItems/NavigationItems.js';
const toolbar = (props) => (
    <header className="Toolbar">
        <div>MENU </div>
        <Logo />
        <NavigationItems />
    </header>
);

export default toolbar;
