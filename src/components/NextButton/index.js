import React from 'react';

import styles from './index.module.css';

export function NextButton({ text, handleClick }) {
    return (
        <button className={styles.next} onClick={handleClick}>
            {text}
        </button>
    );
}
