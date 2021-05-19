import React from 'react';
import { storiesOf } from '@storybook/react';
import { BackTop } from '../../src/back-top';

storiesOf('Navigation', module).add('BackTop', () => (
  <div style={{ height: '200vh' }}>
    <h5>滑动页面，距离 top 200px 后显示【回到顶部按钮】</h5>
    <BackTop />
  </div>
));
