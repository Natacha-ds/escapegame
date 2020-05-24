import React, { useState } from 'react';

export function SecretCode() {
    const [secretCode, setSecretCode] = useState('');
    const [proposition, setProposition] = useState('');
    function handleTermChange(event) {
        setSecretCode(event.target.value.toLowerCase());
    }
    function handleClick() {
        if (secretCode === 'inception') {
            setProposition('true');
        } else if (secretCode === '') {
            setProposition('empty');
        } else {
            setProposition('false');
        }
    }

    function getResults() {
        if (proposition === 'true') {
            console.log('v1 ' + secretCode);
            return (
                <div>
                    <h2> Well done ! 👍 </h2>
                    <button> Next </button>
                </div>
            );
        } else if (proposition === 'false') {
            console.log('v2 ' + secretCode);
            return <h2> Essaye encore </h2>;
        } else {
        }
    }
    return (
        <div>
            <h1>Devine le code secret pour passer à la prochaine étape</h1>
            <p>
                4U D3P4r7 C357 8451QU3 r13N D3 N0UV34U N1 D3 C0MP11QU3 M415
                r4P1D3M3N7 C4 V4 53 6473r 5017 P4713N7 P0Ur Y 4rr1V3r
            </p>
            <input onChange={handleTermChange}></input>
            <button onClick={handleClick}> Valider </button>
            <div>{getResults()}</div>
        </div>
    );
}
