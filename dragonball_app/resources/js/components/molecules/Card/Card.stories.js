import Card from './Card';
import React from "react";
import { storiesOf } from "@storybook/react";


storiesOf('Card', module)
    .add('Sayans', () => <Card/>)
    .add('Namechans', () => <Card cardType="namechans"/>)
    .add('Freeza', () => <Card cardType="freeza"/>);

