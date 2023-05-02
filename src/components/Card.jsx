import React, { useState, useRef, useEffect } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";
const Card = ({ foodName, options, imgSrc, foodItem }) => {
  let dispatch = useDispatchCart();
  let data = useCart();
  const priceRef = useRef();
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  let foodItems = foodItem;
  let option = options;
  let priceOptions = Object.keys(option);
  const handleAddToCart = async () => {
    let food = [];
    for (const item of data) {
      if (item.id === foodItems._id) {
        food = item;

        break;
      }
    }
    console.log(food);
    if (food !== []) {
      if (food.size === size) {
        await dispatch({
          type: "UPDATE",
          id: foodItems._id,
          price: finalPrice,
          qty: qty,
        });
        return;
      } else if (food.size !== size) {
        await dispatch({
          type: "ADD",
          id: foodItem._id,
          name: foodItem.name,
          price: finalPrice,
          qty: qty,
          size: size,
          image: imgSrc,
        });
        return;
      }
      return;
    }

    await dispatch({
      type: "ADD",
      id: foodItems._id,
      name: foodName,
      price: finalPrice,
      qty: qty,
      size: size,
      image: imgSrc,
    });
    console.log(data);
  };
  let finalPrice = qty * parseInt(option[size]);
  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);
  return (
    <div className="card mt-3" style={{ width: "18rem" }}>
      <img
        src={imgSrc}
        className="card-img-top"
        alt="..."
        style={{ height: "140px", objectFit: "fill" }}
      />
      <div className="card-body">
        <h5 className="card-title">{foodName}</h5>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignContent: "flex-start",
            }}
          >
            <select
              name=""
              id=""
              className="m-2 h-50 bg-success rounded"
              onChange={(e) => {
                setQty(e.target.value);
                console.log(qty);
              }}
            >
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select
              className="m-2 h-50 bg-success rounded "
              onChange={(e) => setSize(e.target.value)}
              ref={priceRef}
            >
              {priceOptions.map((data) => {
                return (
                  <option key={data} value={data}>
                    {data}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="d-inline ms-2 h-100 w-20 fs-5">₹{finalPrice}/-</div>
        </div>
        <button
          className="btn btn-success justify-center ms-4"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
