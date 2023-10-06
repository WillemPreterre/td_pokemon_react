
import logo from "../public/pokemon-logo.png"
import './css/style.css'
import './css/normalize.css'
import Data from "./data/data.json"
import CardPokemon from './components/CardPokemon/CardPokemon';
import Sidebar from './components/SideBar/SideBar';

function App() {
  return (
    <>
      <h1>
        <img src={logo} alt="logo pokémon" />
      </h1>
      <div className="lmj-layout-inner">*
        <Sidebar></Sidebar>
        <main>
          {Data.map((pokemon) => <CardPokemon pokemon={pokemon} />)}
        </main>
      </div>
    </>
  )
}

export default App
