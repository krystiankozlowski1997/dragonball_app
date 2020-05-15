import { configure, addDecorator } from '@storybook/react';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import {theme} from '../resources/js/theme/mainTheme';

function loadStories() {
    const req = require.context('../resources/js/components', true, /\.stories\.js$/);
    req.keys().forEach(filename => req(filename));
}

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

configure(loadStories, module);
