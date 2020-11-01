import React, {useState} from "react";
import {FilterTypes} from "../../const";
import {ActionCreator} from "../../store/action";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {OfferProps} from "../../property-types";

const PlacesSortingComponent = ({filteredOffers, filter, sortOffers}) => {
  const [opened, setOpened] = useState(false);
  const toggleSortingPopup = () => {
    setOpened(!opened);
  };


  const handleFilterClick = (evt) => {
    const selectedFilter = evt.target.textContent;
    if (filter !== selectedFilter) {
      sortOffers(selectedFilter, filteredOffers);
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
  filteredOffers: PropTypes.arrayOf(OfferProps).isRequired,
  filter: PropTypes.string.isRequired,
  sortOffers: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  filteredOffers: state.filteredOffers,
  filter: state.filter
});

const mapDispatchToProps = (dispatch) => ({
  sortOffers(filter, filteredOffers) {
    dispatch(ActionCreator.sortOffers(filter, filteredOffers));
  }
});

export const PlacesSorting = connect(mapStateToProps, mapDispatchToProps)(PlacesSortingComponent);
