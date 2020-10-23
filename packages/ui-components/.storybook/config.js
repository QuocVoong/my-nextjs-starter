import { addParameters, addDecorator } from '@storybook/react';
import { INITIAL_VIEWPORTS }           from '@storybook/addon-viewport';
import { withKnobs }                   from '@storybook/addon-knobs';
import { withThemesProvider }          from 'storybook-addon-styled-component-theme';
import { themeBase }                   from '../theme';

addParameters({ viewport: { viewports: INITIAL_VIEWPORTS } });

addDecorator(withKnobs)
addDecorator(withThemesProvider([themeBase]));

// FILE LOAD
const req = require.context('../stories', true, /\.stories\.tsx?$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);