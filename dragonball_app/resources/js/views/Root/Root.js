import React, {Fragment} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Button from "@/components/atoms/Button/Button";
import Main_Template from "../../templates/Main_Template";
import Races from '../Races/Races';
import Details_Page from "../Deatils_Page/Deatils_Page";
import { routes } from '../../routes/index';

const Root = () => (
    <BrowserRouter>
        <Main_Template>
            <Switch>
                <Route exact path={routes.home} render={() => <Redirect to="/sayans" />}/>
                <Route exact path={routes.races} component={Races}/>
                <Route path={routes.details} component={Details_Page}/>
            </Switch>
        </Main_Template>
    </BrowserRouter>
);

export default Root;
