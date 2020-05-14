import { configure } from '@storybook/react';

function loadStories() {
    const req = require.context('../resources/js/components', true, /\.stories\.js$/);
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
