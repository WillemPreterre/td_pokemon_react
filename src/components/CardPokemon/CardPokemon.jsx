import "./CardPokemon.scss"
import { useState } from "react";
function CardPokemon(props) {

    function getColorHexa(pokemonType) {

        switch (pokemonType) {
            case 'Eau':
                return '#4169E1';

            case 'Plante':
                return '#008000';

            case 'Poison':
                return '#D850C2';

            case 'Vol':
                return '#738DDB';

            case 'Feu':
                return '#FFA500';

            case 'Insecte':
                return '#70B901';

            case 'Électrik':
                return '#FFD244';

            case 'Sol':
                return '#CD793F';

            case 'Fée':
                return 'pink';

            case 'Combat':
                return 'darkred';

            case 'Psy':
                return '#FD6960';

            case 'Acier':
                return '#246A79';

            case 'Glace':
                return '#67D1C8';

            case 'Roche':
                return '#CBB866';

            case 'Dragon':
                return '#1C6ABB';

            default:
                return 'grey';
        }
    }
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <article id={props.pokemon.pokedexId} data-reverse={isOpen} onClick={(e) => {
            let article = document.getElementById(props.pokemon.pokedexId)
            // console.log(e.target.getAttribute('data-reverse'))
            if (article.dataset.reverse == "true") {
                setIsOpen(false)
                console.log(article.dataset.reverse)


            } else if (article.dataset.reverse == "false") {
                setIsOpen(true)
                console.log(article.dataset.reverse)

            }
        }} key={props.pokemon.pokedexId} style={{ borderColor: getColorHexa(props.pokemon.apiTypes[0].name), backgroundColor: getColorHexa(props.pokemon.apiTypes[0].name) }}>
            <div
                className="cardInner"
                style={{
                    backgroundColor: getColorHexa(props.pokemon.apiTypes[0].name),
                    borderColor: getColorHexa(props.pokemon.apiTypes[0].name),
                }}
            >
                <figure className="cardFront">
                    <picture>
                        <img src={props.pokemon.image} alt={"Image" + " " + `${props.pokemon.name}`} />

                    </picture>
                    <figcaption >
                        <span className="types">{props.pokemon.apiTypes[0].name}</span>
                        <h2>{props.pokemon.name}</h2>
                        <ol>
                            <li>Points de vie : {props.pokemon.stats.HP}</li>
                            <li>Attaque : {props.pokemon.stats.attack}</li>
                            <li>Défense : {props.pokemon.stats.defense}</li>
                            <li>Attaque spécial : {props.pokemon.stats.special_attack}</li>
                            <li>Vitesse : {props.pokemon.stats.speed}</li>
                        </ol>
                    </figcaption>
                </figure>
                <div className="cardBack">
                    <a href="#">Voir plus</a>
                </div>
            </div>
        </article>
    )
}
export default CardPokemon