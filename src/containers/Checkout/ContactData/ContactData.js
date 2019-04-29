import React, {Component} from 'react';
import axios from '../../../axios-orders';
import Button from '../../../components/UI/Button/Button';
import styles from './ContactData.module.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    };

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Marco Bassaletti',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '123456',
                    country: 'Chile'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'Pickup'
        };
        axios.post('/orders.json', order).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        }).finally(() => this.setState({loading: false}));
    };

    render() {
        return (
            <div className={styles.ContactData}>
                <h4>Entry Your Contact Data</h4>
                <form>
                    <input className={styles.Input} type="text" name="name" placeholder="Your name"/>
                    <input className={styles.Input} type="email" name="email" placeholder="Your email"/>
                    <input className={styles.Input} type="text" name="street" placeholder="Street Address"/>
                    <input className={styles.Input} type="text" name="postalCode" placeholder="Postal Code"/>
                    <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;