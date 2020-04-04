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
                ingredient = <div class="Sky"></div>;
                break;
            case ('land'):
                ingredient = (
                    <div class="Land">
                        <div class="Seeds1"></div>
                        <div class="Seeds2"></div>
                    </div>
                )
                break;
            case ('meat'):
                ingredient = <div class="Meat"></div>;
                break;
            case ('plant'):
                ingredient = <Plant />;
                break;
            case ('bacon'):
                ingredient = <div class="Bacon"></div>;
                break;
            case ('salad'):
                ingredient = <div class="Salad"></div>;
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