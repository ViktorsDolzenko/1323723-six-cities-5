import {AuthorizationStatus, FilterTypes, INITIAL_SORTING_TYPE} from "./const";
import {NameSpace} from "./store/root-reducer";

/* eslint-disable camelcase */
export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const offersByCity = (offers, city) => offers.filter((offer) =>
  offer.city.name === city);


const sortOffersByFilterType = (filteredOffers, filterType) => {
  switch (filterType) {
    case FilterTypes.TOP_RATED_FIRST:
      return filteredOffers.slice().sort((a, b) => b.rating - a.rating);
    case FilterTypes.PRICE_HIGH_TO_LOW:
      return filteredOffers.slice().sort((a, b) => b.price - a.price);
    case FilterTypes.PRICE_LOW_TO_HIGH:
      return filteredOffers.slice().sort((a, b) => a.price - b.price);
  }
  return filteredOffers;
};

export const getOffersByCityAndFilter = (offers, city, filterType) => {
  const filteredOffersByCity = offersByCity(offers, city);
  return sortOffersByFilterType(filteredOffersByCity, filterType);
};


const findIndex = (array, item) => {
  return array.findIndex((it) => it.id === item.id);
};

export const replaceItem = (array, item) => {
  const itemIndex = findIndex(array, item);
  return [
    ...array.slice(0, itemIndex),
    item,
    ...array.slice(itemIndex + 1)
  ];
};

export const removeItem = (array, item) => {
  const itemIndex = findIndex(array, item);
  return [
    ...array.slice(0, itemIndex),
    ...array.slice(itemIndex + 1)
  ];
};

export const mockHotelHost = {
  // eslint-disable-next-line camelcase
  avatar_url: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/1.jpg`,
  id: 1,
  name: `qwerty`,
};

export const mockOffer = {
  bedrooms: 3,
  city: {
    name: `Cologne`,
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13}
  },
  description: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
  goods: [`Laptop friendly workspace`, `Washer`, `Towels`, `Fridge`, `Air conditioning`, `Baby seat`],
  host: {id: 25, name: `Angelina`, is_pro: true, avatar_url: `img/avatar-angelina.jpg`},
  id: 1,
  images: [`https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`],
  is_favorite: false,
  is_premium: false,
  location: {latitude: 50.957361, longitude: 6.9509739999999995, zoom: 16},
  max_adults: 4,
  preview_image: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
  price: 493,
  rating: 3.8,
  title: `The house among olive `,
  type: `house`,
};

export const mockCities = [mockOffer.city];

export const mockOffers = [mockOffer];
export const mockCity = mockOffer.city.name;

const mockOffersMapByCity = new Map();
const mockOffersMapByCityEmpty = new Map();

mockOffersMapByCity.set(`Paris`, mockOffers);
export {mockOffersMapByCity, mockOffersMapByCityEmpty};

export const mockReview = {
  id: 10,
  rating: 5,
  user: {
    // eslint-disable-next-line camelcase
    id: 10,
    avatar_url: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/1.jpg`,
    name: `Qwerty`,
  },
  comment: `What an amazing view! The house is stunning and in an amazing location.`,
  date: new Date(`2020-11-23T21:00:00.000Z`),
};

export const mockReviews = [mockReview];

export const mockAuthInfo = {
  avatar: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/1.jpg`,
  email: `qwerty@qwerty.ru`,
  id: 1,
  isPro: false,
  name: `qwerty`,
};

export const makeInitialStateMock = () => ({
  [NameSpace.DATA]: {
    offers: [mockOffer],
    offersNearby: [mockOffer],
    favoriteOffers: [mockOffer],
    comments: [mockReview],
  },
  [NameSpace.PROCESS]: {
    city: mockCity,
    filter: INITIAL_SORTING_TYPE,
  },
  [NameSpace.USER]: {
    authorizationStatus: AuthorizationStatus.AUTH,
    email: mockAuthInfo.email
  }
});
