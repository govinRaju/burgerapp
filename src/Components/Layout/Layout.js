import React, { Component } from 'react';
import Aux from '../../hoc/Auxilary.js';
import classes from '../Layout/Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar.js';
import SideDrawer from "../Navigation/SideDrawer/SideDrawer.js";
class Layout extends Component {
    state = {
        showSideDrawer: true
    }
    sideDrawerCloseHandler = () => {
        this.setState({ showSideDrawer: false })
    }
    render() {
        return (
            <Aux>
                <Toolbar />
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