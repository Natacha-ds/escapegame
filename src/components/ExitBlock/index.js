import React, { useState } from 'react';
import style from './style.module.css';

export function ExitBlock({ text }) {
    return <div className={style.pageBlock}>{text}</div>;
}
