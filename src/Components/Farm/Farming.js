import React from 'react';
import './Farming.css';
import FarmingIngredient from './FarmingIngredients/FarmingIngredient.js';
const farming = (props) => {
    return (
        <div className="Farming">
            <FarmingIngredient type="plant" />
            <FarmingIngredient type="meat" />
            <FarmingIngredient type="sky" />
            <FarmingIngredient type="land" />

        </div>
    );
}

export default farming;