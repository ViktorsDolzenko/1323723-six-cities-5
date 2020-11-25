import React from 'react';

function Rating({title, rating}, ref) {
  return (
    <React.Fragment key={title}>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={rating}
        id={`${rating}-stars`}
        type="radio"
        required={true}
        ref={ref}
      />
      <label
        htmlFor={`${rating}-stars`}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </React.Fragment>
  );
}

export const ForwardedInput = React.forwardRef(Rating);
