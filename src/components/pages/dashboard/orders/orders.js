import React from 'react'
import PriceCalculation from '../../../components/dashboard/forms/price/PriceCalculation'


import './orders.css'


function Orders(){

    return(
        <div className="dash-orders-container">
            <div className="order-item-holder">
                <h1>Hello again guys this this the order section</h1>
                <PriceCalculation />
            </div>

        </div>
    );
}


export default Orders;
