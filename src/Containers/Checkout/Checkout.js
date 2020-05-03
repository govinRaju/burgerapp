import React, { Component } from 'react'
import CheckoutSummary from '../../Components/order/CheckoutSummary/CheckoutSummary';
class Checkout extends Component {
    state = {
        ingredients: {
            water: 1,
            grass: 1,
            biofertilizer: 1,
            biowaste: 1
        }
    }
    render() {
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients} />
            </div>
        );
    }
}

export default Checkout;
