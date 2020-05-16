import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Global_Style from "@/theme/Global_Style";
import {theme} from '../theme/mainTheme';
import {ThemeProvider} from "styled-components";
import Sidebar from "../components/organisms/Sidebar";

const Main_Template = ({children}) => (
    <>
        <Global_Style/>
        <ThemeProvider theme={theme}>
                {children}
        </ThemeProvider>
    </>
);

Main_Template.propTypes = {
    children: PropTypes.element.isRequired,
}

export default Main_Template;
