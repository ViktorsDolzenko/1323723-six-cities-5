import React, {useEffect} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {ReviewItem} from "../review-item/review-item";
import {reviewProps} from "../../property-types";
import {fetchComments} from "../../store/api-actions";
import Loader from "react-loader-spinner";
import {NameSpace} from "../../store/root-reducer";


export const ReviewListComponent = (props) => {
  const {offerId, reviews, getReviews} = props;

  useEffect(() =>{
    getReviews(offerId);
  }, [offerId]);

  return (
    <div>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      {!reviews && (
        <h1 className="property__name">
          <Loader type="ThreeDots" color="#4873FA" height={200} width={200} />
        </h1>
      )}
      {reviews &&
      <ul className="reviews__list">{
        reviews.map((review) =>
          <ReviewItem
            key={review.id}
            review={review}/>
        )
      }
      </ul>
      }
    </div>
  );
};

ReviewListComponent.propTypes = {
  reviews: PropTypes.arrayOf(reviewProps).isRequired,
  offerId: PropTypes.number.isRequired,
  getReviews: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  reviews: state[NameSpace.DATA].comments,
});

const mapDispatchToProps = (dispatch) => ({
  getReviews(currentOffer) {
    dispatch(fetchComments(currentOffer));
  }
});

export const ReviewList = connect(mapStateToProps, mapDispatchToProps)(ReviewListComponent);
