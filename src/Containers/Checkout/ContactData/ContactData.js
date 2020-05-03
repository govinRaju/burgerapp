import React, { Component } from 'react';
import './ContactData.css';
import Button from '../../../Components/UI/Button/Button';
class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }
    render() {
        return (
            <div className="ContactData">
                <h4>Enter your contact Data</h4>
                <form>
                    <input type="text" name="name" placeholder="Your name" />
                    <input type="text" name="email" placeholder="Your email" />
                    <input type="text" name="street" placeholder="Street" />
                    <input type="text" name="postalCode" placeholder="ZipCode" />
                </form>
                <Button btnType="Success">Estimate</Button>
            </div>
        )
    }

}

export default ContactData;