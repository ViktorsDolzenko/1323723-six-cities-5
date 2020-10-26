export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getOfferByCity = (offers, city) => offers.filter((offer) =>
  offer.city === city);
