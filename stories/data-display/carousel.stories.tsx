import React, { CSSProperties } from 'react';
import { Carousel, CarouselProps } from '../../src';
import { storiesOf } from '@storybook/react';
import faker from '@faker-js/faker';
import _ from 'lodash';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
  { src: faker.image.abstract(), alt: 'alt' },
  { src: faker.image.animals(), alt: 'alt' },
  { src: faker.image.fashion(), alt: 'alt' },
  { src: faker.image.food(), alt: 'alt' },
  { src: faker.image.city(), alt: 'alt' },
];

const arrowStyles: CSSProperties = {
  position: 'absolute',
  zIndex: 2,
  top: 'calc(50% - 15px)',
  width: 30,
  height: 'h-30',
  cursor: 'pointer',
  outline: 0,
};

const indicatorStyles: CSSProperties = {
  background: '#fff',
  width: 8,
  height: 8,
  display: 'inline-block',
  borderRadius: '50%',
  margin: '20px 8px',
  outline: 0,
};

const carouselLeftArrow = <div className="text-3xl text-white font-normal cursor-pointer">←</div>;
const carouselRightArrow = <div className="text-3xl text-white font-normal cursor-pointer">→</div>;

const customizedProps: CarouselProps = {
  config: { centerMode: true, showThumbs: false },
  arrowStyles,
  indicatorStyles,
  carouselLeftArrow,
  carouselRightArrow,
  items: images,
};

storiesOf('Data Display', module).add('Carousel', () => {
  return (
    <div className="w-3/4">
      <Carousel {...customizedProps} />
    </div>
  );
});
