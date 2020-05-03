import React, { Component } from 'react';
import Aux from '../../hoc/Auxilary.js';
import Farming from '../../Components/Farm/Farming.js';
import FarmControls from '../../Components/Farm/FarmControls/FarmControls';
// import { render } from '@testing-library/react';
import Modal from '../../Components/UI/Modal/Modal.js';
import OrderSummary from '../../Components/Farm/OrderSummary/OrderSummary.js';
import axios from '../../axios-orders';
import Spinner from '../../Components/UI/Spinner/Spinner.js';
import withErrorHandler from '../../hoc/withErrorHanlder/withErrorHandler.js';


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
        ingredients: null,
        totalPrice: 1000,
        purchaseable: false,
        purchasing: false,
        loading: false,
        error: false
    }
    componentDidMount() {
        axios.get('./ingredients.json')
            .then(response => {
                this.setState({ ingredients: response.data })
            })
            .catch(error => {
                this.setState({ error: true })
            })
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
    PurchaseHandler = () => {
        this.setState({ purchasing: true });
    }
    PurchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }
    purchaseContinueHandler = () => {
        // alert("purchase");
        // this.setState({ loading: true });
        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.totalPrice,
        //     customer: {
        //         name: "Indian Farmer",
        //         address: {
        //             street: 'organicstreet1',
        //             ZipCode: '533431',
        //             country: 'India'
        //         },
        //         email: 'indianfarmer@farming.com'
        //     },
        //     deliveryMethod: 'fast'
        // }
        // axios.post('/orders.json', order)
        //     .then(response => {
        //         this.setState({ loading: false, purchasing: false })
        //     })
        //     .catch(error => {
        //         this.setState({ loading: false, purchasing: false })
        //     });
        this.props.history.push('/checkout');
    }
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary = null;

        let farming = this.state.error ? <p>ingredients can't be loaded </p> : <Spinner />;
        if (this.state.ingredients) {
            farming = (
                <Aux>
                    <Farming ingredients={this.state.ingredients} />
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
            orderSummary = <OrderSummary
                price={this.state.totalPrice}
                purchaseCancelled={this.PurchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
                ingredients={this.state.ingredients}></OrderSummary>;

            if (this.state.loading) {
                orderSummary = <Spinner />
            }
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.PurchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                <p style={{ paddingTop: "50px" }}>Farming looks mighty Easy when your Plow is a pencil and you are Thousand miles from the Field</p>
                {farming}
                <b >IF YOU EAT TODAY THANK A FARMER</b>

            </Aux>
        );
    }
}

export default withErrorHandler(FarmBuilder, axios);