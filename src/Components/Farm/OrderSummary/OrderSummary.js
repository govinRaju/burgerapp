import React from 'react';
import Aux from '../../../hoc/Auxilary.js';
import Button from '../../UI/Button/Button';
const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li><span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}</li>
        });
    return <Aux>
        <h3>Purchase details</h3>
        <p>Agri order details : </p>
        <ul>
            {ingredientSummary}
        </ul>
        <p>Continue with Purchase ?</p>
        <p><strong>TotalPrice : {props.price}</strong></p>
        <Button clicked={props.purchaseCancelled}>Cancel</Button>
        <Button clicked={props.purchaseContinued}>Continue</Button>
    </Aux>
};

export default orderSummary;