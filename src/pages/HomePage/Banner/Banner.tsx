import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import phonesImage from '../../../images/banner-iphone.png';
import tabletsImage from '../../../images/banner-ipad.png';
import accessoriesImage from '../../../images/banner-accessories.png';

import './Banner.scss';

const BannerContent = [
  {
    name: 'phones',
    photo: phonesImage,
  },
  {
    name: 'tablets',
    photo: tabletsImage,
  },
  {
    name: 'accessories',
    photo: accessoriesImage,
  },
];

export const Banner = () => {
  return (
    <Carousel
      autoPlay
      showArrows
      emulateTouch
      infiniteLoop
      showStatus={false}
      showThumbs={false}
      className="banner"
    >
      {BannerContent.map(currentItem => (
        <div
          className="banner__slide"
          key={currentItem.name}
        >
          <img
            src={currentItem.photo}
            alt={currentItem.name}
            className="banner__slide--image"
          />
        </div>
      ))}
    </Carousel>
  );
};
