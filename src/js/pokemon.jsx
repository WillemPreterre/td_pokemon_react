
import '../css/style.css'
import '../css/normalize.css'
import Data from "../data/data.json"

function Pokemon() {
    return (
        <main>
            {Data.map((pokemon) => <article key={pokemon.pokedexId}><figure >
                <picture>
                    <img src={pokemon.image} alt="Image + `${pokemon.name}`)" />
                </picture>
                <figcaption>
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