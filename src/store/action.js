import {getOfferByCity} from "../util";


export const ActionType = {
  GET_OFFER: `GET_OFFER`,
  SORT_OFFER: `SORT_OFFER`
};

export const ActionCreator = {
  getOffer: (city, offers) => ({
    type: ActionType.GET_OFFER,
    payload: {
      city,
      filteredOffers: getOfferByCity(offers, city)
    }
  }),
  sortOffers: (filter, filteredOffers) => ({
    type: ActionType.SORT_OFFER,
    payload: {
      filter,
      filteredOffers
    }
  })
};

