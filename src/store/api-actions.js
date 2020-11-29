import {
  loadComments,
  setFavoritesOffers,
  loadOffers,
  loadOffersNearby,
  setAuthorization,
  loadFavoriteOffers,
} from "./action";
import {AuthorizationStatus} from "../const";

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => {
      dispatch(loadOffers(data));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(({data}) => dispatch(setAuthorization(AuthorizationStatus.AUTH, data.email)))
    .catch((err) => {
      throw err;
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(setAuthorization(AuthorizationStatus.AUTH)))
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => {
      dispatch(loadComments(data));
    })
);

export const newComment = (id, comment, rating) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, comment, rating)
    .then(({data}) => dispatch(loadComments(data)))
);

export const fetchHotelsNearby = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => dispatch(loadOffersNearby(data)))
);

export const fetchFavoriteOffers = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => dispatch(loadFavoriteOffers(data)))
);


export const favoritesHotels = (id, status) => (dispatch, _getState, api) => {
  api.post(`/favorite/${id}/${status}`)
        .then(({data}) => {
          dispatch(setFavoritesOffers(data));
        });
};
