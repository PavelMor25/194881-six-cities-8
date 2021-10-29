import { monthName } from '../../const';
import { Review } from '../../types/review';

type Props = {
  review: Review
}

function ReviewsItem({review}: Props): JSX.Element {
  const {author: {name, photo}, comment, date, rating} = review;
  const dateTime = {
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
  };

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={photo} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${Math.floor(rating) * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={`${dateTime.year}-${dateTime.month + 1 < 10 ? `0${dateTime.month + 1}` : dateTime.month + 1}-${dateTime.year}`}>{`${monthName[dateTime.month]} ${dateTime.year}`}</time>
      </div>
    </li>
  );
}

export default ReviewsItem;
