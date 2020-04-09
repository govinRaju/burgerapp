import React, { Component } from 'react';
import Plant from '../FarmingIngredients/Plant/Plant.js';
// import Rain from '../FarmingIngredients/Rain/Rain.js';
import './FarmingIngredients.css';
import PropTypes from 'prop-types';
class FarmingIngredient extends Component {
    render() {
        let ingredient = null;
        switch (this.props.type) {
            case ('sky'):
                ingredient = <div className="Sky"></div>;
                break;
            case ('land'):
                ingredient = (
                    <div className="Land">
                        <div className="Seeds1"></div>
                        <div className="Seeds2"></div>
                    </div>
                )
                break;
            case ('biofertilizer'):
                ingredient = <div className="Biofertilizer"></div>;
                break;
            case ('plant'):
                ingredient = <Plant />;
                break;
            case ('water'):
                ingredient = <div className="Water"></div>;
                break;
            case ('biowaste'):
                ingredient = <div className="BioWaste"></div>;
                break;
            case ('grass'):
                ingredient = <div className="Grass"></div>;
                break;
            default:
                ingredient = null;
        }
        return ingredient;
    }

}
FarmingIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default FarmingIngredient;