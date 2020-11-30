import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price }) => {
    // Stripe requires the price to be represented in cents 
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HtF9GAJBLJ8QgsqtxvqvUp9LU2z7490Kqk1pWnJogG0WGtIDGDH9wydyBASe3xtozUi2sznZrB7zhjlsjgNpyXx00mHubTGjp';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Crown Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amout={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )

};

export default StripeCheckoutButton;