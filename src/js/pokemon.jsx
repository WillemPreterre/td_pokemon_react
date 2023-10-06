
import '../css/style.css'
import '../css/normalize.css'
import Data from "../data/data.json"
import CardPokemon from '../components/CardPokemon';

function Pokemon() {

    
    return (
        <main>
            {Data.map((pokemon) => <CardPokemon pokemon={pokemon} />)}
        </main>
    )
}
export default Pokemon