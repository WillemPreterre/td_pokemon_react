
import Pokemon from "./js/pokemon.jsx"
import logo from "../public/pokemon-logo.png"
import Sidebar from "./components/SideBar.jsx"
function App() {

  return (
    <>
      <h1><img src={logo} alt="logo pokémon" /></h1>
      <div className="lmj-layout-inner">
        {/* <Sidebar></Sidebar> */}
      </div>
      <Pokemon />
    </>
  )
}

export default App
