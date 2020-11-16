import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {getOfferByCity} from '../../store/action';
import {OffersScreen} from '../offers-screen/offers-screen';
import {CityList} from '../city-list/city-list';
import {NoPlaces} from "../no-places/no-places";
import {offerProps} from "../../property-types";
import cn from "classnames";
import {getOffersByCities} from "../../selectors/selectors";
import {Header} from "../header/header";
import {Footer} from "../footer/footer";

const MainPageComponent = (props) => {
  const {onEmailLinkClick, city, getOfferByCityAction, offers} = props;
  const offersExist = offers.length >= 1;

  const mainClass = cn(`page__main page__main--index`, {
    "page__main--index-empty": offers.length < 1
  });


  const handleCityClick = (evt) => {
    evt.preventDefault();
    const selectedCity = evt.target.textContent;
    if (selectedCity !== city) {
      getOfferByCityAction(selectedCity);
    }
  };

  return (
    <div className="page page--gray page--main">
      <Header onEmailLinkClick={onEmailLinkClick}/>
      <main className={mainClass}>
        <CityList currentCity={city} handleCityClick={handleCityClick} />\
        <div className="cities">
          <div className="cities__places-container container">
            <h1 className="visually-hidden">Cities</h1>
            {offersExist && <OffersScreen/>}
            {!offersExist && <NoPlaces currentCity={city}/>}
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

MainPageComponent.propTypes = {
  onEmailLinkClick: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  getOfferByCityAction: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(offerProps).isRequired,
};

const mapStateToProps = (state) => {
  return {
    city: state.PROCESS.city,
    offers: getOffersByCities(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  getOfferByCityAction(city) {
    dispatch(getOfferByCity(city));
  }
});

export const MainPage = connect(mapStateToProps, mapDispatchToProps)(MainPageComponent);
