import React from 'react'
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem.js';
const navigationItems = () => (
    <ul className="NavigationItems">
        <NavigationItem link="/" active> FarmBuilder</NavigationItem>
        <NavigationItem link="/"> Checkout   </NavigationItem>

    </ul>
);

export default navigationItems;