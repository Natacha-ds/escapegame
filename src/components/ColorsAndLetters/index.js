import React, { useState } from 'react';
import { NextButton } from '../NextButton';
import style from './style.module.css';
import pastille from '../../Images/pastillev4.png';
import letter from '../../Images/lettrev2.png';
import { useHistory } from 'react-router-dom';
import { Help } from '../Help/index';

export function ColorsAndLetters() {
    const [letterChoosen, setLetterChoosen] = useState('');
    const [clickNumber, setClickNumber] = useState(1);
    const history = useHistory();

    function handleClick(e) {
        setLetterChoosen(e.currentTarget.innerHTML);
        if (letterChoosen === e.currentTarget.innerHTML) {
            setClickNumber(clickNumber + 1);
        } else {
            setClickNumber(1);
        }
    }

    function getResults() {
        if (letterChoosen === 'e' && clickNumber === 5) {
            return <NextButton text=">>" handleClick={handleRedirection} />;
        } else if (letterChoosen === 'e' && clickNumber < '5') {
            return;
        } else if (!letterChoosen === 'e' || !letterChoosen === '') {
            return (
                <p className={style.wrongLetter}>
                    {' '}
                    Es-tu sûr d'avoir choisi la bonne lettre ?
                </p>
            );
        }
    }

    function handleRedirection() {
        history.push('/secretexit');
    }

    return (
        <div className={style.globalColorsAndLetters}>
            <Help
                text="D'abord la lettre seule, ensuite son nombre de fois"
                color="black"
            />
            <h1> LA COULEUR DES LETTRES </h1>

            <div className={style.images}>
                <img
                    src={letter}
                    className={style.mainimage}
                    alt="suite de lettres"
                />
                <img
                    src={pastille}
                    className={style.mainimage}
                    alt="pastille de couleur"
                />
            </div>
            <div className={style.center}>
                <p className={style.explanations}>
                    Choisis la bonne lettre, le bon nombre de fois...
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
