import React from 'react';
import { useHistory } from 'react-router-dom';
import style from './style.module.css';

export function Home() {
    const history = useHistory();
    function handleClick() {
        history.push('/secretcode');
    }

    return (
        <div className={style.page}>
            <div className={style.rectangle}>
                <h1 className={style.white}>BIENVENUE</h1>
                <p className={style.explanations}>
                    Envie de te creuser les méninges...? 5 énigmes à résoudre
                    <br /> <br /> Bon chance !
                </p>
                <br /> <br />
                <br /> <br />
            </div>
            <button onClick={handleClick}> Start </button>
        </div>
    );
}
