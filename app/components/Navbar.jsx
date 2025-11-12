import { NavLink } from "react-router-dom";


export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="logo">Letters to You</div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/journal">Journal</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
