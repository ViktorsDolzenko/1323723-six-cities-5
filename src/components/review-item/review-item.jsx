import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export default class ReviewItem extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {review} = this.props;

    return (
      <li className="reviews__item" key={review.reviewId}>
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img className="reviews__avatar user__avatar" src={review.reviewAvatar} width="54" height="54" alt="Reviews avatar"></img>
          </div>
          <span className="reviews__user-name">
            {review.reviewUsername}
          </span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{width: review.reviewStars}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text">
            {review.reviewText}
          </p>
          <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
        </div>
      </li>
    );
  }
}

ReviewItem.propTypes = {
  review: PropTypes.shape({
    reviewId: PropTypes.number.isRequired,
    reviewAvatar: PropTypes.string.isRequired,
    reviewText: PropTypes.string.isRequired,
    reviewStars: PropTypes.string.isRequired,
    reviewUsername: PropTypes.string.isRequired
  }).isRequired
};
