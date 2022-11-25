import * as REACT from 'react';
import * as REACTDOM from 'react-dom';

import * as STORYBOOKCOMPONENTS from '@storybook/components';
import * as STORYBOOKCHANNELS from '@storybook/channels';
import * as STORYBOOKEVENTS from '@storybook/core-events';
import * as STORYBOOKROUTER from '@storybook/router';
import * as STORYBOOKTHEMING from '@storybook/theming';
import * as STORYBOOKAPI from '@storybook/manager-api';
import * as STORYBOOKADDONS from '@storybook/preview-api';
import * as STORYBOOKCLIENTLOGGER from '@storybook/client-logger';

import type { Keys } from './types';

// Here we map the name of a module to their VALUE in the global scope.
export const values: Required<Record<keyof typeof Keys, any>> = {
  react: REACT,
  'react-dom': REACTDOM,
  '@storybook/components': STORYBOOKCOMPONENTS,
  '@storybook/channels': STORYBOOKCHANNELS,
  '@storybook/core-events': STORYBOOKEVENTS,
  '@storybook/router': STORYBOOKROUTER,
  '@storybook/theming': STORYBOOKTHEMING,
  '@storybook/manager-api': STORYBOOKAPI,
  '@storybook/preview-api': STORYBOOKADDONS,
  '@storybook/client-logger': STORYBOOKCLIENTLOGGER,
};
