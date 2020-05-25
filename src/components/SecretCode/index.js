import React, { useState } from 'react';
import './index.css';
import { NextButton } from '../NextButton/index';

export function SecretCode() {
    const [secretCode, setSecretCode] = useState('');
    const [proposition, setProposition] = useState('');

    function handleTermChange(event) {
        setSecretCode(event.target.value.toLowerCase());
    }
    function handleClick() {
        if (secretCode === 'tentation') {
            setProposition('true');
        } else if (secretCode === '') {
            setProposition('empty');
        } else {
            setProposition('false');
        }
    }

    function getResults() {
        if (proposition === 'true') {
            return (
                <div>
                    <br />
                    <NextButton />
                </div>
            );
        } else if (proposition === 'false') {
            return <p className="wrongAnswer"> ...Essaye encore... </p>;
        } else {
        }
    }
    return (
        <div>
            <h1>LE CODE SECRET </h1>
            <div className="gameBlock">
                <p className="explanations">
                    Trouve le code secret pour passer à la prochaine énigme...
                </p>

                <p>
                    4U D3P4r<span className="secretLetter">7</span> C357 8451QU3
                    r1<span className="secretLetter">3</span>N D3
                    <span className="secretLetter">N</span>0UV34U N1 D3 C0MP11QU
                    3 M415 r4P1D3M3N
                    <span className="secretLetter">7</span> C4 V
                    <span className="secretLetter">4</span> 53 6473r 50 1
                    <span className="secretLetter">7</span> P47
                    <span className="secretLetter">1</span>3N7 P
                    <span className="secretLetter">0</span>Ur 646
                    <span className="secretLetter">N</span>3r
                </p>
                <input
                    onChange={handleTermChange}
                    className="userInput"
                ></input>
                <button onClick={handleClick} className="validationButton">
                    Tenter ma chance
                </button>
                <div>{getResults()}</div>
            </div>
        </div>
    );
}
