import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { SecretCode } from './components/SecretCode';
import { Home } from './components/Home';
import { ColorsAndLetters } from './components/ColorsAndLetters';
import { SecretExit } from './components/SecretExit';
import { SwitchImages } from './components/SwitchImages/index';
import './index.css';
import { Card } from './components/Card/index';

export default function App() {
    return (
        <Router>
            <div className="menu">
                <nav>
                    <ul className="menuSteps">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/secretcode">Le code secret</Link>
                        </li>
                        <li>
                            <Link to="/colorsandletters">
                                La couleur des lettres
                            </Link>
                        </li>
                        <li>
                            <Link to="/secretexit">L'échappatoire</Link>
                        </li>
                        <li>
                            <Link to="/switchimages">Deux en un </Link>
                        </li>
                        <li>
                            <Link to="/card">Les symboles </Link>
                        </li>
                    </ul>
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
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
