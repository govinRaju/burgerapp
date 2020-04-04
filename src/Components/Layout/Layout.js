import React from 'react';
import Aux from '../../hoc/Auxilary.js';
import classes from '../Layout/Layout.css';
const layout = (props) => (
    <Aux>
        <div>
            toolbar,sidebar,backdrop
            <br />
            <br />
            <br />
            <article>
                Organic Farmland Requirements
               <br /> Basic NOP Land Requirements
                ,Soil Fertility and Crop Nutrient Management Rules,
                Seeds and Planting Stock Standards,
                NOP Crop Rotation Rules,
                Pest and Disease Management Standards,
            </article>
            <br />
            <br />
            <b>Life on a Farm Is School of Patience</b>
        </div>
        <main className={classes.Content}>{props.children}</main>
    </Aux>

);

export default layout;