import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {FavoritesScreen} from "../favorites-screen/favorites-screen";
import {NameSpace} from "../../store/root-reducer";


export const FavoritesComponent = (props) =>{
  const {email} = props;

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={`/`}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{email}</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
               {/* <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>Amsterdam</span>
                  </a>
                </div>*/}
              </div>
              <FavoritesScreen/>
            </li>
          </ul>
        </section>
      </div>
      <footer className="footer container">
        <Link className="footer__logo-link" to={`/`}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
};

FavoritesComponent.propTypes = {
  email: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  email: state[NameSpace.USER].email,
});

export const Favorites = connect(mapStateToProps)(FavoritesComponent);
