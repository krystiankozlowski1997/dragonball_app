import React from 'react';
import styled, { css } from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import PropTypes from 'prop-types';
import Heading from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';

const Styled_Wrapper = styled.div`
  padding: 17px 30px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const Inner_Wrapper = styled.div`
  position: relative;
  padding: 17px 30px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};
  :first-of-type{
    z-index: 9999;
  }
  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const Date_Info = styled(Paragraph)`
  margin: 0 0 5px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const Styled_Heading = styled(Heading)`
  margin: 5px 0 0;
`;

const Styled_Heading_Wrapper = styled.div`
  background-color: ${({ theme }) => theme.Sayans};
`;

const Styled_Avatar = styled.img`
  height: 86px;
  width: 86px;
  border-radius: 50px;
  border: 5px solid ${({theme, activeColor}) => (activeColor ? theme[activeColor] : 'white')};
  position: absolute;
  right: 25px;
  top: 25px;
`;

const Card = ({cardType}) => (
    <Styled_Wrapper>
        <Inner_Wrapper activeColor={cardType}>
            <Styled_Heading>Hello Roman</Styled_Heading>
            <Date_Info>3 days</Date_Info>
            <Styled_Avatar activeColor={cardType} src="https://www.screenja.com/static/img/thumbs/goku-ultra-instinct-1-normal-636.png"/>
        </Inner_Wrapper>
        <Inner_Wrapper flex>
            <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nemo ducimus fuga
                repellendus illum
            </Paragraph>
            <Button secondary>REMOVE</Button>
        </Inner_Wrapper>
    </Styled_Wrapper>
);

Card.propTypes = {
    cardType: PropTypes.oneOf(['sayans', 'namechans', 'freeza']),
};

Card.defaultProps = {
    cardType: 'sayans',
};

export default Card;
