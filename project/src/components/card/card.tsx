import { Link } from 'react-router-dom';
import {Offer} from '../../types/offer';

type Props = {
  offer: Offer,
  setOfferId:  React.Dispatch<React.SetStateAction<number>>,
  isMainRender: boolean,
}

function Card({offer, setOfferId, isMainRender}: Props): JSX.Element {
  const {price, title, type, photos, isPremium, id, rating, isFavorite} = offer;

  return (
    <article className={`place-card ${isMainRender ? 'cities__place-card' : 'near-places__card'}`} onMouseEnter={() => setOfferId(id)} onMouseLeave={() => setOfferId(-1)} >
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> :
        ''}
      <div className={`place-card__image-wrapper ${isMainRender ? 'cities__image-wrapper' : 'near-places__image-wrapper'} `}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={photos[0]} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.floor(rating) * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
