import React from "react";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Favorites from "../favorites/favorites";
import Login from "../login/login";
import Property from "../property/property";

const App = (props) => {
  const {offersCount, offers, reviews} = props;


  const bookmarkedOffers = offers.filter((offer) => offer.bookmarks);


  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"
          render={({history}) => (
            <MainPage offersCount={offersCount}
              offers={offers}
              onEmailLinkClick={() => history.push(`/favorites`)}
            />
          )}>

        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/favorites">
          <Favorites
            bookmarkedOffers={bookmarkedOffers}
          />
        </Route>
        <Route exact path='/offer/:id'
          render={({match, history}) => (
            <Property
              id={match.params.id}
              offers={offers}
              reviews={reviews}
              onEmailLinkClick={() => history.push(`/favorites`)}
            />
          )}
        />
      </Switch>
    </BrowserRouter>

  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    photo: PropTypes.array.isRequired,
    premium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequred,
    rating: PropTypes.number.isRequired,
    stars: PropTypes.string.isRequired,
    bookmarks: PropTypes.bool.isRequired
  })).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    reviewAvatar: PropTypes.string.isRequired,
    reviewText: PropTypes.string.isRequired,
    reviewStars: PropTypes.string.isRequired,
    reviewUsername: PropTypes.string.isRequired,
    reviewId: PropTypes.number.isRequired,
  })).isRequired
};
export default App;
