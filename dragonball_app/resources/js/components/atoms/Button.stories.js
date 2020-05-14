import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from "@storybook/addon-knobs";
import Button from './Button';



storiesOf('Button', module)
    .addDecorator(withKnobs)
    .add('Primary', () => {
        const label = 'Colors';
        const options = {
            Sayans:'#ff7f00',
            Namechans: '#00fe69',
            Freeza: '#003153'
        }
        const defaultValue = '#ff7f00';
        const groupId = 'GROUP-ID1';

        const value = select(label, options, defaultValue, groupId);

        return <Button color={value}>Text</Button>
    })
    .add('Secondary', () => <Button secondary>Text 2</Button>)
