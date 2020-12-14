import React from "react";
import {FavoritesScreen} from "../favorites-screen/favorites-screen";
import {Header} from "../header/header";
import {Footer} from "../footer/footer";


export const Favorites = () =>{

  return (
    <div className="page">
      <Header/>
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
      <Footer/>
    </div>
  );
};


