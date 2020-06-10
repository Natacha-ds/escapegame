import React, { useState } from 'react';
import style from './style.module.css';
import { useLocation } from 'react-router-dom';

export function ProgressBar() {
    const location = useLocation();
    let path = location.pathname;

    function displayProgressBar() {
        if (path == '/secretcode') {
            return (
                <div className={style.blockStep}>
                    <p className={style.currentStep}>1</p>
                    <p className={style.otherStep}>2</p>
                    <p className={style.otherStep}>3</p>
                    <p className={style.otherStep}>4</p>
                    <p className={style.otherStep}>5</p>
                </div>
            );
        } else if (path == '/colorsandletters') {
            return (
                <div className={style.blockStep}>
                    <p className={style.pastStep}>1</p>
                    <p className={style.currentStep}>2</p>
                    <p className={style.otherStep}>3</p>
                    <p className={style.otherStep}>4</p>
                    <p className={style.otherStep}>5</p>
                </div>
            );
        } else if (path == '/secretexit') {
            return (
                <div className={style.blockStep}>
                    <p className={style.pastStep}>1</p>
                    <p className={style.pastStep}>2</p>
                    <p className={style.currentStep}>3</p>
                    <p className={style.otherStep}>4</p>
                    <p className={style.otherStep}>5</p>
                </div>
            );
        } else if (path == '/switchimages') {
            return (
                <div className={style.blockStep}>
                    <p className={style.pastStep}>1</p>
                    <p className={style.pastStep}>2</p>
                    <p className={style.pastStep}>3</p>
                    <p className={style.currentStep}>4</p>
                    <p className={style.otherStep}>5</p>
                </div>
            );
        } else if (path == '/card') {
            return (
                <div className={style.blockStep}>
                    <p className={style.pastStep}>1</p>
                    <p className={style.pastStep}>2</p>
                    <p className={style.pastStep}>3</p>
                    <p className={style.pastStep}>4</p>
                    <p className={style.currentStep}>5</p>
                </div>
            );
        } else {
            return;
        }
    }

    return <div>{displayProgressBar()}</div>;
}
