import React from 'react';
import Aux from '../../hoc/Auxilary.js';
import classes from '../Layout/Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar.js';
const layout = (props) => (
    <Aux>
        <Toolbar />

        <main className={classes.Content}>{props.children}</main>
        <strong style={{ backgroundColor: "green" }}>Life on a Farm Is School of Patience</strong>

    </Aux >

);

export default layout;