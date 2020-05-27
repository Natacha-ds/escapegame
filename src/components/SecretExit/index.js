import React, { useState } from 'react';
import style from './style.module.css';
import { ExitBlock } from '../ExitBlock/index';
import { useHistory } from 'react-router-dom';

export function SecretExit() {
    const history = useHistory();
    function bottomArrow() {
        return <div className={style.center}>↓</div>;
    }

    function diagonalArrow() {
        return <div className={style.center}>↘︎</div>;
    }

    function rightArrow() {
        return <div className={style.center}>→</div>;
    }

    function cross() {
        return (
            <div>
                <div className={style.center}>
                    <span onClick={onClick}>⤫ </span>{' '}
                </div>
            </div>
        );
    }

    function onClick() {
        history.push('/'); // a modifier quand j'aurais la bonne redirection
    }

    return (
        <div className={style.globalSecretExitPage}>
            <h1 className={style.whiteh1}>L'ECHAPPATOIRE </h1>
            <p className={style.explanations}>
                Toute sortie est une entrée quelque part ailleurs
            </p>

            <div className={style.block}>
                <ExitBlock text={bottomArrow()} />
                <ExitBlock />
                <ExitBlock />
                <ExitBlock />
                <ExitBlock />
                <ExitBlock />
                <ExitBlock />
            </div>
            <div className={style.block}>
                <ExitBlock text={diagonalArrow()} />
                <ExitBlock />
                <ExitBlock />
                <ExitBlock />
                <ExitBlock />
                <ExitBlock />
                <ExitBlock />
            </div>
            <div className={style.block}>
                <ExitBlock />
                <ExitBlock text={rightArrow()} />
                <ExitBlock text={rightArrow()} />
                <ExitBlock />
                <ExitBlock />
                <ExitBlock />
                <ExitBlock />
            </div>
            <div className={style.block}>
                <ExitBlock />
                <ExitBlock />
                <ExitBlock />
                <ExitBlock text={diagonalArrow()} />
                <ExitBlock />
                <ExitBlock />
                <ExitBlock />
            </div>
            <div className={style.block}>
                <ExitBlock />
                <ExitBlock />
                <ExitBlock />
                <ExitBlock />
                <ExitBlock text={rightArrow()} />
                <ExitBlock text={rightArrow()} />
                <ExitBlock text={cross()} />
            </div>
        </div>
    );
}
