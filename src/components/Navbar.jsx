import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Student Dashboard</h2>
 
 <div className="nav-links">
  <NavLink to="/">Home</NavLink>
  <NavLink to="/about">About</NavLink>
  <NavLink to="/Contact">Contact</NavLink>

 </div>
 </nav>
  );
}
export default Navbar;