import React, { useState } from 'react';
import { NextButton } from '../NextButton';
import './style.css';
import pastille from '../../Images/pastilleenimge2.png';
import letter from '../../Images/lettresenigme.png';

export function ColorsAndLetters() {
    const [letterChoosen, setLetterChoosen] = useState('');
    const [clickNumber, setClickNumber] = useState(1);
    console.log('lettre ' + letterChoosen);
    console.log('nombre de fois ' + clickNumber);

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
        <div>
            <h1> La couleur des lettres </h1>
            <p className="explanations">
                La bonne lettre, pour combien de fois... ?
            </p>
            <img src={pastille} className="mainimage" />
            <img src={letter} className="mainimage" />
            <div className="letterToChoose">
                <p className="wrongletter" onClick={handleClick}>
                    a
                </p>
                <p className="wrongletter" onClick={handleClick}>
                    z
                </p>
                <p className="wrongletter" onClick={handleClick}>
                    r
                </p>
                <p className="wrongletter" onClick={handleClick}>
                    t
                </p>
                <p className="wrongletter" onClick={handleClick}>
                    n
                </p>
                <p className="wrongletter" onClick={handleClick}>
                    u
                </p>
                <p className="wrongletter" onClick={handleClick}>
                    s
                </p>
                <p className="wrongletter" onClick={handleClick}>
                    p
                </p>
                <p className="goodletter" onClick={handleClick}>
                    e
                </p>
            </div>
            <div> {getResults()}</div>
        </div>
    );
}
