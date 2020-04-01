import React from 'react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

import { Avatar } from './Avatar';

export default {
  title: 'Design System|Avatar',

  parameters: {
    component: Avatar,
  },
};

export const standard = () => (
  <Avatar
    size="large"
    username="Bert"
    src="https://avatars3.githubusercontent.com/u/54749218?s=460&u=9e10566fa49debe33755b0d9cac70538cc375087&v=4"
  />
);

export const sizes = () => (
  <div>
    <Avatar
      size="large"
      username="Bert"
      src="https://avatars3.githubusercontent.com/u/54749218?s=460&u=9e10566fa49debe33755b0d9cac70538cc375087&v=4"
    />
    <Avatar
      size="medium"
      username="Bert"
      src="https://avatars3.githubusercontent.com/u/54749218?s=460&u=9e10566fa49debe33755b0d9cac70538cc375087&v=4"
    />
    <Avatar
      size="small"
      username="Bert"
      src="https://avatars3.githubusercontent.com/u/54749218?s=460&u=9e10566fa49debe33755b0d9cac70538cc375087&v=4"
    />
    <Avatar
      size="tiny"
      username="Bert"
      src="https://avatars3.githubusercontent.com/u/54749218?s=460&u=9e10566fa49debe33755b0d9cac70538cc375087&v=4"
    />
  </div>
);

export const initials = () => (
  <div>
    <Avatar username="Tom Coleman" />
    <Avatar username="Dominic Nguyen" />
    <Avatar username="Kyle Suss" />
    <Avatar username="Michael Shilman" />
  </div>
);

export const loading = () => (
  <div>
    <Avatar size="large" loading />
    <Avatar size="medium" loading />
    <Avatar size="small" loading />
    <Avatar size="tiny" loading />
  </div>
);

export const large = () => (
  <div>
    <Avatar loading size="large" />
    <Avatar size="large" username="Bert" />
    <Avatar
      size="large"
      username="Bert"
      src="https://avatars3.githubusercontent.com/u/54749218?s=460&u=9e10566fa49debe33755b0d9cac70538cc375087&v=4"
    />
  </div>
);

export const knobs = () => (
  <Avatar
    loading={boolean('Loading')}
    size={select('Size', ['tiny', 'small', 'medium', 'large'])}
    username="Bert"
    src="https://avatars3.githubusercontent.com/u/54749218?s=460&u=9e10566fa49debe33755b0d9cac70538cc375087&v=4"
  />
);

knobs.story = {
  decorators: [withKnobs],
};