import { MdOutlineRestaurantMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import "./menu.css";

interface MenuProps {
  setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
  handleLogout: () => void;
}

const Menu = ({ setToggleMenu, handleLogout }: MenuProps) => {
  const handleCloseMenu = () => {
    setToggleMenu(false);
  };

  return (
    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
      <MdOutlineRestaurantMenu
        fontSize={27}
        className="overlay__close"
        onClick={handleCloseMenu}
      />
      <ul className="app__navbar-smallscreen_links">
        <li className="p__opensans">
          <Link to="/news" onClick={handleCloseMenu}>
            News
          </Link>
        </li>
        <li className="p__opensans">
          <button type="submit" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
