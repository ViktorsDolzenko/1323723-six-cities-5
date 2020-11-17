import {createSelector} from "reselect";
import {getOffersByCityAndFilter} from "../util";

const allOffers = (state) => state.DATA.offers;
const getCurrentCity = (state) => state.PROCESS.city;
const getCurrentFilter = (state) => state.PROCESS.filter;

export const selectIcons = (state) => {
  return getOffersByCities(state).map(({id, location, city})=>{
    return {
      id,
      location,
      city,
    };
  });
};

export const getOffersByCities = createSelector(
    allOffers,
    getCurrentCity,
    getCurrentFilter,
    (offers, city, filter) => getOffersByCityAndFilter(offers, city, filter)
);

export const selectOfferById = (state, id) => {
  return allOffers(state).find((offerCurrent) => offerCurrent.id === Number(id));
};
