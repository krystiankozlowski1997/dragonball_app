import Button_Icon from "./Button_Icon";
import styled from 'styled-components';
import React from 'react';
import {storiesOf} from "@storybook/react";
import freezaIcon from '../../../assets/icons/freeza.png';
import memechanIcon from '../../../assets/icons/memechan.png';
import sayanIcon from '../../../assets/icons/sayan.png';

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background: ${({theme}) => theme.sayans};
`;

storiesOf('Button_Icon', module)
    .addDecorator(story => (
        <YellowBackground>
            {story()}
        </YellowBackground>
    ))
    .add('Freeza', () => <Button_Icon icon={freezaIcon}/>)
    .add('Active', () => <Button_Icon active icon={freezaIcon}/>)
    .add('Memechan', () => <Button_Icon icon={memechanIcon}/>)
    .add('Sayan', () => <Button_Icon icon={sayanIcon}/>);
