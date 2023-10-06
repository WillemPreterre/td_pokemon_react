
import logo from "../public/pokemon-logo.png"
import './css/style.css'
import './css/normalize.css'
import Data from "./data/data.json"
import CardPokemon from './components/CardPokemon/CardPokemon';
import Sidebar from './components/SideBar/SideBar';
import { useState } from "react";

function App() {

  const [pokedex, setPokedex] = useState([])
  return (
    <>
      <h1>
        <img src={logo} alt="logo pokémon" />
      </h1>
      <div className="lmj-layout-inner">*
        <Sidebar pokedex={pokedex}></Sidebar>
        <main>
          {Data.map((pokemon, index) => <CardPokemon key={index} pokedex={pokedex} setPokedex={setPokedex} pokemon={pokemon} />)}
        </main>
      </div>
    </>
  )
}

export default App
