import { Divider } from '../../src/divider';
import { EditInput, Input } from '../../src/input';
import { EnvelopeIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
import { storiesOf } from '@storybook/react';

import * as bluebird from 'bluebird';
import * as React from 'react';

storiesOf('Data Entry', module).add('Input', () => {
  return (
    <div className="w-full max-w-xs mx-auto space-y-2">
      <Divider color="#00CED1" title="With label" />
      <Input label="Email" type="email" placeholder="123@email.com" block />
      <Divider color="#00CED1" title="With label and help text" />
      <Input label="Email" type="email" placeholder="123@email.com" helperText="This is optional" block />
      <Divider color="#00CED1" title="With label and corner hint" />
      <Input label="Email" type="email" placeholder="123@email.com" hint="Optional" block />
      <Divider color="#00CED1" title="With leading icon" />
      <Input
        label="Email"
        type="email"
        placeholder="123@email.com"
        leading={<EnvelopeIcon className="icon-sm" />}
        block
      />
      <Divider color="#00CED1" title="With trailing icon" />
      <Input
        label="Account"
        type="text"
        placeholder="xxx-xxx-xxx"
        trailing={<QuestionMarkCircleIcon className="icon-sm" />}
        block
      />
      <Divider color="#00CED1" title="With leading and trailing" />
      <Input label="Price" type="text" placeholder="0.00" leading="$" trailing="CNY" block />
      <Divider color="#00CED1" title="With button" />
      <Input withButton={true} block />
      <Divider color="#00CED1" title="With loading" />
      <EditInput
        onChange={async (value) => {
          console.log(value);
          // @ts-ignore
            await bluebird.delay(1000);
        }}
      />
    </div>
  );
});
