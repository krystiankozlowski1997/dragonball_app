import React, {Fragment} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Button from "@/components/atoms/Button/Button";
import Main_Template from "../../templates/Main_Template";
import Freeza from "../Freeza/Freeza";
import Namechans from "../Namechans/Namechans";
import Sayans from "../Sayans/Sayans";

const Root = () => (
    <BrowserRouter>
        <Main_Template>
            <Switch>
                <Route exact path="/" component={Sayans}/>
                <Route path="/freeza" component={Freeza}/>
                <Route path="/namechans" component={Namechans}/>
            </Switch>
        </Main_Template>
    </BrowserRouter>
);

export default Root;
