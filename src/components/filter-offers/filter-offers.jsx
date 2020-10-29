import React from "react";
import {FilterTypes} from "../../const";

const OPEN_FILTER_POPUP = `places__options--opened`;

const FilterOffers = () => {

  const filterPopup = React.createRef();

  const toggleFilterPopup = () =>{
    filterPopup.current.classList.toggle(OPEN_FILTER_POPUP);
  };

  const handleFilterOpening = () => {
    toggleFilterPopup();
  };

  const filterlist = () => {
    return Object.values(FilterTypes).map((filter, index)=>{
      return (
        <li key={filter + index}
          className={`places__option`}
          tabIndex="0"
        >
          {filter}
        </li>
      );
    });
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={handleFilterOpening}>
    Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul ref={filterPopup} className="places__options places__options--custom">
        {filterlist()}
      </ul>
    </form>
  );
};


export default FilterOffers;
