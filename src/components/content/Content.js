import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import { GiShoppingCart } from "react-icons/gi";

import axios from "axios";
import "./card.css";
import { useNavigate } from "react-router-dom";
function Content() {
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
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    let url = "https://ecommerce-back-end-eta.vercel.app/api/products";
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        setData(response.data.products);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Header />
      <div className="cards container">
        {data.map((details) => {
          return (
            <div
              className="allcard"
              style={{ width: "18rem", height: "22rem" }}
              onClick={() => navigate("details", { state: details })}
            >
              <img
                style={{
                  borderTopLeftRadius: "25px",
                  borderTopRightRadius: "25px",
                }}
                className="dataImage"
                alt="dataImage"
                src={details.image}
              />
              <span style={{ fontWeight: "bold" }}>{details.title}</span>
              <span>Price : ₹{details.price}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(details._id);
                }}
                style={{ marginBottom: "10px" }}
                type="button"
                className="btn btn-warning"
              >
                <GiShoppingCart /> Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Content;
