import React from "react";
import {FilterTypes} from "../../const";
import {ActionCreator} from "../../store/action";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {OfferProps} from "../../property-types";

const OPEN_FILTER_POPUP = `places__options--opened`;

const PlacesSortingComponent = (props) => {
  const filterPopup = React.createRef();

  const toggleFilterPopup = () =>{
    filterPopup.current.classList.toggle(OPEN_FILTER_POPUP);
  };

  const handleFilterOpening = () => {
    toggleFilterPopup();
  };

  const handleFilterChange = (selectedFilter) => {
    if (filter !== selectedFilter) {
      sortOffers(selectedFilter, filteredOffers);
    }
  };

  const handleFilterClick = (evt) => {
    const selectedFilter = evt.target.textContent;
    handleFilterChange(selectedFilter);
    toggleFilterPopup();
  };

  const {filteredOffers, filter, sortOffers} = props;
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={handleFilterOpening}>
        {filter}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul ref={filterPopup} className="places__options places__options--custom">
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
