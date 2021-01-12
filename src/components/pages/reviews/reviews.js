import React from 'react'
import { MdRateReview } from 'react-icons/md'
import Reviewitem from '../../components/review/reviewitem'
import Button from '../../components/Button/Button'
import './reviews.css'
import { reviewData } from '../../../assets/data/reviewData'
function Review(){

return(
    <div className="reviews-container">
        <div className="leading">
       <h1>Essay<span style={{color:' #F4D140'}}>help</span> Latest Service Reviews (Customer Feedback) </h1>
       <div className="desctiption">
       <section>Customer satisfaction is a top priority here at essayzig.com We do everything in our power to make sure that we stay as the best essay writing service in the business. Apparently, our customers tend to be very satisfied with our reviews and this is evident with the positive feedback that we receive. Every online essay writer has overcome countless challenges while working with us. So, if you need a second opinion on whether or not to order an essay from us, check out what our past clients have to say!</section>
      <section className="note">NB: This information is based on reviews submited by clients in the client dashboard</section>
       </div>
        </div>
         <div className="reviews">
         <h1><MdRateReview style={{marginRight:"2rem"}}/>Client Reviews</h1>
         {reviewData.data.map((item)=><Reviewitem data={item} />)}
         </div>
        <Button>Show More</Button>
    </div>
);
}


export default Review;