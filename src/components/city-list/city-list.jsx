import React from "react";
import PropTypes from "prop-types";
import {Cities} from "../../const";

const ACTIVE_CITY_CLASS = `tabs__item--active`;

const citiesListTemplate = (city, currentCity, handleCityClick) => {

  const isActiveCity = city === currentCity;
  return (
    <li className="locations__item" key={city}>
      <a className={`locations__item-link tabs__item ${isActiveCity ? ACTIVE_CITY_CLASS : `` }`} href="#" onClick={handleCityClick}>
        <span>{city}</span>
      </a>
    </li>
  );
};

export const CityList = (props) => {

  const {currentCity, handleCityClick} = props;

  return (<div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.values(Cities).map((city)=> citiesListTemplate(city, currentCity, handleCityClick))}
      </ul>
    </section>
  </div>);

};

CityList.propTypes = {
  currentCity: PropTypes.string.isRequired,
  handleCityClick: PropTypes.func.isRequired,
};
