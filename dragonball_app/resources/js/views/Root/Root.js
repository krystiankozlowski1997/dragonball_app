import React, {Fragment} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Button from "@/components/atoms/Button/Button";
import Main_Template from "../../templates/Main_Template";
import Races from '../Races/Races';

const Root = () => (
    <BrowserRouter>
        <Main_Template>
            <Switch>
                <Route exact path="/:name" component={Races}/>
            </Switch>
        </Main_Template>
    </BrowserRouter>
);

export default Root;
