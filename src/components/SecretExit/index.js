import React from 'react';
import style from './style.module.css';
import { Link } from 'react-router-dom';
import { Help } from '../Help/index';

export function SecretExit() {
    return (
        <div className={style.globalSecretExitPage}>
            <Help text="Le noir cache tout..." color="white" />
            <h1 className={style.whiteh1}>L'ECHAPPATOIRE </h1>
            <p className={style.explanations}>
                "Toute sortie est une entrée quelque part ailleurs"
            </p>
            <div className={style.downArrow}>↓</div>
            <div className={style.secondDownArrow}>↓</div>
            <div className={style.diagonaleArrow}>↘︎</div>
            <div className={style.rightArrow}>→</div>
            <div className={style.secondDiagonaleArrow}>↘︎</div>
            <Link className={style.exitCross} to="/switchimages">
                ⤫
            </Link>
        </div>
    );
}
