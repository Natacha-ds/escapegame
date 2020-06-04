import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { SecretCode } from './components/SecretCode';
import { Home } from './components/Home';
import { ColorsAndLetters } from './components/ColorsAndLetters';
import { SecretExit } from './components/SecretExit';
import { SwitchImages } from './components/SwitchImages/index';

export default function App() {
    return (
        <Router>
            <div className="menu">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/secretcode">Secret Code</Link>
                        </li>
                        <li>
                            <Link to="/colorsandletters">
                                Colors and Letters
                            </Link>
                        </li>
                        <li>
                            <Link to="/secretexit">Secret Exit</Link>
                        </li>
                        <li>
                            <Link to="/switchimages">Switch images</Link>
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
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
