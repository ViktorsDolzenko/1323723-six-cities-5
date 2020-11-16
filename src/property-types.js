import PropTypes from "prop-types";

export const offerProps = PropTypes.shape({
  id: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired,
  // eslint-disable-next-line
  is_premium: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  // eslint-disable-next-line
  is_favorite: PropTypes.bool.isRequired,
  goods: PropTypes.array.isRequired,
  // eslint-disable-next-line
  max_adults: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
});


export const reviewProps = PropTypes.shape({
  avatar: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  stars: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
});

export const iconsPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  location: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    zoom: PropTypes.number,
  }),
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      name: PropTypes.string
    })
  }),
});
