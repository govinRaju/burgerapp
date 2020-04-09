import React from 'react';
import Aux from '../../hoc/Auxilary.js';
import classes from '../Layout/Layout.css';
const layout = (props) => (
    <Aux>
        <div>
            toolbar,sidebar,backdrop
<br />
            <b>Life on a Farm Is School of Patience</b>
        </div>
        <main className={classes.Content}>{props.children}</main>
    </Aux>

);

export default layout;