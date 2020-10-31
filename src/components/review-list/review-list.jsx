import React from "react";
import PropTypes from "prop-types";
import {ReviewItem} from "../review-item/review-item";
import {ReviewProps} from "../../property-types";
export const ReviewList = (props) => {
  const {reviews} = props;
  return (
    <div>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">{
        reviews.map((review)=>
          <ReviewItem
            key={review.id}
            review={review}/>
        )
      }
      </ul>
    </div>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(ReviewProps).isRequired
};
