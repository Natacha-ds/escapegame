import React from 'react';
import style from './style.module.css';

export function WellDone() {
    return (
        <div className={style.globalPage}>
            <h1 className={style.white}>Bien joué tu es arrivé au bout!</h1>
            <div className={style.indications}>
                Voici donc les informations :
                <ul>
                    <li>
                        RDV chez les parents le
                        <strong> samedi 12 septembre pour 12h </strong>où un
                        buffet traiteur vous attendra...
                    </li>
                    <li>
                        Ensuite, <strong>activité surprise à 16h45 </strong>à 35
                        minutes de Melisey. Prévoir des baskets et une tenue
                        dans laquelle vous êtes à l'aise.
                    </li>
                    <li> Repas le dimanche midi </li>
                    <br />
                    Rien de bien innovant ni de foufou mais j'espère un bon
                    moment en famille et dans la bonne humeur
                </ul>
            </div>
            <img
                className={style.gif}
                src="https://media.giphy.com/media/YfMHLC2s6okBq/source.gif"
                alt="feu d'artifices"
            ></img>
        </div>
    );
}
