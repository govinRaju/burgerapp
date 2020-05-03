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
                clicked
                btnType="Danger">Cancel</Button>
            <Button clicked
                style={{ color: '#5C9210' }}>Continue</Button>
        </div>
    )
}

export default checkoutSummary;