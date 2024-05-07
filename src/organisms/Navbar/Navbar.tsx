import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import Menu from "../../molecules/Menu/Menu";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const navigate = useNavigate();

  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  const handleOpenMenu = () => {
    setToggleMenu(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <Link to="/home" className="navbar-link">
          Hungry Mood
        </Link>

        <div className="app__navbar-smallscreen">
          <CiMenuBurger className="menu-icon" onClick={handleOpenMenu} />

          {toggleMenu && (
            <Menu setToggleMenu={setToggleMenu} handleLogout={handleLogout} />
          )}
        </div>
      </nav>
      <div className="search-container">
        <form onSubmit={submitHandler} className="search-form">
          <FaSearch className="search-icon" />
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            value={input}
            className="search"
          />
        </form>
      </div>
    </div>
  );
};

export default Navbar;
