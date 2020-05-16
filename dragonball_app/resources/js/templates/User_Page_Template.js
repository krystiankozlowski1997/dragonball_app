import React from 'react';
import Sidebar from "../components/organisms/Sidebar";
import PropTypes from 'prop-types';

const User_Page_Template = ({children, pageType}) => (
    <>
        <Sidebar pageType={pageType}/>
        {children}
    </>
);

User_Page_Template.propTypes = {
    children: PropTypes.element.isRequired,
};

export default User_Page_Template;
