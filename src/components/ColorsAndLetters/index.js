import React, { useState } from 'react';
import { NextButton } from '../NextButton';
import style from './style.module.css';
import pastille from '../../Images/pastillev3.png';
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
            return <NextButton text=">> Prochaine Enigme" />;
        } else if (letterChoosen == 'e' && clickNumber < '5') {
            return;
        } else if (!letterChoosen == 'e' || !letterChoosen == '') {
            return (
                <p className={style.wrongLetter}>
                    {' '}
                    Es-tu sûr d'avoir choisi la bonne lettre ?
                </p>
            );
        }
    }

    return (
        <div className={style.globalColorsAndLetters}>
            <h1> LA COULEUR DES LETTRES </h1>

            <div className={style.images}>
                <img src={pastille} className={style.mainimage} />
                <img src={letter} className={style.mainimage} />
            </div>
            <div className={style.center}>
                <p className={style.explanations}>
                    La bonne lettre, pour combien de fois... ?
                </p>
                <div className={style.letterToChoose}>
                    <p className={style.oneletter} onClick={handleClick}>
                        a
                    </p>
                    <p className={style.oneletter} onClick={handleClick}>
                        z
                    </p>
                    <p className={style.oneletter} onClick={handleClick}>
                        r
                    </p>
                    <p className={style.oneletter} onClick={handleClick}>
                        t
                    </p>
                    <p className={style.oneletter} onClick={handleClick}>
                        n
                    </p>
                    <p className={style.oneletter} onClick={handleClick}>
                        u
                    </p>
                    <p className={style.oneletter} onClick={handleClick}>
                        s
                    </p>
                    <p className={style.oneletter} onClick={handleClick}>
                        p
                    </p>
                    <p className={style.oneletter} onClick={handleClick}>
                        e
                    </p>
                </div>
            </div>
            <div> {getResults()}</div>
        </div>
    );
}
