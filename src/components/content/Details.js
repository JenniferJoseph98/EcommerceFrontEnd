import React from "react";
import { useLocation } from "react-router-dom";
import "./card.css";
import { GiShoppingCart } from "react-icons/gi";

function Details() {
  const location = useLocation();
  const details = location.state;
  function addToCart(id) {
    let myArray = JSON.parse(localStorage.getItem("cartItems")) || [];
    if (myArray.includes(id)) {
      alert("Items already added");
    } else {
      myArray.push(id);
    }
    let myArrayString = JSON.stringify(myArray);
    localStorage.setItem("cartItems", myArrayString);
  }
  return (
    <div className="container details">
      <div className="detailstag">
        <div className="detailscontent tags ">
          <img src={details.image} alt="altimg" className="image" />
        </div>
        <div className="detailscontent tags desc">
          <h3>{details.title}</h3>
          <h5>{details.description}</h5>
          <h5>Price: ₹{details.price}</h5>
          <ul id="ultag">
            {details.size.map((e) => {
              return <li className="litag">{e}</li>;
            })}
          </ul>
          <button
            onClick={() => addToCart(details._id)}
            style={{ marginBottom: "10px" }}
            type="button"
            className="btn btn-warning"
          >
            <GiShoppingCart /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
