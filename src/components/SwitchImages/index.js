import React, { useState } from 'react';
import style from './style.module.css';
import { SortableComponent } from '../DragAndDrop/index';
import amourniais from '../../Images/amourniais.jpg';
import mariano from '../../Images/luismariano.jpg';
import arrayMove from 'array-move';
import { NextButton } from '../NextButton';
import { Link } from 'react-router-dom';
import { Help } from '../Help';

export function SwitchImages() {
    const [items, setItems] = useState([
        'L',
        'A',
        'M',
        'O',
        'U',
        'R',
        'N',
        'I',
        'A',
        'I',
        'S',
    ]);

    function onSortEnd({ oldIndex, newIndex }) {
        setItems(arrayMove(items, oldIndex, newIndex));
    }

    function goNextMystery() {
        const next = ['L', 'U', 'I', 'S', 'M', 'A', 'R', 'I', 'A', 'N', 'O'];
        if (JSON.stringify(next) == JSON.stringify(items)) {
            return (
                <Link to="/card">
                    <NextButton text=">>" />
                </Link>
            );
        }
    }

    return (
        <div className={style.switchImages}>
            <Help text="Ah ces anagrammes !" color="white" />
            <h1 className={style.white}> DEUX EN UN</h1>
            <div className={style.containerImage}>
                <img
                    className={style.amourniais}
                    src={amourniais}
                    alt="Couple niais"
                />

                <div className={style.globalBlock}>
                    {items.map((item, index) => {
                        return (
                            <div
                                className={style.blackBlock}
                                style={{
                                    opacity:
                                        'LAMOURNIAIS'[index] === item ? 0 : 1,
                                }}
                                key={`item-${item}${index}`}
                            ></div>
                        );
                    })}
                </div>
            </div>
            <SortableComponent items={items} onSortEnd={onSortEnd} />
            <div>{goNextMystery()}</div>
            <div className={style.containerImage}>
                <img
                    className={style.mariano}
                    src={mariano}
                    alt="Louis Mariano"
                />

                <div className={style.globalBlock}>
                    {items.map((item, index) => {
                        return (
                            <div
                                className={style.blackBlock}
                                style={{
                                    opacity:
                                        'LUISMARIANO'[index] === item ? 0 : 1,
                                }}
                                key={`item-${item}${index}`}
                            ></div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
