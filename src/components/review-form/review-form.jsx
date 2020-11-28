import React, {useState, useRef} from "react";import {connect} from "react-redux";

import {RATING_COUNTS, RATING_TITLES} from "../../const";
import PropTypes from "prop-types";
import {newComment} from "../../store/api-actions";


export const ReviewFormComponent = ({addNewComments, offerId}) =>{
  const [rating, setRating] = useState(0);
  const commentRef = useRef(null);

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    addNewComments(offerId, {
      rating,
      comment: commentRef.current.value,
    });
  };

  const handleRatingChange = (evt) => {
    setRating(evt.target.value);
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATING_TITLES.map((title, index) => {
          return (
            <React.Fragment key={title}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={RATING_COUNTS[index]}
                id={`${RATING_COUNTS[index]}-stars`}
                type="radio"
                required={true}
                onClick={handleRatingChange}
              />
              <label
                htmlFor={`${RATING_COUNTS[index]}-stars`}
                className="reviews__rating-label form__rating-label"
                title={title}
              >
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star" />
                </svg>
              </label>
            </React.Fragment>
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
  addNewComments: PropTypes.func.isRequired,
  offerId: PropTypes.number.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  addNewComments(offerId, commentData) {
    dispatch(newComment(offerId, commentData));
  }
});

export const ReviewForm = connect(null, mapDispatchToProps)(ReviewFormComponent);
