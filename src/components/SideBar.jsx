/* ICI TOUS LES IMPORTS */
import "../style/components/SideBar.scss"
function Sidebar() {
    /* Création du useState isOpen qui sera initialiser à false */
  
    return {/* ... */} ? (
      <div className="lmj-cart">
        <button className="lmj-cart-toggle-button" onClick={{/* ... */}}>
          X
        </button>
        <h2>
          {/* <img src={ */}
            /* ... */
            {/* // } alt="" /> */}
          <p>Pokédex</p>
        </h2>
        <div>Votre Pokédex est vide</div>
      </div>
    ) : (
      <div className="lmj-cart-closed">
        <button className="lmj-cart-toggle-button" onClick={{/* ... */}}>
          <img src={pokeball} alt="" />
          <p>Pokédex</p>
        </button>
      </div>
    )
  }
  
  export default Sidebar
  