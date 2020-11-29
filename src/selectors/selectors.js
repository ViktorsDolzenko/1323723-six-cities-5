import {createSelector} from "reselect";
import {getOffersByCityAndFilter} from "../util";
import {NameSpace} from "../store/root-reducer";

const allOffers = (state) => state[NameSpace.DATA].offers;
const getCurrentCity = (state) => state[NameSpace.PROCESS].city;
const getCurrentFilter = (state) => state[NameSpace.PROCESS].filter;

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
