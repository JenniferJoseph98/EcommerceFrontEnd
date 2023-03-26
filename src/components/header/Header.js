import React from "react";
import { TbSquareRoundedLetterJ } from "react-icons/tb";
import { TbSquareRoundedLetterV } from "react-icons/tb";
import { GiShoppingCart } from "react-icons/gi";
import { SlLogin } from "react-icons/sl";
import { GrDocumentUser } from "react-icons/gr";
import "./header.css";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <span className="logo">
        <TbSquareRoundedLetterV />
        <TbSquareRoundedLetterJ />
      </span>
      <div>
        <button
          onClick={() => navigate("card")}
          type="button"
          className="btn btn-warning signup"
        >
          <GiShoppingCart />
          <span className="ms-1 d-none d-sm-inline">Cart</span>
        </button>
        <button type="button" className="btn btn-warning signup">
          <SlLogin />
          <span className="ms-1 d-none d-sm-inline">Login</span>
        </button>
        <button type="button" className="btn btn-warning signup">
          <GrDocumentUser />
          <span className="ms-1 d-none d-sm-inline">Signup</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
