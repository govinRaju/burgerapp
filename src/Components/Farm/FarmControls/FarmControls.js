import React from 'react';
import FarmControl from './FarmControl/FarmControl.js';
import './FarmControls.css';
const controls = [
    { label: 'Grass', type: 'grass' },
    { label: 'Water', type: 'water' },
    { label: 'biofertilizer', type: 'biofertilizer' },
    { label: 'biowaste', type: 'biowaste' }
];
const farmControls = (props) => (
    <div className="FarmControls">
        <p className="Pr">Estimate to Cultivate 1 Acer of Land : <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <FarmControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button
            className="OrderButton"
            disabled={!props.purchaseable}
            onClick={props.ordered}
        >ORDER</button>
    </div>
);

export default farmControls;