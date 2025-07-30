import "./Header.css";
import { TbSearch, TbShoppingBagSearch, TbShoppingCart } from "react-icons/tb";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">
          <h2>
            <img src="./Nexis.png" />
          </h2>
          <TbShoppingBagSearch className="icon" />
        </div>
      </Link>

      <div className="right-side">
        <div className="search-input">
          <input type="text" placeholder="Search" />
          <TbSearch />
        </div>

        <div className="cart">
          <TbShoppingCart className="cart-icon" />
          <span>0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
