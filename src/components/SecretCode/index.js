import React, { useState } from 'react';
import style from './style.module.css';
import { NextButton } from '../NextButton';
import { useHistory } from 'react-router-dom';
import { Help } from '../Help';

export function SecretCode() {
    const [secretCode, setSecretCode] = useState('');
    const [proposition, setProposition] = useState('');
    const history = useHistory();

    function handleTermChange(event) {
        setSecretCode(event.target.value.toLowerCase());
    }

    function handleRedirection() {
        history.push('/colorsandletters');
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
                    <NextButton text=">>" handleClick={handleRedirection} />
                </div>
            );
        } else if (proposition === 'false') {
            return <p className={style.wrongAnswer}> ...Essaye encore... </p>;
        } else {
        }
    }

    return (
        <div className={style.globalSecretCode}>
            <Help text="Parles-tu le Leet Language ?" color="black" />
            <h1>LE CODE SECRET </h1>
            <div className={style.gameBlock}>
                <p className={style.explanations}>
                    Trouve le code secret pour passer à la prochaine énigme...
                </p>

                <p>
                    4U D3P4r<span className={style.secretLetter}>7</span> C357
                    8451QU3 r1<span className={style.secretLetter}>3</span>N D3
                    <span className={style.secretLetter}>N</span>0UV34U N1 D3
                    C0MP11QU 3 M415 r4P1D3M3N
                    <span className={style.secretLetter}>7</span> C4 V
                    <span className={style.secretLetter}>4</span> 53 6473r 50 1
                    <span className={style.secretLetter}>7</span> P47
                    <span className={style.secretLetter}>1</span>3N7 P
                    <span className={style.secretLetter}>0</span>Ur 646
                    <span className={style.secretLetter}>N</span>3r
                </p>
                <input
                    onChange={handleTermChange}
                    className={style.userInput}
                ></input>
                <button
                    onClick={handleClick}
                    className={style.validationButton}
                >
                    Valider
                </button>
                <div className={style.nextButton}>{getResults()}</div>
            </div>
        </div>
    );
}
