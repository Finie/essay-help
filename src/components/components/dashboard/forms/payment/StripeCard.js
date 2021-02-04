import React from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import MyCheckoutForm from './MyCheckoutForm'


const stripePromise = loadStripe("pk_test_51IFR4XHKFiqVIwkfeSmfJa2ynEzbbGccHNc6f2OoYu1vv4eLLXvLEbcoeEARBe9HdjoPwA6TXbKbU8IIsjRkhr1d00ilbMpS64")

function StripeCard() {
    return (
        <Elements stripe={stripePromise}>
        <MyCheckoutForm />
        fgfgsffsdskfksf
      </Elements>
    )
}

export default StripeCard
