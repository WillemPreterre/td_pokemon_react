
import '../css/style.css'
import '../css/normalize.css'
import Data from "../data/data.json"

function Pokemon() {

    function getColorHexa(pokemonType) {
        console.log(pokemonType)
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
    return (
        <main>
            {Data.map((pokemon) => <article key={pokemon.pokedexId} style={{ borderColor: getColorHexa(pokemon.apiTypes[0].name), backgroundColor: getColorHexa(pokemon.apiTypes[0].name) }}>
                <figure>
                    <picture>
                        <img src={pokemon.image} alt={"Image" + " " + `${pokemon.name}`} />
                    </picture>
                    <figcaption >
                        <span className="types">{pokemon.apiTypes[0].name}</span>
                        <h2>{pokemon.name}</h2>
                        <ol>
                            <li>Points de vie : {pokemon.stats.HP}</li>
                            <li>Attaque : {pokemon.stats.attack}</li>
                            <li>Défense : {pokemon.stats.defense}</li>
                            <li>Attaque spécial : {pokemon.stats.special_attack}</li>
                            <li>Vitesse : {pokemon.stats.speed}</li>
                        </ol>
                    </figcaption>
                </figure>
            </article>
            )}
        </main>
    )
}
export default Pokemon