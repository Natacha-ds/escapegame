import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { SecretCode } from './components/SecretCode';
import { Home } from './components/Home';
import { ColorsAndLetters } from './components/ColorsAndLetters';

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
                    </ul>
                </nav>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/secretcode">
                        <SecretCode />
                    </Route>
                    <Route path="/colorsandletters">
                        <ColorsAndLetters />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
