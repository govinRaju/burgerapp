import React from 'react'
import Logo from '../../Logo/Logo.js';
import NavigationItems from "../NavigationItems/NavigationItems.js";
import './SideDrawer.css';
import classNames from 'classnames';
import Backdrop from '../../UI/Backdrop/Backdrop.js';
import Aux from '../../../hoc/Auxilary';
const sideDrawer = (props) => {
    let attachedClasses = classNames("SideDrawer", "Close");
    if (props.open) {
        attachedClasses = classNames("SideDrawer", "Open");
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses}>
                <div>
                    <Logo height="11%" />
                </div>
                <nav >
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;