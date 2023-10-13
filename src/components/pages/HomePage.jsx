
import '../../css/style.css'
import '../../css/normalize.css'
import CardPokemon from '../../components/CardPokemon/CardPokemon.jsx';
import Sidebar from '../../components/SideBar/SideBar.jsx';
import { useEffect, useState } from "react";


export default function HomePage() {

  const [pokedex, setPokedex] = useState([])
  const [dataPokemon, setDataPokemon] = useState([])
  const [loading, setLoading] = useState(false)
  const [generation, setGeneration] = useState(1)
  const [options, setOptions] = useState([])

  useEffect(() => {
    console.log(`Le Pokedex possède ${pokedex.length} Pokémons`)
  }, [pokedex])

  useEffect(() => {

    fetch(`https://pokebuildapi.fr/api/v1/pokemon/generation/${generation}`)
      .then((response) => response.json())
      .then(data => {
        setDataPokemon(data)
        setLoading(true)
      })

    fetch(`https://pokebuildapi.fr/api/v1/pokemon/`)
      .then((response) => response.json())
      .then(data => {
        const lastGeneration = data.slice(-1)[0].apiGeneration + 1
        const generationOptions = [];
        for (let i = 1; i < lastGeneration; i++) {
          generationOptions.push(<option value={i} key={i}>Génération {i}</option>);
        }
        setOptions(generationOptions)

      })

  }, [generation])

  return (
    <>
      {loading ? (
        <>
          <div className="lmj-layout-inner">*
            <Sidebar pokedex={pokedex}></Sidebar>
            <label for="generation"  >ta génération</label>

            <select id="generation">

              {options}
            </select>

            <main>
              {dataPokemon.map((pokemon, index) => <CardPokemon key={index} pokedex={pokedex} setPokedex={setPokedex} pokemon={pokemon} />)}
            </main>
          </div></>
      ) : (<div className="flex-loading"><div className="loader">Loading</div></div>)}

    </>
  )
}