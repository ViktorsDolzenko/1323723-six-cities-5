import {getOfferByCity} from "../util";


export const ActionType = {
  GET_OFFER: `GET_OFFER`
};

export const ActionCreator = {
  getOffer: (city, offers) => ({
    type: ActionType.GET_OFFER,
    payload: {
      city,
      filtredOffers: getOfferByCity(offers, city)
    }
  })
};

