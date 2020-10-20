import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Knowledges from './Pages/Knowledges';
import NotFound from './Pages/NotFound';
import Portfolio from './Pages/Portfolio';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/competences" component={Knowledges} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/contact" component={Contact} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default App;