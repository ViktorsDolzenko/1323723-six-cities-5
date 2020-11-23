import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {ReviewItem} from "../review-item/review-item";
import {reviewProps} from "../../property-types";
import {fetchComments} from "../../store/api-actions";


export const ReviewListComponent = (props) => {
  const {currentOffer, reviews, getReviews} = props;

  if (reviews.length === 0) {
    getReviews(currentOffer);
  }

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

ReviewListComponent.propTypes = {
  reviews: PropTypes.arrayOf(reviewProps).isRequired
};

const mapStateToProps = (state) => ({
  reviews: state.DATA.comments,
});

const mapDispatchToProps = (dispatch) => ({
  getReviews(currentOffer) {
    dispatch(fetchComments(currentOffer));
  }
});

export const ReviewList = connect(mapStateToProps, mapDispatchToProps)(ReviewListComponent);
