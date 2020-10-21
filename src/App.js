import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Knowledges from './Pages/Knowledges';
import NotFound from './Pages/NotFound';
import Portfolio from './Pages/Portfolio';

const App = () => {
    return (
        <>
            <HashRouter basename={window.location.pathname || ''}>
            
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/competences" component={Knowledges} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/contact" component={Contact} />
                    <Route component={NotFound} />
                </Switch>
            </HashRouter>
        </>
    );
};

export default App;