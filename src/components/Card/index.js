import React, { useState } from 'react';
import style from './style.module.css';
import { NextButton } from '../NextButton';
import { Symbole } from '../Symbole/index.js';
import { Link } from 'react-router-dom';
import { Help } from '../Help/index';

export function Card() {
    const [answerFirstCard, setAnswerFirstCard] = useState('');
    const [answerSecondCard, setAnswerSecondCard] = useState('');
    const [answerThirdCard, setAnswerThirdCard] = useState('');
    const [answerFourthCard, setAnswerFourthCard] = useState('');

    function onClick() {
        if (
            answerFirstCard === '2' &&
            answerSecondCard === '1' &&
            answerThirdCard === '4' &&
            answerFourthCard === '3'
        ) {
            return (
                <Link to="/end">
                    <NextButton text=">>" />{' '}
                </Link>
            );
        }
    }

    return (
        <div className={style.page}>
            <Help text="Effet miroir peut-être ?" color="white" />
            <h1 className={style.white}>LES SYMBOLES</h1>
            <p className={`${style.white} ${style.explanations}`}>
                A chaque symbole sa touche du clavier...
            </p>

            <div className={style.globalCards}>
                <div className={style.cardAndInput}>
                    <Symbole
                        text="2"
                        value={answerFirstCard}
                        onInput={(e) => setAnswerFirstCard(e.target.value)}
                    />
                </div>
                <div className={style.cardAndInput}>
                    <Symbole
                        text="1"
                        value={answerSecondCard}
                        onInput={(e) => setAnswerSecondCard(e.target.value)}
                    />
                </div>
                <div className={style.cardAndInput}>
                    <Symbole
                        text="4"
                        value={answerThirdCard}
                        onInput={(e) => setAnswerThirdCard(e.target.value)}
                    />
                </div>
                <div className={style.cardAndInput}>
                    <Symbole
                        text="3"
                        value={answerFourthCard}
                        onInput={(e) => setAnswerFourthCard(e.target.value)}
                    />
                </div>
                <div> {onClick()} </div>
            </div>
        </div>
    );
}
