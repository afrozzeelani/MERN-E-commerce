// import React from "react";

// const CartCheckout = () => {
//   return (
//     <>
//     <div className="container p-2">
//     <h6 className="fw-bold text-success">Cart Value</h6>
//     <hr />
//     <h3 className="fw-bolder">₹499</h3>
//     <h6><del className="text-muted">₹1499</del></h6>
//     <a href="a" className="btn btn-danger w-100 fw-bold"> CHECKOUT </a>
//     <hr />
//     </div>
//     </>
//   );
// };

// export default CartCheckout;
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CartItemCard from "./CartItemCard";
import { addItemsToCart, removeItemsFromCart } from "../../actions/cartAction";



const CartCheckout = () => {

  const navigate =useNavigate
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const deleteCartItems = (id) => {
    dispatch(removeItemsFromCart(id));
  };
  const checkOutHandler = () => {
    navigate("/login?redirect=/shipping");
  };

  return (
    <>
    
    <div className="container p-2">
    <h6 className="fw-bold text-success">Cart Value</h6>
    <hr />
<div>

    <h3 className="fw-bolder">{`₹${cartItems.reduce(
                  (acc, item) => acc + item.quantity * item.price,
                  0
                )}`}</h3>
    <h6><del className="text-muted">₹1499</del></h6>

    <button onClick={checkOutHandler} className="btn btn-danger w-100 fw-bold">CHECKOUT</button>
    <hr />
    </div>
    </div>
    </>
  );
};

export default CartCheckout;

