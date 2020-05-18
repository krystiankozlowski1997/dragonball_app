import React from 'react';
import Sidebar from "../components/organisms/Sidebar";
import PropTypes from 'prop-types';
import Input from '../components/atoms/Input/Input';
import Heading from '../components/atoms/Heading/Heading';
import styled, { css } from 'styled-components';
import Paragraph from "../components/atoms/Paragraph/Paragraph";

const Styled_Wrapper = styled.div`
  padding: 25px 150px 25px 70px;
`;

const Styled_Grid = styled.div`
    grid-template-columns: repeat(3,1fr);
    display: grid;
    grid-gap: 85px;
`;

const Styled_Paged_Header = styled.div`
  margin: 25px 0 50px 0;
`;

const Styled_Heading = styled(Heading)`
    margin: 25px 0 0 0;

    ::first-letter{
      text-transform: uppercase;
    }
`;

const Styled_Paragraph = styled(Paragraph)`
    margin: 0;
    font-weight: {({theme}) => theme.bold}
`;

const User_Page_Template = ({children, pageType}) => (
    <>
        <Sidebar pageType={pageType}/>
        {children}
    </>
);

User_Page_Template.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
};

export default User_Page_Template;
