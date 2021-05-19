import React from 'react';
import { Carousel } from '../../src';
import { storiesOf } from '@storybook/react';
import faker from 'faker';
import _ from 'lodash';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
  { src: faker.image.abstract(), alt: 'alt' },
  { src: faker.image.animals(), alt: 'alt' },
  { src: faker.image.fashion(), alt: 'alt' },
  { src: faker.image.food(), alt: 'alt' },
  { src: faker.image.city(), alt: 'alt' },
];

storiesOf('Data Display', module).add('Carousel', () => (
  <div className="w-3/4">
    <Carousel>
      {_.map(images, ({ src, alt }, idx) => (
        <div key={idx}>
          <img src={src} alt={alt} />
        </div>
      ))}
    </Carousel>
  </div>
));
