import { faker } from '@faker-js/faker';
import { Meta, StoryFn } from '@storybook/react';

import * as bluebird from 'bluebird';
import * as _ from 'lodash';
import * as React from 'react';

import { PullToRefresh, PullToRefreshProps } from '../src/pull-to-refresh';

export default {
  title: 'Components/PullToRefresh',
  component: PullToRefresh,
} as Meta;

type Item = { avatar: string; text: string };
type Props = PullToRefreshProps<Item>;
const Template: StoryFn<Props> = (args) => (
  <div className="h-80 min-h-full border-2 p-2">
    <PullToRefresh {...args} />
  </div>
);

export const Example = Template.bind({});
Example.args = {
  initial: _.range(1, 2).map((i) => ({
    avatar: `https://picsum.photos/seed/${i}/200`,
    text: faker.lorem.sentence(),
  })),
  render: (item, idx) => (
    <div className="flex shadow-lg p-2 m-2" key={idx}>
      <img className="rounded-full w-24 h-24 shadow-lg" src={item.avatar} alt="" />
      <div className="flex items-center py-5 pl-8">{item.text}</div>
    </div>
  ),
  onRefresh: async () => {
    await bluebird.delay(2000);
    return _.range(1, 2).map((i) => ({
      avatar: `https://picsum.photos/seed/${i}/200`,
      text: faker.lorem.sentence(),
    }));
  },
  onLoad: async (page) => {
    await bluebird.delay(2000);
    return _.range(1, 3).map((i) => ({
      avatar: `https://picsum.photos/seed/${Date.now()}/200`,
      text: faker.lorem.sentence(),
    }));
  },
} as Props;
