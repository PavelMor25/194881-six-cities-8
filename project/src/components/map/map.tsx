import { useRef, useEffect } from 'react';
import useMap from '../../hooks/use-map';
import { City } from '../../types/city';
import {Icon, Marker} from 'leaflet';
import { Offer } from '../../types/offer';
import 'leaflet/dist/leaflet.css';


function Map(props: {city: City, offers: Offer[], selectedOffer: number, renderPlace: string}): JSX.Element {
  const {city, offers, selectedOffer, renderPlace} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = new Icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = new Icon({
    iconUrl: 'img/pin-active.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      offers.forEach((point) => {
        const {location} = point;
        new Marker({
          lat: location.lat,
          lng: location.lng,
        }, {
          icon: selectedOffer === point.id
            ? currentCustomIcon
            : defaultCustomIcon,
        })
          .addTo(map);
      });
    }
  }, [map, selectedOffer, offers]);

  return <section className={`${renderPlace}__map map`} ref={mapRef}></section>;
}

export default Map;
