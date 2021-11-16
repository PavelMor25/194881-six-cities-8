import {useState} from 'react';
import {State} from '../../types/state';
import {SortingType} from '../../const';
import {useSelector} from 'react-redux';
import MainScreenSortItem from '../main-screen-sort-item/main-screen-sort-item';

function MainScreenSort(): JSX.Element {
  const {sort: currentSort} = useSelector((state: State) => state);
  const [isSortingOpen, setIsSortingOpen] = useState(false);

  const handleSortingTypeClick = () => {
    setIsSortingOpen(!isSortingOpen);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      &nbsp;
      <span
        onClick={handleSortingTypeClick}
        className="places__sorting-type"
        tabIndex={0}
      >
        {currentSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className={`${isSortingOpen ? 'places__options--opened' : ''} places__options places__options--custom`}
      >
        {Object.values(SortingType).map((sort) => (
          <MainScreenSortItem
            key={sort}
            sort={sort}
            onOpenedItemClick={setIsSortingOpen}
            className={`${sort === currentSort ? 'places__option--active' : ''} places__option`}
          />
        ))}
      </ul>
    </form>
  );
}

export default MainScreenSort;
