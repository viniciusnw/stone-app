import React from 'react';
import { Profile } from '@Components';

const user = {
  src: 'https://i.pinimg.com/280x280_RS/39/fd/09/39fd09a3f0962e5b7b4a3ccbf5a61057.jpg',
  name: 'Bruce Wayne',
  rule: 'Wayne Interprise',
};

export const Default = {};

export default {
  title: "Profile",
  component: () => (
    <Profile {...user} />
  ),
};
