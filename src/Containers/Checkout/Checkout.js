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
    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for (let param of query.entries()) {
            ingredients[param[0]] = +param[1];
        }
        this.setState({ ingredients: ingredients });
    }
    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    checkoutCancelHandler = () => {
        this.props.history.goBack();
    }
    render() {
        return (
            <div>
                <CheckoutSummary
                    checkoutCancelled={this.checkoutCancelHandler}
                    checkoutContinued={this.checkoutContinueHandler}
                    ingredients={this.state.ingredients} />
            </div>
        );
    }
}

export default Checkout;
