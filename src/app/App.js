import React,{Component} from 'react';
import {BrowserRouter,Switch,Route } from 'react-router-dom';
import Layout from './Components/Layout';
import kawama from './Components/navbar';
import Formulario from "./Formulario";
import NotFound from "./Pages/NotFound";

function App(){

    return(
        <BrowserRouter>
        <Switch>
            <Route path="/kawama" component={kawama} />
            <Route path="/" component={Formulario} />
            <Route component={NotFound} />

        </Switch>
        
        </BrowserRouter>
    )
}






export default App;