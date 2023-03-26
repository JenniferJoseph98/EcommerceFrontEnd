import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import "./cart.css";
import { GiShoppingCart } from "react-icons/gi";

import axios from "axios";
function Cart() {
  const [detailMap, setDetailMap] = useState(new Map());
  const [data, setData] = useState([]);
  async function addCart(id) {
    let url = `https://ecommerce-back-end-eta.vercel.app/api/products/${id}`;
    axios
      .get(url)
      .then((res) => {
        setDetailMap(
          (map) => new Map(map.set(res.data.products._id, res.data.products))
        );
      })
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    let myArray = JSON.parse(localStorage.getItem("cartItems")) || [];
    myArray.map((e) => {
      //   console.log(e);
      addCart(e);
      return null;
    });
    setData(Array.from(detailMap.values()));
  }, [detailMap, setData]);
  return (
    <>
      <Header />
      <div className="cards container">
        {data.map((details) => {
          return (
            <div
              className="allcard"
              style={{ width: "18rem", height: "22rem" }}
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

export default Cart;
