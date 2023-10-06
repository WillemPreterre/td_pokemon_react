import { useState } from "react"
import "./SideBar.scss"
function Sidebar(props) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            {isOpen ? (<div className="lmj-cart">
                <button className="lmj-cart-toggle-button" onClick={(e) => {
                    {
                        if (isOpen == true) {
                            setIsOpen(false)
                        }
                    }
                }}>
                    X
                </button>
                <h2>
                    <img src={"#"} alt="" />

                    <p>Pokédex ({props.pokedex.length})</p>
                </h2>
                {
                    props.pokedex.length === 0 ? (<div>Votre Pokédex est vide</div>
                    ) : (<>{props.pokedex.map((pokemon, index) => (
                        <span key={index}>{pokemon.name}</span>

                    )
                    )}</>)
                }
            </div>
            ) : (
                <div className="lmj-cart-closed">
                    <button className="lmj-cart-toggle-button" onClick={(e) => {
                        if (isOpen == false) {

                            setIsOpen(true)
                        }
                    }}>
                        <img src={"pokeball"} alt="" />
                        <p>Pokédex ({props.pokedex.length})</p>
                    </button>
                </div>)}

        </>
    )
}

export default Sidebar
