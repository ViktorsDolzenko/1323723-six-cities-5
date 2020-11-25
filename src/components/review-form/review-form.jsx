import React, {useEffect, useRef} from "react";import {connect} from "react-redux";

import {RATING_COUNTS, RATING_TITLES} from "../../const";
import {ForwardedInput} from "../reviews-rating/reviews-rating";
import PropTypes from "prop-types";
import {newComment} from "../../store/api-actions";


export const ReviewFormComponent = (props) =>{

  const ratingRef = useRef(null);
  const commentRef = useRef(null);

  const handleFormSubmit = (evt) => {
    const {getNewComments, offerId} = props;
    evt.preventDefault();

    getNewComments(offerId, {
      rating: ratingRef.current.value,
      comment: commentRef.current.value,
    });
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATING_TITLES.map((title, index) => {
          const rating = RATING_COUNTS[index];
          return (
            <ForwardedInput
              key={title}
              title={title}
              rating={rating}
              ref={ratingRef}
            />
          );
        })}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        laceholder="Tell how was your stay, what you like and what can be improved"
        ref={commentRef}
        required={true}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form>
  );
};

ReviewFormComponent.propTypes = {
  getNewComments: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getNewComments(offerId, commentData) {
    dispatch(newComment(offerId, commentData));
  }
});

export const ReviewForm = connect(null, mapDispatchToProps)(ReviewFormComponent);
