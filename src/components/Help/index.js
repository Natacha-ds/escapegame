import React, { useState } from 'react';
import style from './style.module.css';
import help from '../../Images/help.png';

export function Help({ text, color }) {
    const [displayMessage, setdisplayMessage] = useState("Besoin d'aide ?");
    return (
        <div className={style.helpBlock}>
            <img
                className={style.helpImage}
                src={help}
                onClick={() => setdisplayMessage(text)}
                text={text}
                alt="une ampoule éclairée"
            />
            <div className={color === 'black' ? style.black : style.white}>
                {displayMessage}
            </div>
        </div>
    );
}
