import { useState } from "react"
import "./SideBar.scss"
function Sidebar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            {isOpen ? (<div className="lmj-cart">
                <button className="lmj-cart-toggle-button" onClick={(e) => {
                    {
                        console.log("e")
                        if (isOpen == true) {
                            setIsOpen(false)
                        }
                    }
                }}>
                    X
                </button>
                <h2>
                    <img src={"#"} alt="" />

                    <p>Pokédex</p>
                </h2>
                <div>Votre Pokédex est vide</div>
            </div>
            ) : (
                <div className="lmj-cart-closed">
                    <button className="lmj-cart-toggle-button" onClick={(e) => {
                        if (isOpen == false) {
                            console.log("a")

                            setIsOpen(true)
                        }
                    }}>
                        <img src={"pokeball"} alt="" />
                        <p>Pokédex</p>
                    </button>
                </div>)}

        </>
    )
}

export default Sidebar
