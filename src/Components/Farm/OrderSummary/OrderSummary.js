import React from 'react';
import Aux from '../../../hoc/Auxilary.js';
import Button from '../../UI/Button/Button';
class OrderSummary extends React.Component {
    // componentDidUpdate(){
    //     console.log("ordersummaryup")
    // }
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return <li key={igKey}><span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}</li>
            });
        return <Aux>
            <h3>Purchase details</h3>
            <p>Agri order details : </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue with Purchase ?</p>
            <p><strong>TotalPrice : {this.props.price}</strong></p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
        </Aux>
    }
};

export default OrderSummary;