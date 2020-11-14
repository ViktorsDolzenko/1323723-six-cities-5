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
import {NameSpace} from "../../store/root-reducer";

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
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                    onClick={onEmailLinkClick}>
                    <div className="header__avatar-wrapper user__avatar-wrapper" />
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
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
      <footer className="footer container">
        <Link className="footer__logo-link" to={`/`}>
          <img className="footer__logo" src="/img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
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
  console.log(state);
  return {
    city: state[NameSpace.PROCESS].city,
    offers: state[NameSpace.DATA].offers,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getOfferByCityAction(city) {
    dispatch(getOfferByCity(city));
  }
});

export const MainPage = connect(mapStateToProps, mapDispatchToProps)(MainPageComponent);
