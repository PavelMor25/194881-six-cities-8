import React from 'react';
import {Dispatch} from '@reduxjs/toolkit';
import {connect, ConnectedProps} from 'react-redux';
import {setCity} from '../../store/actions';
import {Actions} from '../../types/actions';
import {State} from '../../types/state';
import {CityType} from '../../const';

const mapStateToProps = ({city}: State) => ({city});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onLinkClick(city: CityType) {
    dispatch(setCity(city));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

function MainScreenTabs(props: ConnectedProps<typeof connector>): JSX.Element {
  const {city: currentCity, onLinkClick} = props;

  const handleLinkClick = (evt: React.MouseEvent<HTMLAnchorElement>, city: CityType) => {
    evt.preventDefault();
    onLinkClick(city);
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.values(CityType).map((city) => (
            <li
              key={city}
              className="locations__item"
            >
              <a
                onClick={(evt) => handleLinkClick(evt, city)}
                className={`${city === currentCity ? 'tabs__item--active' : ''} locations__item-link tabs__item`}
                href="/"
              >
                <span>{city}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export {MainScreenTabs};
export default connector(MainScreenTabs);
