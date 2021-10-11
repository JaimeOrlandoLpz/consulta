import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { WelcomePage } from '../componentes/WelcomePage';
import { SecondaryRouter } from './SecondaryRouter';



// This Router will be used so we don't show the NavBar
export const MainAppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/welcome" component={WelcomePage}/>
                    <Route path="/" component = {SecondaryRouter} />    

                </Switch>
            </div>
        </Router>
    );
   
}