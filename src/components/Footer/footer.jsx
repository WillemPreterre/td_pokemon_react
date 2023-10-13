/* fichier Footer.jsx */
import { Link } from "react-router-dom"
import "./Footer.scss"

/*
Via le plugin : ES7+ React/Redux/React-Native snippets

rfce : permet de créer une fonction component
*/

function Footer() {
  return (
    <footer>
      <Link to={"/mentionlegale"}>Mentions légales</Link>
    </footer>
  )
}

export default Footer


         