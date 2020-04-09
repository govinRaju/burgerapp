import React from 'react';
import './Farming.css';
import FarmingIngredient from './FarmingIngredients/FarmingIngredient.js';
const farming = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])]
                .map((_, i) => {
                    return <FarmingIngredient key={igKey + i} type={igKey} />
                });
        })
        .reduce((arr,el)=>{
            return arr.concat(el)
        },[]);
        if(transformedIngredients.length===0){
            transformedIngredients=<p>Cultivate</p>
        }
    console.log(transformedIngredients);
    return (
        <div className="Farming">
            <FarmingIngredient type="sky" />
            <FarmingIngredient type="plant" />
            {transformedIngredients}
            <FarmingIngredient type="land" />

        </div>
    );
}

export default farming;