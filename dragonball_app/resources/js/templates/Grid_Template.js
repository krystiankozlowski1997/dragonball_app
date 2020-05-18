import React from 'react';
import Sidebar from "../components/organisms/Sidebar";
import PropTypes from 'prop-types';
import User_Page_Template from "./User_Page_Template";
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

const Grid_Template= ({children, pageType}) => (
    <User_Page_Template pageType={pageType}>
        <Styled_Wrapper>
            <Styled_Paged_Header>
                <Input search placeholder="Search"/>
                <Styled_Heading big as="h1">{pageType}</Styled_Heading>
                <Styled_Paragraph>12 {pageType}</Styled_Paragraph>
            </Styled_Paged_Header>
            <Styled_Grid>
                {children}
            </Styled_Grid>
        </Styled_Wrapper>
    </User_Page_Template>
);

Grid_Template.propTypes = {
    children: PropTypes.array.isRequired,
};

export default Grid_Template;
