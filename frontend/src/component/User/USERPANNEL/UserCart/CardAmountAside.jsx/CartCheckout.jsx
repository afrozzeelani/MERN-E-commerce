import React from "react";

const CartCheckout = () => {
  return (
    <>
    <div className="container p-2">
    <h6 className="fw-bold text-success">Cart Value</h6>
    <hr />
    <h3 className="fw-bolder">₹499</h3>
    <h6><del className="text-muted">₹1499</del></h6>
    <a href="a" className="btn btn-danger w-100 fw-bold"> CHECKOUT </a>
    <hr />
    </div>
    </>
  );
};

export default CartCheckout;
