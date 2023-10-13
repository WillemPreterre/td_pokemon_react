import { Link, Outlet } from "react-router-dom";
import Footer from "./components/Footer/footer";
import logo from "../public/pokemon-logo.png"

export default function App() {
  return (
    <div className="App">
      <h1>
        <Link to={"/"}>
          <img style={{ width: "300px", height: "auto" }} src={logo} alt="logo pokémon" />
        </Link>
      </h1>
      <div id="detail">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
}