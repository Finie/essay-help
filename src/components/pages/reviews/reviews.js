import React from 'react'
import Reviewitem from '../../components/review/reviewitem'

import './reviews.css'

function Review(){

return(
    <div className="reviews-container">
        <h1>Reviews page</h1>

        <Reviewitem />
    </div>
);
}


export default Review;