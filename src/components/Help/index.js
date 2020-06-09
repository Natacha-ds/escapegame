import React, { useState } from 'react';
import style from './style.module.css';
import help from '../../Images/help.png';

export function Help({ text, color }) {
    const [displayMessage, setdisplayMessage] = useState('Help ?');

    function handleClick() {
        setdisplayMessage(text);
    }

    function colors() {
        if (color == 'black') {
            return style.black;
        } else {
            return style.white;
        }
    }

    return (
        <div className={style.helpBlock}>
            <img
                className={style.helpImage}
                src={help}
                onClick={handleClick}
                text={text}
            />
            <div className={colors()}>{displayMessage}</div>
        </div>
    );
}
