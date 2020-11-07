import React from "react";
import PropTypes from "prop-types";
import {reviewProps} from "../../property-types";

export class ReviewItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {review} = this.props;

    return (
      <li className="reviews__item" key={review.id}>
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img className="reviews__avatar user__avatar" src={review.avatar} width="54" height="54" alt="Reviews avatar"/>
          </div>
          <span className="reviews__user-name">
            {review.username}
          </span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{width: review.stars}}/>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text">
            {review.text}
          </p>
          <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
        </div>
      </li>
    );
  }
}

ReviewItem.propTypes = {
  review: PropTypes.shape(reviewProps.isRequired).isRequired,
};
