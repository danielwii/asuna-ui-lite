import React from 'react';
import { Meta, Story } from '@storybook/react';
import faker from '@faker-js/faker';
import { Promise } from 'bluebird';

import { PullToRefresh, PullToRefreshProps } from '../src/pull-to-refresh';
import _ from 'lodash';

export default {
  title: 'Components/PullToRefresh',
  component: PullToRefresh,
} as Meta;

type Item = { avatar: string; text: string };
type Props = PullToRefreshProps<Item>;
const Template: Story<Props> = (args) => (
  <div className="h-80 min-h-full border-2">
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
    <div className="flex shadow-lg p-2" key={idx}>
      <img className="rounded-full w-24 h-24 shadow-lg" src={item.avatar} alt="" />
      <div className="flex items-center py-5 pl-8">{item.text}</div>
    </div>
  ),
  onRefresh: async () => {
    await Promise.delay(2000);
    return _.range(1, 2).map((i) => ({
      avatar: `https://picsum.photos/seed/${i}/200`,
      text: faker.lorem.sentence(),
    }));
  },
  onLoad: async (page) => {
    await Promise.delay(2000);
    return _.range(1, 3).map((i) => ({
      avatar: `https://picsum.photos/seed/${Date.now()}/200`,
      text: faker.lorem.sentence(),
    }));
  },
} as Props;
