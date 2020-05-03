import React from 'react'
import Farming from '../../Farm/Farming';
// import FarmingIngredient from '../../Farm/FarmingIngredients/FarmingIngredient';
import './CheckoutSummary.css';
import Button from '../../UI/Button/Button';

const checkoutSummary = (props) => {
    return (
        <div className="CheckoutSummary">
            <h1>We hope <br />
                <i>"organic farming may turn out to be a necessity not just for the poor, but for everyone."</i>            </h1>
            <div style={{ width: '100%', marginRight: '0px' }}>
                <Farming ingredients={props.ingredients} />
            </div>
            <Button
                clicked
                btnType="Danger">Cancel</Button>
            <Button clicked
                btnType="Success">Continue</Button>
        </div>
    )
}

export default checkoutSummary;