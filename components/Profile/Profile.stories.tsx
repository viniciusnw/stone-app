import React from 'react';
import { Profile } from '@Components';

const user = {
  src: 'https://www.graciemag.com/wp-content/uploads/2012/06/house.jpg',
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
