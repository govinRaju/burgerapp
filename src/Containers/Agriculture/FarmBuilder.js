import React, { Component } from 'react';
import Aux from '../../hoc/Auxilary.js';
import Farming from '../../Components/Farm/Farming.js';
class FarmBuilder extends Component {
    render() {
        return (
            <Aux>
                <Farming />
                <p>Farming looks mighty Easy when your Plow is a pencil and you are Thousand miles from the Field</p>

                <div>
                    Farm Controls
                </div>
            </Aux>
        );
    }
}

export default FarmBuilder;