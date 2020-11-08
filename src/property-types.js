import PropTypes from "prop-types";

export const offerProps = PropTypes.shape({
  id: PropTypes.number.isRequired,
  photo: PropTypes.array.isRequired,
  premium: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  stars: PropTypes.string.isRequired,
  bookmarks: PropTypes.bool.isRequired,
  features: PropTypes.array.isRequired,
  adultsCount: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  hostName: PropTypes.string.isRequired,
  hostAvatar: PropTypes.string.isRequired
});


export const reviewProps = PropTypes.shape({
  avatar: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  stars: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
});

export const coordinatesPropTypes = PropTypes.arrayOf(PropTypes.number).isRequired;

export const iconsCoordinatesPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  coordinates: PropTypes.arrayOf(PropTypes.number).isRequired
});
