import React from 'react';
import { useHistory } from 'react-router-dom';

export function Home() {
    const history = useHistory();
    function handleClick() {
        history.push('/secretcode');
    }

    return (
        <React.Fragment>
            <h2>Home</h2>
            <button onClick={handleClick}> Start </button>
        </React.Fragment>
    );
}
