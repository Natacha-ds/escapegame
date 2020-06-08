import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { SecretCode } from './components/SecretCode';
import { Home } from './components/Home';
import { ColorsAndLetters } from './components/ColorsAndLetters';
import { SecretExit } from './components/SecretExit';
import { SwitchImages } from './components/SwitchImages/index';
import './index.css';
import { Card } from './components/Card/index';
import { WellDone } from './components/WellDone';

export default function App() {
    return (
        <Router>
            <div className="menu">
                <nav className="menuSteps">
                    <Link to="/">Home</Link>
                    <Link to="/secretcode">Le code secret</Link>
                    <Link to="/colorsandletters">La couleur des lettres</Link>
                    <Link to="/secretexit">L'échappatoire</Link>
                    <Link to="/switchimages">Deux en un </Link>
                    <Link to="/card">Les symboles </Link>
                </nav>

                <Switch>
                    <Route path="/secretcode">
                        <SecretCode />
                    </Route>
                    <Route path="/colorsandletters">
                        <ColorsAndLetters />
                    </Route>
                    <Route path="/secretexit">
                        <SecretExit />
                    </Route>
                    <Route path="/switchimages">
                        <SwitchImages />
                    </Route>
                    <Route path="/card">
                        <Card />
                    </Route>
                    <Route path="/end">
                        <WellDone />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
