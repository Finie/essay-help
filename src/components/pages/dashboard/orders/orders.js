import React from 'react'
import Analysis from '../../../components/dashboard/analysis/analysis';
import PriceCalculation from '../../../components/dashboard/forms/price/PriceCalculation'


import './orders.css'


function Orders(){

    return(
        <div className="dash-orders-container">
            <div className="order-item-holder">
               <PriceCalculation />
              
            </div>

        </div>
    );
}


export default Orders;
