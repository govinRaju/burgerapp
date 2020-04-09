import React, { Component } from 'react';
import Aux from '../../hoc/Auxilary.js';
import Farming from '../../Components/Farm/Farming.js';
import FarmControls from '../../Components/Farm/FarmControls/FarmControls';
// import { render } from '@testing-library/react';
import Modal from '../../Components/UI/Modal/Modal.js';
import OrderSummary from '../../Components/Farm/OrderSummary/OrderSummary.js';
const INGREDIENTS_PRICES = {
    grass: 10,
    biofertilizer: 50,
    water: 20,
    biowaste: 5.5
}
class FarmBuilder extends Component {
    // Constructor(props){
    //     super(props);
    //     this.state=({

    //     })
    // }
    state = {
        ingredients: {
            water: 0,
            grass: 0,
            biowaste: 0,
            biofertilizer: 0

        },
        totalPrice: 1000,
        purchaseable: false,
        purchasing: false
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el
            }, 0);
        this.setState({ purchaseable: sum > 0 });
    }
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice, ingredients: updatedIngredients
        });
        this.updatePurchaseState(updatedIngredients);


    }
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({
            totalPrice: newPrice, ingredients: updatedIngredients
        });
        this.updatePurchaseState(updatedIngredients);

    }
    PurchaseHandler=()=> {
        this.setState({ purchasing: true });
    }
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing}>
                    <OrderSummary ingredients={this.state.ingredients}></OrderSummary>
                </Modal>
                <Farming ingredients={this.state.ingredients} />
                <p>Farming looks mighty Easy when your Plow is a pencil and you are Thousand miles from the Field</p>

                <FarmControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchaseable={this.state.purchaseable}
                    ordered={this.PurchaseHandler}
                    price={this.state.totalPrice}
                />
            </Aux>
        );
    }
}

export default FarmBuilder;