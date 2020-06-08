import React from 'react';
import style from './style.module.css';

export function Symbole({ text, value, onInput }) {
    return (
        <div className={style.symboleAndInput}>
            <div className={style.bothSymboles}>
                <p className={style.reversedSymbole}>{text}</p>
                <p>{text}</p>
            </div>
            <input value={value} onInput={onInput}></input>
        </div>
    );
}
