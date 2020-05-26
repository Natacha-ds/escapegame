import React, { useState } from 'react';
import { NextButton } from '../NextButton';
import './style.css';
import pastille from '../../Images/pastillev2.png';
import letter from '../../Images/lettrev2.png';

export function ColorsAndLetters() {
    const [letterChoosen, setLetterChoosen] = useState('');
    const [clickNumber, setClickNumber] = useState(1);

    function handleClick(e) {
        setLetterChoosen(e.currentTarget.innerHTML);
        if (letterChoosen == e.currentTarget.innerHTML) {
            setClickNumber(clickNumber + 1);
        } else {
            setClickNumber(1);
        }
    }

    function getResults() {
        if (letterChoosen == 'e' && clickNumber == '5') {
            return <NextButton text=">> Next" />;
        }
    }

    return (
        <div className="globalColorsAndLetters">
            <h1> La couleur des lettres </h1>

            <div className="images">
                <img src={pastille} className="mainimage" />
                <img src={letter} className="mainimage" />
            </div>
            <div className="center">
                <p className="explanations center">
                    La bonne lettre, pour combien de fois... ?
                </p>
                <div className="letterToChoose">
                    <p className="oneletter" onClick={handleClick}>
                        a
                    </p>
                    <p className="oneletter" onClick={handleClick}>
                        z
                    </p>
                    <p className="oneletter" onClick={handleClick}>
                        r
                    </p>
                    <p className="oneletter" onClick={handleClick}>
                        t
                    </p>
                    <p className="oneletter" onClick={handleClick}>
                        n
                    </p>
                    <p className="oneletter" onClick={handleClick}>
                        u
                    </p>
                    <p className="oneletter" onClick={handleClick}>
                        s
                    </p>
                    <p className="oneletter" onClick={handleClick}>
                        p
                    </p>
                    <p className="oneletter" onClick={handleClick}>
                        e
                    </p>
                </div>
            </div>
            <div> {getResults()}</div>
        </div>
    );
}
