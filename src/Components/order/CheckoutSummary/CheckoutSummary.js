import React from 'react'
import Farming from '../../Farm/Farming';
// import FarmingIngredient from '../../Farm/FarmingIngredients/FarmingIngredient';
import './CheckoutSummary.css';
import Button from '../../UI/Button/Button';

const checkoutSummary = (props) => {
    return (
        <div className="CheckoutSummary">
            <div style={{ width: '100%', marginRight: '0px' }}>
                <Farming ingredients={props.ingredients} />
            </div>
            <Button
                clicked={props.checkoutCancelled}
                btnType="Danger" >Cancel</Button>
            <Button clicked={props.checkoutContinued}
                btnType="Success" style={{ color: '#5C9210' }}>Continue</Button>
        </div>
    )
}

export default checkoutSummary;