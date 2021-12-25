import Main from './index';
import { ComponentMeta } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs],
} as ComponentMeta<typeof Main>;

export const Basic = () => <Main title={text('title', 'Boilerplate NextJS')} />;
