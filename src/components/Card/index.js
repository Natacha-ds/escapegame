import React, { useState } from 'react';
import style from './style.module.css';
import one from '../../Images/unv2.jpeg';
import two from '../../Images/deuxv2.jpeg';
import three from '../../Images/troisv2.jpeg';
import four from '../../Images/quatrev2.jpeg';
import { NextButton } from '../NextButton';

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
            return <NextButton text=">>" />;
        }
    }

    return (
        <div className={style.page}>
            <h1 className={style.white}>LES SYMBOLES</h1>
            <p className={`${style.white} ${style.explanations}`}>
                Chaque symbole correspond à une touche du clavier...
            </p>
            <div className={style.globalCards}>
                <div className={style.cardAndInput}>
                    <img src={two} className={style.card} />
                    <input
                        value={answerFirstCard}
                        onInput={(e) => setAnswerFirstCard(e.target.value)}
                    ></input>
                </div>
                <div className={style.cardAndInput}>
                    <img src={one} className={style.card} />
                    <input
                        value={answerSecondCard}
                        onInput={(e) => setAnswerSecondCard(e.target.value)}
                    ></input>
                </div>
                <div className={style.cardAndInput}>
                    <img src={four} className={style.card} />
                    <input
                        value={answerThirdCard}
                        onInput={(e) => setAnswerThirdCard(e.target.value)}
                    ></input>
                </div>
                <div className={style.cardAndInput}>
                    <img src={three} className={style.card} />
                    <input
                        value={answerFourthCard}
                        onInput={(e) => setAnswerFourthCard(e.target.value)}
                    ></input>
                </div>
                <div> {onClick()} </div>
            </div>
        </div>
    );
}
