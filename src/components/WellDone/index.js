import React from 'react';
import style from './style.module.css';

export function WellDone() {
    return (
        <div className={style.globalPage}>
            <h1 className={style.white}>Bien joué !</h1>;
            <img
                className={style.gif}
                src="https://media.giphy.com/media/YfMHLC2s6okBq/source.gif"
            ></img>
        </div>
    );
}
