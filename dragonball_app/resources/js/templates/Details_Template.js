import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import User_Page_Template from "./User_Page_Template";
import Button from "../components/atoms/Button/Button";
import Paragraph from "../components/atoms/Paragraph/Paragraph";
import Heading from "../components/atoms/Heading/Heading";

const Styled_Wrapper = styled.div`
  padding: 25px 150px 25px 70px;
  max-width: 50vw;
  position: relative;
  @media (max-width: 1200px) {
    max-width: 80vw;
  }
`;

const Styled_Page_Header = styled.div`
  margin: 25px 0 50px 0;
`;

const Styled_Heading = styled(Heading)`
  margin: 25px 0 0 0;
  ::first-letter {
    text-transform: uppercase;
  }
`;

const Styled_Paragraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const Styled_Image = styled.img`
  position: absolute;
  right: -80px;
  top: 50px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

const Link_None_Decoration = styled(Link)`
  text-decoration: none;
`;

const Details_Template =  ({pageType, title, created, content, avatarSrc }) => (
    <User_Page_Template pageType={pageType}>
        <Styled_Wrapper>
            <Styled_Page_Header>
                <Styled_Heading big as="h1">
                    {title}
                </Styled_Heading>
                <Styled_Paragraph>{created}</Styled_Paragraph>
            </Styled_Page_Header>
            <Paragraph>{content}</Paragraph>
            <Styled_Image alt={title} src={avatarSrc} />
            <Button as={Link_None_Decoration} to={`/${pageType}`} color={pageType}>
                save / close
            </Button>
        </Styled_Wrapper>
    </User_Page_Template>
);

Details_Template.propTypes = {
    pageType: PropTypes.string.isRequired,
    title: PropTypes.string,
    created: PropTypes.string,
    content: PropTypes.string,
    avatarSrc: PropTypes.string,
};

Details_Template.defaultProps = {
    title: '',
    created: '',
    content: '',
    avatarSrc: '',
};

export default Details_Template;
