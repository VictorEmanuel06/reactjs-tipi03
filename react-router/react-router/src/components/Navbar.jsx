import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>

        {/* <Link to="/">Home</Link>
        <Link to="/contatos">Contatos</Link> */}

        <NavLink to="/" className={({isActive}) => (isActive) ? "active" : ""}>Home</NavLink>
        <NavLink to="/contatos" className={({isActive}) => (isActive) ? "active" : ""}>Contatos</NavLink>


    </div>
  )
}

export default Navbar;