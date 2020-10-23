import { addDecorator, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS }           from '@storybook/addon-viewport';
import { withInfo } from '@storybook/addon-info';
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { themeBase }          from '../theme';

addParameters({ viewport: { viewports: INITIAL_VIEWPORTS } });
addDecorator(withInfo);
const themes = [themeBase];
addDecorator(withThemesProvider(themes));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}