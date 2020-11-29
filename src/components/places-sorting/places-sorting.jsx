import React, {useState} from "react";
import {FilterTypes} from "../../const";
import {sortOffers} from "../../store/action";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {offerProps} from "../../property-types";
import {getOffersByCities} from "../../selectors/selectors";
import {NameSpace} from "../../store/root-reducer";

const PlacesSortingComponent = ({offers, filter, sortOffersAction}) => {
  const [opened, setOpened] = useState(false);
  const toggleSortingPopup = () => {
    setOpened(!opened);
  };


  const handleFilterClick = (evt) => {
    const selectedFilter = evt.target.textContent;
    if (filter !== selectedFilter) {
      sortOffersAction(selectedFilter, offers);
    }
    toggleSortingPopup();
  };

  const optionsClassName = opened ? `places__options--opened` : ``;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={toggleSortingPopup}>
        {filter}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${optionsClassName}`}>
        {Object.values(FilterTypes).map((filterType, index)=>{
          return (
            <li key={filterType + index}
              className={`places__option`}
              tabIndex="0"
              onClick={handleFilterClick}
            >
              {filterType}
            </li>
          );
        })}
      </ul>
    </form>
  );
};

PlacesSortingComponent.propTypes = {
  offers: PropTypes.arrayOf(offerProps).isRequired,
  filter: PropTypes.string.isRequired,
  sortOffersAction: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  offers: getOffersByCities(state),
  filter: state[NameSpace.PROCESS].filter
});

const mapDispatchToProps = (dispatch) => ({
  sortOffersAction(filter, offers) {
    dispatch(sortOffers(filter, offers));
  }
});

export const PlacesSorting = connect(mapStateToProps, mapDispatchToProps)(PlacesSortingComponent);
