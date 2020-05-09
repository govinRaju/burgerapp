import React, { Component } from 'react';
import './ContactData.css';
import Button from '../../../Components/UI/Button/Button';
import axios from '../../../axios-orders';
import Spinner from '../../../Components/UI/Spinner/Spinner';
class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }
    orderHandler = (event) => {
        event.preventDefault();
        // console.log(this.props.ingredients);
        // alert("purchase");
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: "Indian Farmer",
                address: {
                    street: 'organicstreet1',
                    ZipCode: '533431',
                    country: 'India'
                },
                email: 'indianfarmer@farming.com'
            },
            deliveryMethod: 'fast'
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false, purchasing: false })
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false, purchasing: false })
            });
    }
    render() {
        let form = (
            <form>
                <input type="text" name="name" placeholder="Your name" />
                <input type="text" name="email" placeholder="Your email" />
                <input type="text" name="street" placeholder="Street" />
                <input type="text" name="postalCode" placeholder="ZipCode" />
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className="ContactData">
                <h4>Enter your contact Data</h4>
                {form}
                <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
            </div>
        )
    }

}

export default ContactData;