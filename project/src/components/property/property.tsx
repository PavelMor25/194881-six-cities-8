import { Offer } from '../../types/offer';
import Header from '../headers/header';
import PropertyHost from '../property-host/property-host';
import ReviewForm from '../review-form/review-form';
import ReviewsItem from '../reviews-item/reviews-item';
import {useState} from 'react';
import Map from '../map/map';
import OfferList from '../offer-list/offer-list';

type Props = {
  offer: Offer,
  offers: Offer[],
}


function Property({offer, offers}: Props): JSX.Element {
  const {title, isPremium, type, rooms, maxAdults, price, goods, owner, description, reviews, rating, isFavorite, photos, city} = offer;
  const [offerId, setOfferId] = useState(-1);

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {photos.map((item) => (
                <div key={item} className="property__image-wrapper">
                  <img className="property__image" src={item} alt="Photo studio"/>
                </div>),
              )}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className={`property__mark ${isPremium ? '' : 'visually-hidden'}`}>
                <span>Premium</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={`property__bookmark-button button ${isFavorite ? 'property__bookmark-button--active' : ''}`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${Math.floor(rating) * 20}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {rooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className={`property__inside ${goods.length ? '' : 'visually-hidden'}`}>
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((item) => (
                    <li className="property__inside-item" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <PropertyHost user={owner} description={description} />
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ul className="reviews__list">
                  {reviews.map((item) => <ReviewsItem key={item.id} review={item} />)}
                </ul>
                <ReviewForm />
              </section>
            </div>
          </div>
          <Map renderPlace={'property'} offers={offers} city={city} selectedOffer={offerId} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OfferList offers={offers} setOfferId={setOfferId} isMainRender={false} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default Property;
