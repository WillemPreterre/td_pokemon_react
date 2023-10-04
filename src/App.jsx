import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './css/style.css'
import './css/normalize.css'
import Data from "./data/data.json"
function App() {
  console.log(Data[0])
  return (
    <>
      {Data.map((pokemon) => <article><figure key={pokemon.pokedexId}>
        <picture>
          <img src={pokemon.image} alt="Image + `${pokemon.name}`)" />
        </picture>
        <figcaption>
          <span class="types">{pokemon.apiTypes[0].name}</span>
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
    </>
  )
}

export default App
