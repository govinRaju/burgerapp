import React, { Component } from 'react';
import Aux from '../../hoc/Auxilary.js';
import classes from '../Layout/Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar.js';
import SideDrawer from "../Navigation/SideDrawer/SideDrawer.js";
class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerCloseHandler = () => {
        this.setState({ showSideDrawer: false })
    }
    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return ({ showSideDrawer: !prevState.showSideDrawer });
        });
    }
    render() {
        return (
            <Aux>
                <Toolbar menuToggledClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerCloseHandler} />
                <main className={classes.Content}>{this.props.children}</main>
                <strong style={{ backgroundColor: "green" }}>Life on a Farm Is School of Patience</strong>

            </Aux >
        );
    }
}

export default Layout;